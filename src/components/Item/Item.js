import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';

const Item = ({id,name,img,price}) => {
    return (
        <Center py={12} >
      <Box
      
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'auto'}
            src={img}
          />
        </Box>
        <Stack pt={10} align={'center'}>
        
          
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} marginRight={'20%'}>
              ${price}
            </Text>
            
          </Stack>
          <Link to={`/detail/${id}`} className="Option">
          <Button color={'black'} fontSize={'sm'} textTransform={'uppercase'}>
            Detalle
          </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
    )
}

export default Item;