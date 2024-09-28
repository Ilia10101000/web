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
    s_n: "773-FDW-56J",
    linksType: "Механiка",
    name: "Nissan",
    quantity: "12",
    status: "Готовi",
    children: [
      {
        id: "1",
        s_n: "FDW-432",
        name: "Nacaro",
        quantity: "4",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "2",
        s_n: "FDW-432",
        name: "Spring",
        quantity: "5",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "3",
        s_n: "FDW-432",
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
    s_n: "214-HTM-54G",
    linksType: "Механiка",
    name: "Toyota",
    quantity: "21",
    status: "Готовi",
    children: [
      {
        id: "1",
        s_n: "HTM-234",
        name: "Camry",
        quantity: "7",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "2",
        s_n: "HTM-644",
        name: "Vedro",
        quantity: "9",
        status: "Готовi",
        mission: "Працюють",
      },
      {
        id: "3",
        s_n: "HTM-457",
        name: "Koryto",
        quantity: "5",
        status: "Готовi",
        mission: "Працюють",
      },
    ],
  },
  {
    id: 3,
    type: "Хетчбек",
    s_n: "301-MKW-65P",
    linksType: "Робот",
    name: "Lexus",
    quantity: "12",
    status: "В ремонтi",
    children: [
      {
        id: "1",
        s_n: "MKW-665",
        name: "Camry",
        quantity: "7",
        status: "В ремонтi",
        mission: "-",
      },
      {
        id: "2",
        s_n: "MKW-355",
        name: "Vedro",
        quantity: "9",
        status: "В ремонтi",
        mission: "-",
      },
      {
        id: "3",
        s_n: "MKW-097",
        name: "Koryto",
        quantity: "5",
        status: "В ремонтi",
        mission: "-",
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
