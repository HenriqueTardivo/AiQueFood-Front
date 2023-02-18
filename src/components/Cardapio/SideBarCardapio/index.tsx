import {
  Flex,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useCardapio } from "../../../hooks/useCardapio";
import { NewCategorieModal } from "./NewCategorieModal";

interface Props {
  changeCategory: (category: string) => void;
  selectedCategorie: string;
}

export function SideBarCardapio({ changeCategory, selectedCategorie }: Props) {
  const { categories } = useCardapio();

  return (
    <Flex
      flexDir={"column"}
      minH={"80vh"}
      as={"aside"}
      w={"15%"}
      borderWidth={"1px"}
      borderColor={"gray"}
      borderRadius={"12px"}
      boxShadow={"5px 5px 10px  #888888"}
      p="15px"
    >
      <Stack>
        <Text fontSize={"lg"} color={"vermelho"} fontWeight={"bold"}>
          Categorias
        </Text>

        <UnorderedList pl="16px" color={"azul"}>
          {categories.map((cat, index) => {
            const isSelected = selectedCategorie === cat;

            return (
              <ListItem key={index}>
                <Link
                  onClick={() => changeCategory(cat)}
                  fontWeight={isSelected ? "bold" : "normal"}
                  fontSize={isSelected ? "2xl" : "medium"}
                >
                  {cat}
                </Link>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Stack>

      <Flex justify={"center"} flex={1} align={"end"}>
        <NewCategorieModal />
      </Flex>
    </Flex>
  );
}
