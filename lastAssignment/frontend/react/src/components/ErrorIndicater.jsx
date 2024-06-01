import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function ErrorIndicator() {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "Something went wrong",
      status: "error",
      isClosable: true,
    });
  }, [toast]);

  return null; // No need to return any JSX
}
