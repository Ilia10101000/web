import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/react";

export function HomePage() {
  return (
    <Flex direction={"column"} m={0} gap={2} p={2}>
      <Flex gap={2} basis={1}>
        <NavLink to={"existed1"}>
          {({ isActive }) => (
            <Button size={"sm"} colorScheme={isActive ? "cyan" : "yellow"}>
              Зона A
            </Button>
          )}
        </NavLink>
        <NavLink to={"existed2"}>
          {({ isActive }) => (
            <Button size={"sm"} colorScheme={isActive ? "cyan" : "yellow"}>
              Зона B-C
            </Button>
          )}
        </NavLink>
        <NavLink to={"existed3"}>
          {({ isActive }) => (
            <Button size={"sm"} colorScheme={isActive ? "cyan" : "yellow"}>
              Зона D
            </Button>
          )}
        </NavLink>
      </Flex>
      <Box style={{ width: "100%" }}>
        <Outlet />
      </Box>
    </Flex>
  );
}
