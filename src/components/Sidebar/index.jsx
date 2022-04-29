import React from 'react'

import { useSelector } from "react-redux";

import "./Styles/Sidebar.scss"

export const Sidebar = () => {

    // get this variable form our store
    const { isSidebarOpen } = useSelector(({ app }) => app);

    return (
        <div 
            className="Sidebar"
            data-testid="SidebarTest"
            style={isSidebarOpen ? { width: "20%", height: "auto" } : { width: "0", height: "0" }} // I adjust our styling depending the sidebar
        >
            {
                isSidebarOpen && (
                    <>
                        <div className="Item">Item 1</div>
                        <div className="Item">Item 2</div>
                        <div className="Item">Item 3</div>
                    </>
                )
            }        
        </div>
    )
}

export default Sidebar;