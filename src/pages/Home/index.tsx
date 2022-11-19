import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
  Flex,
  Box,
  HStack,
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { Cardapio } from "../Cardapio";
import { Mesas } from "../Mesas";

export function Home() {
  const navigate = useNavigate();

  return (
    <Tabs>
      <TabList px={"15px"} py={"8px"} color={"azul"}>
        <Flex justify={"space-between"} w="100%">
          <HStack>
            <Image src={logo} w={"60px"} h={"60px"} mr={"50px"} />

            <Tab
              _selected={{ color: "vermelho", borderColor: "vermelho" }}
              fontWeight={"bold"}
              onClick={() => navigate("/mesas")}
            >
              Cardapio
            </Tab>
            <Tab
              _selected={{ color: "vermelho", borderColor: "vermelho" }}
              fontWeight={"bold"}
              onClick={() => navigate("/cardapio")}
            >
              Mesas
            </Tab>
            <Tab
              _selected={{ color: "vermelho", borderColor: "vermelho" }}
              fontWeight={"bold"}
              onClick={() => navigate("/cozinha")}
            >
              Cozinha
            </Tab>
          </HStack>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"md"} />
              </MenuButton>
              <MenuList>
                <MenuItem>Alterar senha</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Cardapio />
        </TabPanel>
        <TabPanel>
          <Mesas />
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
