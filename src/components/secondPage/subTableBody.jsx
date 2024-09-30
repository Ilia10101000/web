import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export function SubTableBody({ children }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>s_n</Th>
          <Th>name</Th>
          <Th>accounting</Th>
          <Th>status</Th>
          <Th>camera</Th>
        </Tr>
      </Thead>
      <Tbody>
        {children.map(({ id, s_n, name, accounting, status, camera }) => (
          <Tr key={id}>
            <Td>{id}</Td>
            <Td>{s_n}</Td>
            <Td>{name}</Td>
            <Td>{accounting}</Td>
            <Td>{status}</Td>
            <Td>{camera}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
