import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloneDeep from 'lodash/cloneDeep';

const CustomLayout = ({ children }) => {
    const [sideOpen, SetSideOpen] = useState(false), [opened, SetOpened] = useState([]);
    const action = {
        openSlide: (index) => {
            let aux = cloneDeep(opened), value = cloneDeep(opened[index]);
            aux[index] = (value === true) ? false : true;
            SetOpened(aux);
        },
        toggleMenu: () => {
            SetSideOpen(!sideOpen);
        }
    };

    return (<>
        <div className={`side-nav no-select ${sideOpen ? "open" : ""}`}>
            <div className="side-nav-header-div">
                <div className="btn-open-nav" onClick={() => { action.toggleMenu(); }}>
                    <FontAwesomeIcon icon={["fa-solid", "xmark"]} />
                </div>
            </div>
            <ul className="side-nav-inner">
                <li className="side-nav-item">
                    <Link to="/" className="side-nav-link">
                        <FontAwesomeIcon icon={["fa-solid", "home"]} />
                        <div>Inicio</div>
                    </Link>
                </li>
                <li className="side-nav-header">E.D.A.</li>
                <li className="side-nav-item">
                    <div onClick={(e) => { action.openSlide("i-sorting"); }} className={`side-nav-link side-nav-toggle ${opened["i-sorting"] === true ? "open" : ""}`}>
                        <FontAwesomeIcon icon={["fa-solid", "sort"]} />
                        <div>Ordenamientos internos</div>
                    </div>
                    <ul className="side-nav-menu">
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Bubble</div>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Cocktail</div>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Counting</div>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Heap</div>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Insert</div>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Merge</div>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Quick</div>
                            </Link>
                        </li>
                        <li className="side-nav-item">
                            <Link to="/" className="side-nav-link">
                                <div>Select</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="side-nav-header">P.0.0.</li>
                <li className="side-nav-item">
                    <Link to="/" className="side-nav-link">
                        <FontAwesomeIcon icon={["fa-solid", "arrows-split-up-and-left"]} />
                        <div>Multi Thread</div>
                    </Link>
                </li>
                <li className="side-nav-header">S.0.</li>
                <li className="side-nav-item">
                    <Link to="/ProcessPlanner" className="side-nav-link">
                        <FontAwesomeIcon icon={["fa-solid", "list-check"]} />
                        <div>Planeación de procesos</div>
                    </Link>
                </li>
                <li className="side-nav-header">E.P.C.</li>
                <li className="side-nav-item">
                    <Link to="/" className="side-nav-link">
                        <FontAwesomeIcon icon={["fa-solid", "microchip"]} />
                        <div>x86 Simulator</div>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="main-page">
            <nav className="navbar no-select">
                <ul className="btn-nav-li">
                    <li className="btn-close-nav" onClick={() => { action.toggleMenu(); }}>
                        <FontAwesomeIcon icon={["fa-solid", "bars"]} />
                    </li>
                </ul>
            </nav>
            <div className="upper-page">
                <Layout className="page">
                    <Layout className="bg-white">
                        {children}
                    </Layout>
                </Layout>
            </div>
        </div>
    </>);
};

export default CustomLayout;
