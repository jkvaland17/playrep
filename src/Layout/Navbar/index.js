/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';  
import { useNavigate, useLocation } from 'react-router-dom';  
import { menuItems } from "./menuItems"

const Navigation = ({ isOpen, currentRoute }) => {  
    const navigate = useNavigate();  
    const location = useLocation();  

    return (  
        <nav>  
            <ul className={`toresponsive ${isOpen ? 'show' : ''}`} id="">  
                {menuItems.map((item, index) => (  
                    <li key={index}>  
                        <a  
                            className={currentRoute === item.title || item.includes.includes(location.pathname) ? "active main_a a_pointer" : "main_a a_pointer"}  
                            onClick={() => navigate(item.path || '/')}  
                        >  
                            {item.title}  
                        </a>  
                        {!item.isSingle && (  
                            <ul>  
                                {item.subItems.map((subItem, subIndex) => (  
                                    <li key={subIndex}>  
                                        <a className={`a_pointer ${location.pathname === subItem.path && 'child-active'}`} onClick={() => navigate(subItem.path)}>  
                                            {subItem.title}  
                                        </a>  
                                    </li>  
                                ))}  
                            </ul>  
                        )}  
                    </li>  
                ))}  
                <li>  
                    <a className="main_a a_pointer" onClick={() => navigate("/")}>LogOut</a>  
                </li>  
            </ul>  
        </nav>  
    );  
};  

export default Navigation;