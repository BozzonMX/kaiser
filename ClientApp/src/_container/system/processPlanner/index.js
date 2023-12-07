import React, { Component, Children } from "react";
import { Button, Col, FloatButton, Row, Segmented, Table } from "antd";
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cloneDeep, reject, orderBy, sortBy } from "lodash";
import { Alert, AlertType } from "../../../_utility";
import { PROCESS_TABLE } from "../../../_constant";

class ProcessPlanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // CONTROL
            showModal: false,
            // INPUTS
            algorithm: 1,
            counter: 0,
            process: [],
            // OUTPUTS
            planner: [],
        };
    };

    action = {
        changeAlorithm: (val) => {
            this.setState({ algorithm: val }, () => this.action.calculate());
        },
        calculate: () => {
            const { algorithm } = this.state;
            let process = cloneDeep(this.state.process);
            let planner = [];
            if (algorithm === 1) {
                planner = process;
            }
            if (algorithm === 2) {
                planner = orderBy(process, ["tick"], ["asc"]);
            }
            if (algorithm === 3) {
                planner = sortBy(process, function (o) {
                    return [-1 * (o.priority + 1), -1 * o.tick];
                });
            }
            if (algorithm === 4) {
                let total = 0;
                process.forEach((x) => {
                    total = total + x.tick;
                });
                while (total > 0) {
                    let aux = {};
                    for (let i = 0; i < process.length; i++) {
                        if (process[i].tick > 0) {
                            aux = {
                                process: process[i].process,
                                tick: 1,
                            }
                            process[i].tick = process[i].tick - 1;
                            planner.push(aux);
                        }
                    }
                    total = total - 1;
                }
            }
            this.setState({ planner });
        },
        openHelp: () => {
            this.setState({ showModal: true });
        },
        closeHelp: () => {
            this.setState({ showModal: false });
        },
        modifyTick: (i, val) => {
            let process = cloneDeep(this.state.process), toChange = i.process;
            for (let j = 0; j < process.length; j++) {
                if (process[j].process === toChange) process[j].tick = val;
            }
            this.setState({ process }, () => this.action.calculate());
        },
        modifyPriority: (i, val) => {
            let process = cloneDeep(this.state.process), toChange = i.process;
            for (let j = 0; j < process.length; j++) {
                if (process[j].process === toChange) process[j].priority = val;
            }
            this.setState({ process }, () => this.action.calculate());
        },
        addRow: () => {
            let process = cloneDeep(this.state.process), counter = this.state.counter;
            if (process.length < 10) {
                process.push({
                    process: `P${counter}`,
                    tick: 1,
                    priority: 0
                });
                this.setState({ process, counter: counter + 1 }, () => this.action.calculate());
            } else Alert("Máximo 10 procesos.", AlertType.info);
        },
        deleteRow: (i) => {
            let process = cloneDeep(this.state.process), toDelete = i.process;
            process = reject(process, {
                process: toDelete
            });
            this.setState({ process }, () => this.action.calculate());
        }
    };

    render() {
        const { changeAlorithm, openHelp, closeHelp, modifyTick, modifyPriority, addRow, deleteRow } = this.action;
        const { showModal, planner, process } = this.state;

        return (<>
            <Row gutter={16}>
                <Col xs={24}>
                    <h1 className="page-title">Planeación de procesos</h1>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <Segmented options={[
                        { label: "FCFS", value: 1, icon: <FontAwesomeIcon icon="fa-solid fa-list" /> },
                        { label: "SJF", value: 2, icon: <FontAwesomeIcon icon="fa-solid fa-list-ol" /> },
                        { label: "Priority", value: 3, icon: <FontAwesomeIcon icon="fa-solid fa-star" /> },
                        { label: "Round Robin", value: 4, icon: <FontAwesomeIcon icon="fa-solid fa-rotate" /> },
                    ]} block onChange={changeAlorithm} />
                </Col>
            </Row>
            <Row gutter={16} justify="center mt-5">
                <Col xs={24} md={12}>
                    <Table bordered className="table-center" size="small" pagination={false}
                        dataSource={process} columns={PROCESS_TABLE(modifyTick, modifyPriority, deleteRow)} rowKey="process"
                        footer={() => <>
                            <Button type="default" icon={<PlusOutlined />} size="large" block onClick={addRow}>
                                AÑADIR NUEVO
                            </Button>
                        </>}
                    />
                </Col>
            </Row>
            <Row gutter={16} className="mt-5">
                <Col xs={24}>
                    <h1 className="page-title no-select">TIMELINE</h1>
                    <hr />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24}>
                    <ul className="process-list no-select">
                        {Children.toArray(planner.map((x) => <ul style={{ width: 150 * x.tick }}>{x.process} - {x.tick} ticks</ul>))}
                    </ul>
                </Col>
            </Row>
            <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} onClick={openHelp} />
        </>);
    };
};

export default ProcessPlanner;
