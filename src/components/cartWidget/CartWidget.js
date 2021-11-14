//Imports
//React
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//Diseño
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//Archivos CartContext
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {

    const { itemsCount } = useContext(CartContext);

    return (
        <Badge badgeContent={itemsCount} color="secondary">
        <IconButton component={Link} to="/cart" color="inherit" >
            <ShoppingCartIcon />
        </IconButton>
        </Badge>
    );
}

export default CartWidget;