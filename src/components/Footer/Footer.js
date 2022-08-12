import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Avatar
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa';
  import { ReactNode } from 'react';
  import logo from '../../images/rocklogo.png';


  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('grey', 'grey')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('black', 'black')}
        color={useColorModeValue('white', 'white')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Avatar src={logo} size='xl' />
          <Text>© 2022 Rock Clothes. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }