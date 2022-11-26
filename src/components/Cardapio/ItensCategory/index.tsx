import { Flex, Text } from "@chakra-ui/react";
import { useCardapio } from "../../../hooks/useCardapio";

interface Props {
  category: string;
}

export function ItensCategory({ category }: Props) {
  //const { getItems } = useCardapio();

  return (
    <Flex
      flex={1}
      minH={"80vh"}
      borderWidth={"1px"}
      borderColor={"gray"}
      borderRadius={"12px"}
      p="25px"
    >
      <Flex justify={"space-between"}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          {category}
        </Text>
      </Flex>
    </Flex>
  );
}
