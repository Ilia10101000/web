import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Flex, Box, Button } from "@chakra-ui/react";

export function HomePage() {
  return (
    <Flex m={0} gap={2} p={2}>
      <Flex
        flexDirection={"column"}
        gap={2}
        basis={1}
      >
        <NavLink to={"existed1"}>
          {({ isActive }) => (
            <Button colorScheme={isActive ? "red" : "green"}>Зона A</Button>
          )}
        </NavLink>
        <NavLink to={"existed2"}>
          {({ isActive }) => (
            <Button colorScheme={isActive ? "red" : "green"}>Зона B-C</Button>
          )}
        </NavLink>
        <NavLink to={"existed3"}>
          {({ isActive }) => (
            <Button colorScheme={isActive ? "red" : "green"}>Зона D</Button>
          )}
        </NavLink>
      </Flex>
      <Box style={{width:'100%'}}>
        <Outlet />
      </Box>
    </Flex>
  );
}
