import React from 'react';
import {
  Tr,
  Td,
} from "@chakra-ui/react";

export function TableRow({columnsName}) {
  return (
    <Tr>
        {columnsName.map(item => (
            <Td></Td>
        ))}
    </Tr>
  )
}
