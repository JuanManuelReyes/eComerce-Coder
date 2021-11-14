//Imports
//React
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
//Diseño
import { Button, Container, Divider, Grid, List, Typography } from "@mui/material";
//Archivos CartContext y CartItem
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cartItem/CartItem";

const Cart = () => {

    const { items, removeItem } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let nuevoTotal = items.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(nuevoTotal);
    }, [items])

    return (
        <Container maxWidth="md" sx={{ marginTop: 2 }}>
            {
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
                    </>
            }
        </Container >
    );
}

export default Cart;