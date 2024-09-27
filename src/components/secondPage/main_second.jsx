import React from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import {MainTableBody} from "./mainTableBody";

const data = [
  {
    id: 1,
    type: "Пикап",
    s_n: "214-FDW-54G",
    linksType: "Механiка",
    name: "Nissan",
    quantity: "12",
    status: "Готовi",
    children: [
      {
        id: "1",
        s_n: "FBC-432",
        name: "Nacaro",
        quantity: "4",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "2",
        s_n: "FBC-432",
        name: "Spring",
        quantity: "5",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "3",
        s_n: "FBC-432",
        name: "Fire",
        quantity: "3",
        status: "Готовi",
        mission: "Працюють",
      },
    ],
  },
  {
    id: 2,
    type: "Унiверсал",
    s_n: "214-FDW-54G",
    linksType: "Механiка",
    name: "Toyota",
    quantity: "21",
    status: "Готовi",
    children: [
      {
        id: "1",
        s_n: "FBC-432",
        name: "Camry",
        quantity: "7",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "2",
        s_n: "FBC-432",
        name: "Vedro",
        quantity: "9",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "3",
        s_n: "FBC-432",
        name: "Koryto",
        quantity: "5",
        status: "Готовi",
        mission: "Працюють",
      },
    ],
  },
];

const SecondMain = () => {

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>type</Th>
          <Th>s_n</Th>
          <Th>linksType</Th>
          <Th>name</Th>
          <Th>quantity</Th>
          <Th>status</Th>
        </Tr>
      </Thead>
      <MainTableBody data={data}/>
    </Table>
  );
};

export { SecondMain };
