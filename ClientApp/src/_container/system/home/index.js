import { Col, Row } from "antd";
import React, { Component } from "react";
import GitHubButton from "react-github-btn";

class Home extends Component {
    render() {
        return (<>
            <Row gutter={16}>
                <Col xs={24}>
                    <h1 className="page-title">Inicio</h1>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <p>
                        La finalidad del siguiente proyecto es la creación de una plataforma web en la cual se puedan visualizar algoritmos de ordenamiento, busqueda, pathfinding, planeación y otros, para poder comprender mejor el funcionamiento.
                        Los algoritmos aquí mostrados no representaran la velocidad real, ni el proceso mas optimo; ya que es usado el DOM en conjunto con funciones asincrónicas las cuales permiten la visualización con un tiempo de espera definido.
                        <br />
                        <br />
                        La interfaz se basa la barra lateral, la cual contiene temas de:
                        <li>
                            Estructuras de datos y algoritmos.
                        </li>
                        <li>
                            Programación orientada a objetos.
                        </li>
                        <li>
                            Sistemas Operativos.
                        </li>
                        <li>
                            Estructura y programación de computadoras.
                        </li>
                        <br />
                        En cada pantalla hay un boton de ayuda en la parte superior derecha, al dar click abrira un modal con los datos del algoritmo, ideas sobre la contrucción y el como funciona la pantalla actual.
                        <br />
                        <br />
                        Este proyecto esta hecho en C# con Net Core 6, ReactJS con un router por capas y error boundary.
                        <br />
                        <br />
                    </p>
                </Col>
            </Row>
            <Row gutter={16} justify="space-evenly">
                <Col xs={24} md={8} className="text-left text-center-md mb-md-5">
                    <GitHubButton href="https://github.com/BozzonMX" data-size="large" data-show-count="true" aria-label="Follow @BozzonMX on GitHub">Follow @BozzonMX</GitHubButton>
                </Col>
                <Col xs={24} md={8} className="text-center text-center-md mb-md-5">
                    <GitHubButton href="https://github.com/BozzonMX/kaiser/archive/HEAD.zip" data-icon="octicon-download" data-size="large" aria-label="Download BozzonMX/kaiser on GitHub">Download</GitHubButton>
                </Col>
                <Col xs={24} md={8} className="text-right text-center-md mb-md-5">
                    <GitHubButton href="https://github.com/BozzonMX/kaiser/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork BozzonMX/kaiser on GitHub">Fork</GitHubButton>
                </Col>
            </Row>
        </>);
    };
};

export default Home;
