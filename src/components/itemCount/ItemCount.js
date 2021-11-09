import { Button, Paper, Stack, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const decress = () => {

        if (cantidad === 1) {
            return;
        }

        setCantidad(cantidad - 1);
    }

    const incress = () => {

        if (cantidad === stock) {
            return;
        }

        setCantidad(cantidad + 1);
    }

    const addToCart = () => {
        onAdd(cantidad);
    }

    return (
        <Stack direction="row" spacing={1}>
            <Button onClick={decress} variant="outlined">
                <RemoveIcon />
            </Button>

            <Paper sx={{ py: 1, minWidth: 50, textAlign: 'center' }} >
                {cantidad}
            </Paper>

            <Button onClick={incress} variant="outlined">
                <AddIcon />
            </Button>

            <Tooltip title="Agregar al carrito">
                <Button onClick={addToCart} variant="contained">
                    <AddShoppingCartIcon />
                </Button>
            </Tooltip>
        </Stack>
    )
}

ItemCount.defaultProps = {
    initial: 1
}

export default ItemCount;