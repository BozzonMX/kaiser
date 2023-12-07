import { MinusCircleOutlined } from "@ant-design/icons";
import { InputNumber, Popconfirm } from "antd";

export const MIN_BARS = 25;

export const PROCESS_TABLE = (modifyTick, modifyPriority, deleteRow) => [
    {
        title: "PROCESO",
        dataIndex: "process",
        width: "30%"
    },
    {
        title: "T. RÁFAGA",
        dataIndex: "tick",
        width: "30%",
        render: (_, e) => <InputNumber value={e.tick} onChange={(val) => modifyTick(e, val)} min={1} max={10} />
    },
    {
        title: "PRIORIDAD",
        dataIndex: "priority",
        width: "30%",
        render: (_, e) => <InputNumber value={e.priority} onChange={(val) => modifyPriority(e, val)} min={0} max={10} />
    },
    {
        title: "",
        dataIndex: "delete",
        width: "10%",
        render: (_, e) =>
            <Popconfirm title="¿Seguro quieres eliminarlo?" onConfirm={() => deleteRow(e)}>
                <MinusCircleOutlined />
            </Popconfirm>
    },
];
