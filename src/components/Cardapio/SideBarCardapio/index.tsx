import {
  Flex,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useCardapio } from "../../../hooks/useCardapio";
import { NewCategorieModal } from "./NewCategorieModal";

interface Props {
  changeCategory: (category: string) => void;
}

export function SideBarCardapio({ changeCategory }: Props) {
  //const { categories, newCategorie } = useCardapio();

  //useEffect(() => changeCategory(categories[0]));

  return (
    <Flex
      flexDir={"column"}
      minH={"80vh"}
      as={"aside"}
      w={"15%"}
      borderWidth={"1px"}
      borderColor={"gray"}
      borderRadius={"12px"}
      p="15px"
    >
      <Stack>
        <Text fontSize={"lg"} color={"vermelho"} fontWeight={"bold"}>
          Categorias
        </Text>

        <UnorderedList pl="16px" color={"azul"}>
          {/* {categories.map((cat, index) => (
            <ListItem key={index}>
              <Link onClick={() => changeCategory(cat)}>{cat}</Link>
            </ListItem>
          ))} */}

          <ListItem>
            <Link onClick={() => changeCategory("Entradas")}>Entradas</Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => changeCategory("Pizzas")}>Pizzas</Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => changeCategory("Lanches")}>Lanches</Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => changeCategory("Bedidas")}>Bedidas</Link>
          </ListItem>
        </UnorderedList>
      </Stack>

      <Flex justify={"center"} flex={1} align={"end"}>
        <NewCategorieModal />
      </Flex>
    </Flex>
  );
}
