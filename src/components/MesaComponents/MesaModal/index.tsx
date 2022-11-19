import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Tr,
  Th,
  Thead,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

interface IMesaModalProps {
  id: string;
  name: string;
}

export default function MesaModal({ id, name }: IMesaModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip label="Visualizar pedidos" bg="gray.300" fontSize={"lg"}>
        <Button
          leftIcon={<ViewIcon />}
          w="10px"
          bg="transparent"
          _hover={{
            transition: "all .2s ease-in-out",
            transform: "scale(1.5)",
          }}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Recibo parcial {name} </ModalHeader>
          <ModalBody p="20px">
            <Table variant={"simple"}>
              <Thead>
                <Tr>
                  <Th>Qtde</Th>
                  <Th>Item</Th>
                  <Th>Preço</Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Coca Cola</Td>
                  <Td>
                    {new Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }).format(5)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>Supreme Bacon Burger</Td>
                  <Td>
                    {new Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }).format(25)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>Supre Picanha Burger</Td>
                  <Td>
                    {new Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }).format(15)}
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <Flex justify={"space-between"} mt="50px">
              <Button
                bg={"azul"}
                color={"white"}
                _hover={{ bg: "azulHover" }}
                onClick={onClose}
              >
                Voltar
              </Button>
              <Button bg={"azul"} color={"white"} _hover={{ bg: "azulHover" }}>
                Fechar conta
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
