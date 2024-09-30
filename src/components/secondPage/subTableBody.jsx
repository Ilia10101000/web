import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export function SubTableBody({ children, parent }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>S/N</Th>
          <Th>Назва</Th>
          <Th>Кіл-сть</Th>
          <Th>Статус</Th>
          <Th>Миссия</Th>
        </Tr>
      </Thead>
      <Tbody>
        {children.map(({ id, s_n, name, quantity, status, mission }) => (
          <Tr key={id}>
            <Td>{id}</Td>
            <Td>{s_n}</Td>
            <Td>{name}</Td>
            <Td>{quantity}</Td>
            <Td>{status}</Td>
            <Td>{mission}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
