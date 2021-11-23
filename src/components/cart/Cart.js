//Imports
//React
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
//Diseño
import { Alert, AlertTitle, Button, Container, Divider, Grid, List, Typography } from "@mui/material";
//Archivos CartContext y CartItem
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cartItem/CartItem";
//Firebase
import { addDoc, collection } from "@firebase/firestore";
import { dataBase } from "../../firebase/firebase";

const Cart = () => {

    const { items, removeItem } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [compra, setCompra] = useState();

    useEffect(() => {
        let nuevoTotal = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(nuevoTotal);
    }, [items])

    const onComprar = async () => {

        const cartItems = items.map((item) => ({ id: item.id, title: item.title, price: item.price, cantidad: item.cantidad }));

        const docSnap = await addDoc(collection(dataBase, "cases"), {
            items: cartItems,
            total: total
        });
        setCompra(docSnap.id);
    }


    return (
        <Container maxWidth="md" sx={{ marginTop: 2 }}>
            {
                compra ?
                <Alert severity="success">
                    <AlertTitle>¡Felicidades!</AlertTitle>
                    ¡Su compra fue realizada de forma exitosa!
                </Alert>
                
                :
                !items.length ?
                    <>
                        <Typography variant="h4">El carrito se encuentra Vacio.</Typography>
                        <Button variant="contained" component={Link} to="/">Ver Catalogo</Button>
                    </>
                    :
                    <>

                        <Typography variant="h4">Mi Carrito</Typography>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {items?.map(item => <CartItem item={item} onDelete={removeItem} key={item.id}></CartItem>)}
                        </List>
                        <Divider />
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    Total:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h6" component="div">
                                    ${total}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Button variant="contained" onClick={onComprar}>Comprar</Button>
                    </>
            }
        </Container >
    );
}

export default Cart;