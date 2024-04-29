import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../componants/Register";
import AddTouristSpot from "../componants/AddTouristSpot";
import AllTouristSpot from "../componants/AllTouristSpot";
import MyList from "../componants/MyList";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../componants/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout> </MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/AddTouristSpot',
                element:  <AddTouristSpot></AddTouristSpot>,
            },
            {
                path: '/AllTouristSpot',
                element:  <AllTouristSpot></AllTouristSpot>,
            },
            {
                path: '/AllTouristSpot',
                element:  <MyList></MyList>,
            },
            {
                path: '/Register',
                element: <Register></Register>,
            },
            {
                path: '/Login',
                element: <Login></Login>,
            },

            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>,
              },
        ]
    }
]);
export default router;