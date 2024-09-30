import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Input,
  Box,
  Select,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";

const handleChange_blockLetter_E = (event) => {
  if (event.nativeEvent.data === "E" || event.nativeEvent.data === "e") {
    event.preventDefault();
  }
};

const id = String(Date.now());

let availableStatusList = [
  { priority: "1", status: "В наявності" },
  { priority: "2", status: "Готові до застосування" },
  { priority: "3", status: "В ремонті" },
  { priority: "4", status: "Використано" },
  { priority: "4", status: "Знищено" },
];

export function EditPage({ handleClickCancel, handleConfirmAddData, value }) {
  const [data, setData] = useState(value);

  const isActiveConfirmButton = () => {
    return !Object.keys(data).some((key) => data[key].trim() !== value[key]);
  };

  const getStatusPriority = () => {
    let searchedPriority;
    for( let item of availableStatusList){
      if (item.status === value.status) {
        searchedPriority = item.priority;
        break;
      }
    }
    return searchedPriority
  }

  console.log(getStatusPriority())

  return (
    <AlertDialog isOpen={true} onClose={() => console.log("Click")}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Оберіть параметри
          </AlertDialogHeader>

          <AlertDialogBody
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Text>Підтип: {data.type}</Text>
            <Text>Поточний статус: {data.status}</Text>
            <Box>
              <Text>Змінити на статус:</Text>
              <Select
                value={data.status}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, status: e.target.value }))
                }
              >
                {availableStatusList.map(({ status }) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </Box>
            <NumberInput
              min={1}
              max={1000}
              inputMode="decimal"
              value={value.quantity}
              onChange={(quantity) =>
                setData((prev) => ({ ...prev, quantity }))
              }
            >
              <NumberInputField
                placeholder="Кількість"
                onChange={handleChange_blockLetter_E}
              />
            </NumberInput>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              isDisabled={isActiveConfirmButton()}
              colorScheme="blue"
              onClick={async () => {
                await handleConfirmAddData(
                  data.id ? data : { ...data, id: String(Date.now()) }
                );
                handleClickCancel();
              }}
              ml={3}
            >
              Підтвердити
            </Button>
            <Button colorScheme="red" onClick={handleClickCancel} ml={3}>
              Скасувати
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
