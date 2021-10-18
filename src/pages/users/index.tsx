import { Box, Button, Checkbox, Flex, Heading, Icon, Text, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header/>
      <Flex width="100%" my="6" maxWidth={1480} marginX="auto" paddingX="6">
          <Sidebar/>
          <Box flex="1" borderRadius={8} background="gray.800" padding="8">
            <Flex marginBottom="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">Usuários</Heading>
              <Button 
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th paddingX="6" color="gray.300" width="8">
                    <Checkbox colorScheme="pink"/>
                  </Th>
                  <Th>Usuário</Th>
                  <Th>Data de Cadastro</Th>
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td paddingX="6">
                    <Checkbox colorScheme="pink"/>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Diego Fernandes</Text>
                      <Text fontSize="sm" color="gray.300">diego@email.com</Text>
                    </Box>
                  </Td>
                  <Td>
                    04 de Abril, 2021
                  </Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
      </Flex>
    </Box>
  );
}