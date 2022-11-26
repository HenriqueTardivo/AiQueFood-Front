import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ButtonDefault } from "../../../UI/ButtonDefault";

interface Props {}

export function NewCategorieModal(props: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure(),
    newCatRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <ButtonDefault onClick={onOpen}>Nova categoria</ButtonDefault>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl mb="10px">
                <FormLabel>Insira o nome da nova categoria</FormLabel>
                <Input
                  type={"text"}
                  placeholder={"Categoria"}
                  ref={newCatRef}
                />
              </FormControl>
              <ButtonDefault>Confirmar</ButtonDefault>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
