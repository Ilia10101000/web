import React from "react";
import { Routes } from "react-router-dom";
import { renderRouters } from "./utils/renderRouters";
import { FirstMain } from "./components/firstPage/main_first";
import { SecondMain } from "./components/secondPage/main_second";
import { ThirdMain } from "./components/thirdPage/main_third";
import { ErrorPage } from "./components/errorPage/errorPage";
import {HomePage} from "./components/homePage";
import { EditPage } from "./components/firstPage/EditPage";

function App() {
  const routers = [
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "existed1",
          element: <FirstMain />,
          children: [
            {
              path: "editPage",
              element: <EditPage />,
            },
          ],
        },
        {
          path: "existed2",
          element: <SecondMain />,
        },
        {
          path: "existed3",
          element: <ThirdMain />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return (
    <div>
      <Routes>{renderRouters(routers)}</Routes>
    </div>
  );
}

export {App};
