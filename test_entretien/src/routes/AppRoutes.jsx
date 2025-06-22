// src/routes/AppRouter.jsx
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export default function AppRoutes() {
   const routes = useRoutes([
      {
         path: "/",
         element: <MainLayout />,
         children: [
            { path: "", element: <Home /> },
            
         ],
      },
     
   ]);

   return routes;
}

