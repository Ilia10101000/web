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

export function FirstMain() {
  const [isHiddenEditPage, setIsHiddenEditPage] = useState(false);
  const [data, setData] = useState([
    {
      id: "1",
      type: "FPV",
      status: "Готові до використання",
      quantity: "25",
    },
    {
      id: "2",
      type: "DJI Matrice TB30",
      status: "Використано",
      quantity: "30",
    },
    {
      id: "3",
      type: "Mavic 3",
      status: "В ремонті",
      quantity: "10",
    },
  ]);

  const toogleEditPageVisibility = () => setIsHiddenEditPage((prev) => !!!prev);
  const handleChangeItemValue = (data) => setIsHiddenEditPage(data);

  const addNewData = (newData) => {
    if (data.some((item) => item.id === newData.id)) {
      setData((prevData) =>
        prevData.map((i) => {
          if (i.id === newData.id) {
            return newData;
          } else {
            return i;
          }
        })
      );
    } else {
      setData((prevValue) => [...prevValue, newData]);
    }
  };

  return (
    <Box>
      <Box mb={5}>
        <Text fontSize={"2xl"}>Підрозділ: {subdivision}</Text>
        <Text fontSize={"lg"}>Особистий номер: {personalId}</Text>
      </Box>
      <TableContainer>
        <Table variant="striped" size='sm'>
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
      <Button colorScheme="teal" onClick={toogleEditPageVisibility}>Додати</Button>
      {!!isHiddenEditPage && (
        <EditPage
          value={isHiddenEditPage}
          handleConfirmAddData={addNewData}
          handleClickCancel={toogleEditPageVisibility}
        />
      )}
    </Box>
  );
}
