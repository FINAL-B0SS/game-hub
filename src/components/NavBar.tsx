import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/smile.png'

const NavBar = () => {
  return <HStack>
    <Image src={logo} />
    <Text>NavBar</Text>
  </HStack>;
};

export default NavBar;
