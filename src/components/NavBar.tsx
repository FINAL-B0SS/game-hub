import { ColorModeScript, HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/smile.png'
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return <HStack justifyContent="space-between" padding="10px">
    <Image src={logo} boxSize={50}/>
    <ColorModeSwitch />
  </HStack>;
};

export default NavBar;
