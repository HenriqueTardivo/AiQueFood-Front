import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";

export function Header() {
  return (
    <Flex w="100vw" justify={"space-between"} py={"5px"} px={"8px"}>
      <HStack>
        <Image src={logo} w={"60px"} h={"60px"} />
      </HStack>
    </Flex>
  );
}
