import React from "react";
import { Row, Col } from "antd";
import Modal from "../../../utility/modal";

const InfoModal = ({ showModal, closeModal }) => {
    return (
        <Modal close={() => {
            closeModal();
        }} title="INFORMACIÓN" show={showModal} loading={false} hideFooter>
            <Row gutter={16}>
                <Col xs={24}>
                    <h2>FCFS</h2>
                    <hr />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <p>
                        First-Come Fisrt-Served es el algoritmo mas sencillo, es una cola tradicional donde cada proceso se ejecuta hasta ser interrumpido o necesitar E/S.
                        <br />
                        <br />
                        Su desventaja es el tiempo de espera de los procesos.
                    </p>
          
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <h2>SJF</h2>
                    <hr />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <p>
                        Shortest Job First, es un algortimo que acomoda los procesos del menor tiempo de rafaga al inicio.
                        <br />
                        <br />
                        Su ventaja es el menor tiempo para un conjunto procesos.
                    </p>
          
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <h2>PRIORITY</h2>
                    <hr />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <p>
                        Se da prioridad a los procesos, donde 0 es mayor prioridad, si 2 procesos tienen la misma prioridad se puede usar FCFS o SJF.
                        <br/>
                        En este algoritmo elegimos irnos por SJF.
                        <br />
                        <br />
                        Su desventaja es que sin un algoritmo de envejecimiento, puede haber procesos que jamas se ejecuten.
                    </p>
          
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <h2>ROUND ROBIN</h2>
                    <hr />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <p>
                        Se acomodan los procesos en una lista ligada y se considera una cantidad de tiempo para ejecutar procesos.
                        <br/>
                        Si acaba el proceso antes de tiempo, se pasa al siguiente proceso.
                        <br />
                        <br />
                        Su ventaja es la distribucion mas homogenea de procesos.
                    </p>
          
                </Col>
            </Row>
        </Modal>);
};

export default InfoModal;
