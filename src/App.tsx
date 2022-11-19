import { ChakraProvider } from "@chakra-ui/react";
import { CardapioProvider } from "./hooks/useCardapio";
import AppRoutes from "./routes";
import { customTheme } from "./theme";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CardapioProvider>
        <AppRoutes />
      </CardapioProvider>
    </ChakraProvider>
  );
}
