import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../redux/AppDucks";

import { MenuOutlined } from "@mui/icons-material";
import PokeImg from "../../resources/pokeImg.png"
import "./Styles/Header.scss";

export const Header = () => {

    // dispatch to trigger our action
    const dispatch = useDispatch();
    // get this variable from our store
    const { isSidebarOpen } = useSelector(({ app }) => app);

    return (
        <div 
            className="header" 
            data-testid="HeaderTest"
        >
            <MenuOutlined 
                data-testid="MenuIconTest"
                className="menuIcon" 
                onClick={() => dispatch(setSidebar(!isSidebarOpen))} 
            />
            <div className="cont">
                <img className="img" src={PokeImg} alt="poke-img" />
            </div>
        </div>
    )
}

export default Header;