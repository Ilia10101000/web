import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
} from "@chakra-ui/react";

export function SubTableBody({ children }) {
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
            
        </Tbody>
    </Table>
  );
}
