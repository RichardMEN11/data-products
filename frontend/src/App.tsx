import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  VStack,
  Box,
} from '@chakra-ui/react';

function App() {
  return (
    <VStack h="100vh" w="100vw" align="center">
      <Box w="50%" mt="20vh">
        <FormControl>
          <FormLabel>How much fuel does your car consume per 100 km?</FormLabel>
          <Input type="number" />
          <Input type="submit" value="Calculate" />
        </FormControl>
      </Box>
    </VStack>
  );
}

export default App;
