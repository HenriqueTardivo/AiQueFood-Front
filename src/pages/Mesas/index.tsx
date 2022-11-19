import { HStack, Input, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Mesa, IMesa } from "../../components/MesaComponents/Mesa";
import { ButtonDefault } from "../../components/UI/ButtonDefault";
import useUtils from "../../hooks/useUtils";

export function Mesas() {
  const [mesas, setMesas] = useState<IMesa[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { generateRandomId } = useUtils();

  function generateMesas(qtMesas: number) {
    setMesas(
      [...new Array(qtMesas)].map((item, index) => {
        return {
          id: generateRandomId(),
          name: `Mesa ${index + 1}`,
          status: "occupied",
          order: "served",
        };
      })
    );
  }

  return (
    <Stack p={"20px"} spacing="50px">
      <HStack>
        <Text w="130px">Criar mesas:</Text>

        <Input
          w={"200px"}
          ref={inputRef}
          type={"number"}
          name={"qt_mesas"}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              generateMesas(Number(inputRef.current?.value));
            }
          }}
        />

        <ButtonDefault
          onClick={() => generateMesas(Number(inputRef.current?.value))}
        >
          Criar mesas
        </ButtonDefault>
      </HStack>

      <SimpleGrid columns={4} spacing={12} alignItems={"center"}>
        {mesas?.map((mesa, index) => (
          <Mesa
            key={index}
            id={mesa.id}
            name={mesa.name}
            status={mesa.status}
            order={mesa.order}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
