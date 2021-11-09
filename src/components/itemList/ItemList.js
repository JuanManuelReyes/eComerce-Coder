import { Grid, Typography } from "@mui/material";
import Item from "../item/Item";

const ItemList = ({ items }) => {

    const gridItems = items?.map((item) =>
        <Grid item xs={4} key={item.id}>
            <Item item={item}></Item>
        </Grid>
    )
        || <Typography>No hay Productos</Typography>;

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={0} marginBottom={2}>
            {gridItems}
        </Grid>
    );
}

export default ItemList;