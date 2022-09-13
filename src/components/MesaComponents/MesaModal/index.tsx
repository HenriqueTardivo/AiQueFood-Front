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
          <ModalBody>
            <Flex justify={"space-between"}>
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
