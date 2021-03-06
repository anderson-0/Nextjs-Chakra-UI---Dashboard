import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" w="100%" maxW={360} bg="gray.800" padding="8" borderRadius={8} flexDirection="column">
        <Stack spacing={4}>
          <Input type="email" name="email" label="E-mail"/>
          <Input type="password" name="password" label="Senha"/>
        
          <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
