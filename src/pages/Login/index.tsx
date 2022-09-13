import {
  Stack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Center,
  Text,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export function Login() {
  const navigate = useNavigate();

  return (
    <Flex
      align={"center"}
      justify={"center"}
      direction={"column"}
      h={"100vh"}
      sx={{ gap: "40px" }}
    >
      <Stack>
        <Center>
          <Image src={logo} w={"160px"} h={"160px"} mb={"20px"} />
        </Center>
        <Flex
          h={"100%"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"azul"}
          fontWeight={"bolder"}
        >
          Bem vindo(a) ao
          <Text color="vermelho" ml="5px">
            AiQueFood
          </Text>
          !
        </Flex>
      </Stack>

      <Stack
        bg={"cinzaBg"}
        p={"50px"}
        w="30%"
        borderRadius={"40px"}
        spacing={"30px"}
        boxShadow={"lg"}
      >
        <FormControl>
          <FormLabel color={"azul"} fontWeight={"bold"}>
            Email
          </FormLabel>
          <Input placeholder="cabel@gmail.com" />
        </FormControl>

        <FormControl>
          <FormLabel color={"azul"} fontWeight={"bold"}>
            Senha
          </FormLabel>
          <Input type={"password"} placeholder="****" />
          <Flex justify={"flex-end"}>
            <Link fontSize={"sm"} color={"azul"}>
              Esqueceu sua senha ?
            </Link>
          </Flex>
        </FormControl>

        <Flex justify={"space-between"}>
          <Button
            w={"100%"}
            bg={"azul"}
            color={"white"}
            _hover={{ bg: "azulHover" }}
            onClick={() => navigate("/home")}
          >
            Entrar
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
