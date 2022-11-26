import { Flex, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ItensCategory } from "../../components/Cardapio/ItensCategory";
import { SideBarCardapio } from "../../components/Cardapio/SideBarCardapio";
import { useCardapio } from "../../hooks/useCardapio";

interface Props {}

export function Cardapio(props: Props) {
  const { categories } = useCardapio();
  const [category, setCategory] = useState<string>(categories[0]);

  return (
    <HStack spacing={"20px"}>
      <SideBarCardapio changeCategory={(cat) => setCategory(cat)} />

      <ItensCategory category={category} />
    </HStack>
  );
}
