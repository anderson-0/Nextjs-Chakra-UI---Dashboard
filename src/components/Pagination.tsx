import { Button, Stack, Box } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack 
      direction="row"
      marginTop="8"
      justifyContent="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
          }}  
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{
            background: 'gray.500'
          }}
        >
          2
        </Button>
      </Stack>
    </Stack>
  );
}