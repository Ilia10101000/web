import React from "react";
import { Table, Thead, Tr, Th } from "@chakra-ui/react";
import { MainTableBody } from "./mainTableBody";

const availableMainParametres = {
  id: "number",
  type: ["A", "B", "C", "D"],
  s_n: "text",
  linksType: ["duplex", "symplex"],
  type: ["spy", "strike"],
  name: "text",
  accounting: ["accounted", "not accounted"],
  power: ["10", "20"],
  status: ["warehouse", "in stock", "repair", "destroyed"],
};

let availableChildParametres = {
  id: "number",
  s_n: "text",
  name: "text",
  accounting: ["accounted", "not accounted"],
  status: ["warehouse", "in stock", "repair", "destroyed"],
  camera:['day','night','mix']
};

const data = [
  {
    id: "1",
    type: "C",
    s_n: "132-GFD-950",
    linksType: "symplex",
    type: "spy",
    name: "Honda",
    accounting: "accounted",
    power: "10",
    status: "in stock",
    children: [
      {
        id: "1",
        s_n: "567-ADT-610",
        name: "Name 1",
        accounting: "not accounted",
        status: "in stock",
        camera: "mix",
      },
      {
        id: "2",
        s_n: "742-UTF-511",
        name: "Name 2",
        accounting: "accounted",
        status: "in stock",
        camera: "day",
      },
      {
        id: "3",
        s_n: "664-POH-432",
        name: "Name 3",
        accounting: "accounted",
        status: "in stock",
        camera: "night",
      },
    ],
  },
  {
    id: "2",
    type: "A",
    s_n: "254-HYD-320",
    linksType: "duplex",
    type: "strike",
    name: "Nissan",
    accounting: "not accounted",
    power: "20",
    status: "warehouse",
    children: [
      {
        id: "1",
        s_n: "567-ADT-610",
        name: "Name 1",
        accounting: "not accounted",
        status: "warehouse",
        camera: "mix",
      },
      {
        id: "2",
        s_n: "789-TRF-121",
        name: "Name 2",
        accounting: "accounted",
        status: "warehouse",
        camera: "day",
      },
      {
        id: "3",
        s_n: "664-POH-432",
        name: "Name 3",
        accounting: "accounted",
        status: "warehouse",
        camera: "night",
      },
    ],
  },
  {
    id: "3",
    type: "B",
    s_n: "447-JKL-587",
    linksType: "symplex",
    type: "spy",
    name: "Mazda",
    accounting: "accounted",
    power: "10",
    status: "repair",
    children: [
      {
        id: "1",
        s_n: "789-POH-400",
        name: "Name 1",
        accounting: "not accounted",
        status: "repair",
        camera: "mix",
      },
      {
        id: "2",
        s_n: "121-UTF-567",
        name: "Name 2",
        accounting: "accounted",
        status: "repair",
        camera: "day",
      },
      {
        id: "3",
        s_n: "587-POH-447",
        name: "Name 3",
        accounting: "accounted",
        status: "repair",
        camera: "night",
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
          <Th>type</Th>
          <Th>name</Th>
          <Th>accounting</Th>
          <Th>power</Th>
          <Th>status</Th>
        </Tr>
      </Thead>
      <MainTableBody data={data} />
    </Table>
  );
};

export { SecondMain };
