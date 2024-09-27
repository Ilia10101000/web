import React, { useState } from "react";
import { Td, Button, Tr, Tbody, Table, Thead, Th } from "@chakra-ui/react";

export function MainTableBody({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Tbody>
      {data.map((item) => (
        <>
          <Tr>
            <Td>
              {" "}
              <Button onClick={() => setIsOpen(!isOpen)}>{item.id}</Button>
            </Td>
            <Td>{item.type}</Td>
            <Td>{item.s_n}</Td>
            <Td>{item.linksType}</Td>
            <Td>{item.name}</Td>
            <Td>{item.quantity}</Td>
            <Td>{item.status}</Td>
          </Tr>
          {isOpen && (
            <Tr>
              <Td colSpan={7}>
                <Table variant="simple" size={"m"}>
                  <Thead>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>centimetres (cm)</Td>
                      <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>metres (m)</Td>
                      <Td isNumeric>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Td>
            </Tr>
          )}
        </>
      ))}
    </Tbody>
  );
}
