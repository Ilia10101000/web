import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Text,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { EditPage } from "./EditPage";

let subdivision = "5";
let personalId = "032-HF12";
let availableStatusList = [
  { priority: "1", status: "В наявності" },
  { priority: "2", status: "Готові до застосування" },
  { priority: "3", status: "В ремонті" },
  { priority: "4", status: "Використано" },
  { priority: "4", status: "Знищено" },
];

export function FirstMain() {
  const [editableRowData, setEditableRowData] = useState(null);
  const [data, setData] = useState([
    {
      id: "1",
      type: "Маленькі птахи",
      status: "Готові до застосування",
      quantity: "25",
    },
    {
      id: "2",
      type: "Великі птахи",
      status: "Використано",
      quantity: "30",
    },
    {
      id: "3",
      type: "На складі",
      status: "В наявності",
      quantity: "10",
    },
  ]);

  const handleChangeItemValue = (data) => setEditableRowData(data);
  const hideEditForm = () => setEditableRowData(null);

  const addNewData = (newData) => {
    setData((prevValue) => [...prevValue, newData]);
  };

  return (
    <Box>
      <Box mb={5}>
        <Text fontSize={"2xl"}>Підрозділ: {subdivision}</Text>
        <Text fontSize={"lg"}>Особистий номер: {personalId}</Text>
      </Box>
      <TableContainer>
        <Table variant="striped" size="sm">
          <TableCaption>На складі</TableCaption>
          <Thead>
            <Tr>
              <Th>Підтип</Th>
              <Th>Статус</Th>
              <Th isNumeric>Кількість</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ id, type, status, quantity }) => (
              <Tr key={id}>
                <Td>{type}</Td>
                <Td>{status}</Td>
                <Td isNumeric>{quantity}</Td>
                <Td>
                  <Button
                    colorScheme="purple"
                    onClick={() =>
                      handleChangeItemValue({ type, status, quantity, id })
                    }
                  >
                    ...
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Підтип</Th>
              <Th>Статус</Th>
              <Th isNumeric>Кількість</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {editableRowData && (
        <EditPage
          value={editableRowData}
          handleConfirmAddData={addNewData}
          handleClickCancel={hideEditForm}
        />
      )}
    </Box>
  );
}
