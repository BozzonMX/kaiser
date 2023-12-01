import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomLayout = ({ children }) => {
    const [sideOpen, setSideOpen] = useState("");
    const action = {
        openSlide: (e, menu, key) => {
        },
        toggleMenu: (open) => {
            setSideOpen(open);
        }
    };

    return (<>
        <div className={`side-nav no-select ${sideOpen ? "open" : ""}`}>
            <div className="side-nav-logo-div">
                <div className="btnOpenNav" onClick={() => { action.clickMenu(false); }}>
                    <FontAwesomeIcon icon={["fa-solid", "xmark"]} />
                </div>
            </div>
            <ul className="side-nav-inner">
                <li key="title-01" className="side-nav-header">PLATAFORMA</li>
                <li key={`menu-1`} className="side-nav-item">
                    <Link to="/" key={`link-1`} onClick={(e) => { action.openMenu("1"); }} className={`${true ? "open" : ""} side-nav-link ${true ? "side-nav-toggle" : ""}`}>
                        <FontAwesomeIcon icon={["fa-solid", "xmark"]} />
                        <div>Home</div>
                    </Link>
                    <ul className="side-nav-menu" style={{ height: 50 }}>
                        <li key={`submenu-1-1`} className="side-nav-item"><Link to="/Home" className="side-nav-link"><div>Home</div></Link></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="main-page">
            <nav className="navbar no-select">
                <ul className="btnNavUl">
                    <li className="btnCloseNav" onClick={() => { action.clickMenu(true); }}>
                        <FontAwesomeIcon icon={["fa-solid", "bars"]} />
                    </li>
                </ul>
            </nav>
            <div className="upperPage">
                <Layout className="page">
                    <Layout className="bg-white">
                        {<div className="body-lateral-menu">{children}</div>}
                    </Layout>
                </Layout>
            </div>
        </div>
    </>);
};

export default CustomLayout;
