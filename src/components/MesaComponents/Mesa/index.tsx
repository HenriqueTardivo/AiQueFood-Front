import { Button, Flex, Text, Tooltip } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, TimeIcon } from "@chakra-ui/icons";
import MesaModal from "../MesaModal";

export interface IMesa {
  id: string;
  name: string;
  status: "occupied" | "free";
  order?: "kitchen" | "served";
}

export function Mesa({ id, status, order, name }: IMesa) {
  return (
    <Flex
      borderWidth={"3px"}
      borderRadius={"20px"}
      borderColor={"azul"}
      p={"10px"}
      h={"150px"}
      w={"300px"}
      bg={status === "occupied" ? "white" : "azul"}
      _hover={{
        transition: "all .2s ease-in-out",
        transform: "scale(1.1)",
      }}
      flexDirection={"column"}
      justifyContent="space-between"
    >
      <Flex
        justify={"space-between"}
        color={status === "free" ? "white" : "azul"}
      >
        <Text fontSize={"25px"}>{name}</Text>
        <Tooltip label="Desativar mesa" bg="gray.300" fontSize={"lg"}>
          <Button
            leftIcon={<CloseIcon />}
            w="10px"
            bg="transparent"
            _hover={{
              transition: "all .2s ease-in-out",
              transform: "scale(1.5)",
            }}
          />
        </Tooltip>
      </Flex>

      {order && (
        <Flex justifyContent={"space-between"} align="center">
          {order === "kitchen" ? (
            <Text>
              {" "}
              <TimeIcon mr="10px" /> Aguardando Pedido
            </Text>
          ) : (
            <Text>
              <CheckIcon color="green" mr="10px" /> Pedido Entregue
            </Text>
          )}

          <MesaModal id={id} name={name} />
        </Flex>
      )}
    </Flex>
  );
}
