import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes";
import { customTheme } from "./theme";

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AppRoutes />
    </ChakraProvider>
  );
}
