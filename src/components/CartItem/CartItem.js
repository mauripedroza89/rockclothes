import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { 
    CloseButton, 
    Flex, 
    Heading, 
    Link,
    Stack,
    Box,
    Text,
    Image, 
    Button
} from '@chakra-ui/react';
import * as React from 'react';



const CartItem = ({ id, name, quantity, price, img }) => {
  const { removeItem } = useContext(CartContext)
console.log(`que hay aqui ${img}`)
    const handleRemove = (id) => {
        removeItem(id)
    }


  return (
    <Flex borderWidth="1px" rounded="lg" padding="8" width="full" direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      
      <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={img} 
        alt={'imagen'}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text  fontSize="sm">
            Quantity: {quantity}
          </Text>
        </Stack>
        
      </Box>
    </Stack>

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        
        <Heading fontSize="sm" >Price: ${price}</Heading>
        <Text>Subtotal: ${price * quantity} </Text>
        <Button bgColor="rgb(35, 35, 36)" color={'white'} aria-label={`Delete name from cart`} onClick={() => handleRemove(id)}>Remove</Button>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
      <Button aria-label={`Delete name from cart`} onClick={() => handleRemove(id)}>Remove</Button>
        
      <Heading >Price: ${price}</Heading>
      </Flex>
    </Flex>
  )
}

export default CartItem