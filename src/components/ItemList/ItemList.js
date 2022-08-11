import Item from "../Item/Item";
import { memo } from 'react';
import { Grid, GridItem } from '@chakra-ui/react'


const ItemList = ({products}) => {
    return (
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 5fr)"}} gap="5" >
                {products.map(prod =>
                  <GridItem> <Item key={prod.id} {...prod}  /></GridItem>
                )}
            </Grid>
            
    )
}

export default memo(ItemList);
