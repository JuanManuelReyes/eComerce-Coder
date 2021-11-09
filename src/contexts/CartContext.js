import { Alert, Snackbar } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [snackbar, setSnackbar] = useState({
        text: '',
        severity: 'success',
        open: false
    });
    const [items, setItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        setItemsCount(items
            .reduce((acc, item) => acc + item.cantidad, 0));
    }, [items])

    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {

            setSnackbar({
                text: 'Este producto ya esta en el carrito.',
                severity: 'warning',
                open: true
            });
            return;
        }

        setSnackbar({
            text: `Se han agregado ${cantidad} productos al carrito`,
            severity: 'success',
            open: true
        });

        setItems([...items, { cantidad: cantidad, ...item }]);
    }

    const removeItem = (itemId) => {

        setItems(items.filter(item => item.id !== itemId));

        setSnackbar({
            text: `Se ha eliminado el producto del carrito`,
            severity: 'success',
            open: true
        });
    }

    const clear = () => {

        setItems([]);

        setSnackbar({
            text: `Se ha vaciado el carrito`,
            severity: 'success',
            open: true
        });
    }

    const isInCart = (itemId) => {
        return items.some(item => item.id === itemId);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({
            text: '',
            severity: 'success',
            open: false
        });
    };

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, items, itemsCount }}>
            {children}

            <Snackbar open={snackbar.open} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.text}
                </Alert>
            </Snackbar>
        </CartContext.Provider>
    );
};
