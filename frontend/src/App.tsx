import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  VStack,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const App = () => {
  const [number, setNumber] = useState(0);

  const handleSubmit = async () => {
    const data = await postData('http://localhost:3000/predict-emission', {
      number,
    });

    console.log(data);
  };

  return (
    <VStack h="100vh" w="100vw" align="center">
      <Box w="50%" mt="20vh">
        <FormControl onSubmit={() => handleSubmit}>
          <FormLabel>How much fuel does your car consume per 100 km?</FormLabel>
          <Input type="number" onBlur={(e: any) => setNumber(e.target.value)} />
          <Input type="submit" value="Calculate" />
        </FormControl>
      </Box>
    </VStack>
  );
};
