//Imports
//Diseño
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
//React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//Archivo CartWidget
import CartWidget from '../cartWidget/CartWidget';
//Imagen de Marca
import brandLogo from './brand.png';
//Se importa la Base de Datos
import { dataBase } from '../../firebase/firebase';
//FireBase
import { collection, getDocs } from '@firebase/firestore';

const useStyles = makeStyles((theme) =>
    createStyles({
        logo: {
            maxWidth: 230,
            margin: 10,
        },
        bar:{
            backgroundColor: "rgb(26, 25, 25)"
        }
    })
);

const NavBar = () => {

    const [categorias, setCategorias] = useState([]);
    const classes = useStyles();

    useEffect(() => {

        const requestData = async () => {
            const categoriasSnapshot = await getDocs(collection(dataBase, 'categorias'));
            const categoriasList = categoriasSnapshot.docs
                .map((document) => ({ ...document.data(), id: document.id }));

            setCategorias(categoriasList);

            //Console de Prueba console.log(categoriasList);
        }
        requestData();
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.bar}> 
                    <Link to="/">
                        <img src={brandLogo} alt="Sigma Logo" className={classes.logo} />
                    </Link>
                    {
                        categorias.map((categoria) =>
                            <Button
                                component={Link}
                                to={`/category/${categoria.id}`}
                                color="inherit"
                                key={categoria.id}>
                                {categoria.nombre}
                            </Button>)
                    }
                    <Box sx={{ flexGrow: 1 }} />
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;