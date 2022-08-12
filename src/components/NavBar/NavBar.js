import CartWidget from "../CartWidget/CartWidget";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Avatar
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from '../../images/rocklogo.png';

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box className="test">
      <Flex 
      justify={{ base: 'center', md: 'center' }}
      bg={useColorModeValue('black', 'black')}
      >
        <Button bg='black' onClick={()=>navigate("/")} size="m"><Avatar size='xl'  src={logo}/></Button>
      </Flex>
      <Flex
        bg={useColorModeValue('black', 'white')}
        color={useColorModeValue('black', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('red', 'red')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
          color='white'
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        
        <Flex flex={{ base: 3 }} justify={{ base: 'center', md: 'center' }}>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Flex justify={{ base: 'center', md: 'center' }}>
          <Button size={{ base: 'lg', md: 'lg' }} onClick={()=>navigate("/cart")} color={''} >
              <CartWidget/>
            </Button>
            </Flex>
        </Flex>
        
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'center'}
          direction={'row'}
          spacing={6}>
          
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', '#F2F4F3');
  const linkHoverColor = useColorModeValue('red', '#F2F4F3');
  const popoverContentBgColor = useColorModeValue('orange', 'green');
  const navigate = useNavigate();

  return (
    <Stack direction={'row'} spacing={4} paddingTop={3}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => navigate(navItem.href)}
                fontSize={'xl'}
                fontWeight={800}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('red', 'red') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#a9927d' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'center'}
          align={'center'}
          flex={1}>
          <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('#f2f4f3', '#f2f4f3')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('#0a0908', '#0a0908')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('#0a0908', 'white')}
          align={'center'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [

  {
    label: 'Jackets',
    href: '/category/jackets',
  },
  {
      label: 'Jeans',
      href: '/category/jeans',
    },
    
  {
    label: 'Boots',
    href: '/category/boots',
  },
  {
    label: 'Feedback',
    href: '#',
  },
  {
      label: 'Contact',
      href: '#',
  },
];