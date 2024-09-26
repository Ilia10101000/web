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
  Select,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

const handleChange_blockLetter_E = (event) => {
  if (event.nativeEvent.data === "E" || event.nativeEvent.data === "e") {
    event.preventDefault();
  }
};

export function EditPage({ handleClickCancel, handleConfirmAddData, value }) {
  const [data, setData] = useState(
    !!value
      ? value
      : {
          id: "",
          type: "",
          status: "Готові до застосування",
          quantity: "",
        }
  );

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
            <Input
              placeholder="Підтип"
              value={data.type}
              onChange={({ target: { value } }) =>
                setData((prevValue) => ({ ...prevValue, type: value }))
              }
            />
            <Select
              value={data.status}
              onChange={(e) =>
                setData((prev) => ({ ...prev, status: e.target.value }))
              }
            >
              <option value={"Готові до застосування"}>
                Готові до застосування
              </option>
              <option value={"Використано"}>Використано</option>
              <option value={"В наявності"}>В наявності</option>
              <option value={"В ремонті"}>В ремонті</option>
              <option value={"Знищено"}>Знищено</option>
            </Select>
            <NumberInput
              min={1}
              max={1000}
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
