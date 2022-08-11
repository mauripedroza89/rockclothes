import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Heading, Center, Stack } from "@chakra-ui/react";
import { getProducts } from "../../services/firebase/Firestore";
import { useAsync } from "../../hooks/useAsync";


const ItemListContainer = (props) => {
    const [title, setTitle] = useState('Bienvenidos')
    const { categoryId } = useParams()
    const {isLoading, data, error} = useAsync(() =>getProducts(categoryId), [categoryId])

            /* aplicamos el spiner */
            if(isLoading){
                return <Center><Heading>Loading...</Heading></Center>
            }
            if(error){
                return <Center><Heading>There was an error</Heading></Center>
            }
            
    return(
        <Stack padding='5%'>
            <Center><Heading>New arrivals</Heading></Center>            
            {data.length > 0
            ? <ItemList products={data}/>
            : <Center><Heading>There are no items in this category</Heading></Center>
            }
            
        </Stack>
    )
}

export default ItemListContainer;