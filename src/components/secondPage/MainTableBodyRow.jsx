import React, { useState } from "react";
import { Td, Tr } from "@chakra-ui/react";
import { SubTableBody } from "./subTableBody";

export function MainTableBodyRow({ rowData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tr onClick={() => setIsOpen(!isOpen)}>
        <Td>{rowData.id}</Td>
        <Td>{rowData.type}</Td>
        <Td>{rowData.s_n}</Td>
        <Td>{rowData.linksType}</Td>
        <Td>{rowData.name}</Td>
        <Td>{rowData.quantity}</Td>
        <Td>{rowData.status}</Td>
      </Tr>
      {isOpen && (
        <Tr>
          <Td colSpan={7}>
            <SubTableBody children={rowData.children} />
          </Td>
        </Tr>
      )}
    </>
  );
}
