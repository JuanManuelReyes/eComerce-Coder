import { Avatar, Divider, Grid, IconButton, ListItem, ListItemAvatar, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useFirebaseImage } from '../../hooks/useFirebaseImage';

const CartItem = ({ item, onDelete }) => {

    const { pictureUrl, price, title, cantidad } = item;
    const picture =  useFirebaseImage(pictureUrl);

    return (
        <>
            <ListItem alignItems="flex-start"
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => onDelete(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar alt={title} src={picture} variant="square" sx={{ width: 70, height: 70 }} />
                </ListItemAvatar>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                            ${price * cantidad}
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                            {cantidad} Unidad{cantidad > 1 && 'es'}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default CartItem;