import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

export function ButtonDefault({ children, ...rest }: Props) {
  return (
    <Button bg={"azul"} color={"white"} _hover={{ bg: "azulHover" }} {...rest}>
      {children}
    </Button>
  );
}
