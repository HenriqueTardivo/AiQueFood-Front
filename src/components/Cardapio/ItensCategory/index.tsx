import { Flex, Text } from "@chakra-ui/react";
import { useCardapio } from "../../../hooks/useCardapio";

interface Props {
  category: string;
}

export function ItensCategory(props: Props) {
  const { getItems } = useCardapio();

  return (
    <Flex
      flex={1}
      minH={"80vh"}
      borderWidth={"2px"}
      borderColor={"gray"}
      borderRadius={"12px"}
    >
      <Flex justify={"space-between"}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Lanches
        </Text>
      </Flex>
    </Flex>
  );
}
