import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import AddTouristSpot from "../componants/AddTouristSpot";
import AllTouristSpot from "../componants/AllTouristSpot";
import MyList from "../componants/MyList";
import Register from "../componants/Register";
import Login from "../componants/Login";
import ViewDetailsPage from "../componants/ViewDetailsPage";
import TouristSportCard from "../componants/TouristSportCard";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://euro-explorer-server.vercel.app/euroExplorer')
            },
            {
                path: '/AddTouristSpot',
                element: <AddTouristSpot />,
            },
            {
                path: '/AllTouristSpot',
                element: <AllTouristSpot />,
                loader: () => fetch('https://euro-explorer-server.vercel.app/euroExplorer')
            },
            {
                path: '/TouristSpotCard',
                element: <TouristSportCard></TouristSportCard>,
                loader: () => fetch('https://euro-explorer-server.vercel.app/euroExplorer')
            },
            {
                path: '/MyList',
                element: <PrivateRoute><MyList /></PrivateRoute>,
            },
            {
                path: '/Register',
                element: <Register />,
            },
            {
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/ViewDetailsPage/:_id',
                element: <ViewDetailsPage />,
                loader: () => fetch('https://euro-explorer-server.vercel.app/euroExplorer')
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ]
    }
]);

export default router;
