import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";

export function SecondMain() {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>На складі</TableCaption>
        <Thead>
          <Tr>
            <Th>Категорія</Th>
            <Th>Назва</Th>
            <Th isNumeric>Кількість</Th>
            <Th>Статус</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Птахи</Td>
            <Td>Шукач</Td>
            <Td isNumeric>25</Td>
            <Td>
              <Box p={1} borderRadius={5} bg={"green"}>
                В наявності
              </Box>
            </Td>
            <Td>
              <Button>...</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Птахи</Td>
            <Td>DaVinchi</Td>
            <Td isNumeric>12</Td>
            <Td>
              <Box p={1} borderRadius={5} bg={"green"}>
                В наявності
              </Box>
            </Td>
            <Td>
              <Button>...</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Авто</Td>
            <Td>Toyota Hilux Pick Up</Td>
            <Td isNumeric>1</Td>
            <Td>
              <Box p={1} borderRadius={5} bg={"green"}>
                В наявності
              </Box>
            </Td>
            <Td>
              <Button>...</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Авто</Td>
            <Td>Land Cruiser</Td>
            <Td isNumeric>1</Td>
            <Td>
              <Box p={1} borderRadius={5} bg={"green"}>
                В наявності
              </Box>
            </Td>
            <Td>
              <Button>...</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Авто</Td>
            <Td>Nissan Navara</Td>
            <Td isNumeric>1</Td>
            <Td>
              <Box p={1} borderRadius={5} bg={"orange"}>
                Надходження 12.11.24
              </Box>
            </Td>
            <Td>
              <Button>...</Button>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Категорія</Th>
            <Th>Назва</Th>
            <Th isNumeric>Кількість</Th>
            <Th>Статус</Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
