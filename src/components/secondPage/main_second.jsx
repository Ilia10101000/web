import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

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

export function SecondMain() {
  return (
    <Box>
      <Accordion allowToggle>
        {data.map((catalog) => {
          return(
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Box as="span">{catalog.id}</Box>
                  <Box as="span">{catalog.type}</Box>
                  <Box as="span">{catalog.s_n}</Box>
                  <Box as="span">{catalog.linksType}</Box>
                  <Box as="span">{catalog.name}</Box>
                  <Box as="span">{catalog.quantity}</Box>
                  <Box as="span">{catalog.status}</Box>
                  <Box as="span">{catalog.mission}</Box>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </AccordionItem>

          )
        })}
      </Accordion>
    </Box>
  );
}
