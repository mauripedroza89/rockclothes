import { Button, Stack, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       
           setQuantity(quantity+1)
       
       
   }

   const decrement = () => {
       if(quantity > 0) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <Stack>          
            <Flex justifyContent={'center'}>
                <Button  color={'white'} bg={'black'} onClick={decrement}>-</Button>
                <Heading  margin={'0 15px'} >{quantity}</Heading>
                <Button  color={'white'} bg={'black'} onClick={increment}>+</Button>
            </Flex>
            <Stack>
                <Button color={'white'} bgColor={'black'} onClick={() => onAdd(quantity)}>Add to cart</Button>
            </Stack>
       </Stack>
   )

}
export default ItemCount;