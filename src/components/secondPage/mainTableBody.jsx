import React from "react";
import { Tbody } from "@chakra-ui/react";
import { MainTableBodyRow } from "./MainTableBodyRow";

export function MainTableBody({ data }) {

  return (
    <Tbody>
      {data.map((item) => (
        <MainTableBodyRow rowData={item} key={item.id}/>
      ))}
    </Tbody>
  );
}
