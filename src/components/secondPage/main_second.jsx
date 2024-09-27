import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Collapse,
  Box,
  Button,
} from "@chakra-ui/react";

const SecondMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>type</Th>
          <Th>s_n</Th>
          <Th>linksType</Th>
          <Th>name</Th>
          <Th>quantity</Th>
          <Th>status</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            {" "}
            <Button onClick={() => setIsOpen(!isOpen)}>1</Button>
          </Td>
          <Td>Пикап</Td>
          <Td>214-FDW-54G</Td>
          <Td>Механiка</Td>
          <Td>Nissan</Td>
          <Td>12</Td>
          <Td>Готовi</Td>
        </Tr>
        {isOpen && (
          <Tr>
            <Td colSpan={7}>
              {/* <Collapse in={isOpen}> */}
                <Box padding="4" color="white" mt="4" bg="blue.500">
                  Here are the details for Item 1.
                </Box>
              {/* </Collapse> */}
            </Td>
          </Tr>
        )}
        <Tr>
          <Td>
            {" "}
            <Button onClick={() => setIsOpen(!isOpen)}>1</Button>
          </Td>
          <Td>Пикап</Td>
          <Td>214-FDW-54G</Td>
          <Td>Механiка</Td>
          <Td>Nissan</Td>
          <Td>12</Td>
          <Td>Готовi</Td>
        </Tr>
        <Tr>
          <Td colSpan={7}>
            <Collapse in={isOpen}>
              <Box padding="4" color="white" mt="4" bg="blue.500">
                Here are the details for Item 1.
              </Box>
            </Collapse>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export { SecondMain };
