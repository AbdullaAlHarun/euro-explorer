import { Outlet } from "react-router-dom";
import Nav from "../componants/Nav";
import Footer from "../componants/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <div>
                 <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

          
        </div>
    );
};

export default MainLayout;