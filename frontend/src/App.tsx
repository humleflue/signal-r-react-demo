import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import InnerApp from "./Body";

export function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <InnerApp />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
