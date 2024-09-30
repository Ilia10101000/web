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

let availableStatusList = {
  "В наявності": [
    "Готові до застосування",
    "В ремонті",
    "Використано",
    "Знищено",
  ],
  "Готові до застосування": ["В ремонті", "Використано", "Знищено"],

  "В ремонті": [
    "Готові до застосування",
    "В наявності",
    "Використано",
    "Знищено",
  ],
  Використано: [],
  Знищено: [],
};

export function EditPage({ handleClickCancel, handleConfirmAddData, value }) {
  const [data, setData] = useState(value);

  const isActiveConfirmButton = () => {
    return !Object.keys(data).some((key) => data[key].trim() !== value[key]);
  };

  return (
    <AlertDialog isOpen={true} onClose={handleClickCancel}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Оберіть параметри
          </AlertDialogHeader>

          <AlertDialogBody
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Text>Підтип: {value.type}</Text>
            <Text>Поточний статус: {value.status}</Text>
            <Box>
              <Text>Змінити на статус:</Text>
              <Select
                value={data.status}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, status: e.target.value }))
                }
              >
                {availableStatusList[value.status].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </Select>
            </Box>
            <NumberInput
              min={1}
              max={value.quantity}
              inputMode="decimal"
              value={data.quantity}
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
                await handleConfirmAddData({
                  newRowData: { ...data, id: String(Date.now()) },
                  changedRowId: value.id,
                });
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
