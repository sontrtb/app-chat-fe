import Header from "./header";
import SideBar from "./side_bar";

function Layout({ children }) {

    return (
        <div className="default-layout-container">
            <div className="side-bar-container">
                <SideBar/>
            </div>
            <div className="right-content-container">
                <Header />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;