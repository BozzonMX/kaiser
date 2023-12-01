import React, { useState } from "react";
import { Button, Input, Form, Row, Col, Divider, Upload, Switch, InputNumber } from "antd";
import { CheckOutlined, CloseOutlined, PercentageOutlined, UploadOutlined } from "@ant-design/icons";
import { Alert, AlertType, GenerateRandomString } from "../../_utility";

export const InputForm = ({ sm = 12, md = 12, lg = 6, label, placeholder = null, name, normalize = null, required = false, disabled = false, maxLength = 50, autoComplete = false, size = "middle", email, phone, numbers, onChange = null }) => {
    const type = (email ? "email" : "string"), pattern = (phone ? new RegExp(/^([0-9]+-)*[0-9]+$/) : numbers ? new RegExp("^[0-9]*$") : null);
    if (autoComplete === false) autoComplete = GenerateRandomString(10);
    return (<Col xs={24} sm={sm} md={md} lg={lg}>
        <Form.Item label={label ? `${label.toUpperCase()}:` : null} name={name} normalize={normalize}
            rules={[{ type, required, whitespace: true, pattern }]}>
            <Input placeholder={placeholder} size={size} disabled={disabled} maxLength={maxLength} autoComplete={autoComplete} onChange={onChange} />
        </Form.Item>
    </Col>);
};

export const NumberForm = ({ sm = 12, md = 12, lg = 6, label, name, required = false, disabled = false, min = 0, max = 1000, porcentaje = false, onChange = null, restField = null }) => {
    return (<Col xs={24} sm={sm} md={md} lg={lg}>
        <Form.Item label={label ? `${label.toUpperCase()}:` : null} name={name} rules={[{ required }]} {...restField}>
            <InputNumber disabled={disabled} min={min} max={max} style={{ width: "100%" }} onChange={onChange} addonAfter={porcentaje ? <PercentageOutlined /> : null} />
        </Form.Item>
    </Col>);
};

export const SwitchForm = ({ sm = 12, md = 12, lg = 6, label, name, disabled = false, onChange = null, initialValue = false }) => {
    return (<Col xs={24} sm={sm} md={md} lg={lg}>
        <Form.Item label={label ? `${label.toUpperCase()}:` : null} name={name} valuePropName="checked" initialValue={initialValue} className="switch-form">
            <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} disabled={disabled} onChange={onChange} defaultChecked />
        </Form.Item>
    </Col>);
};

export const FileUpload = ({ disabled, descripcion, name, label, sm = 6, md = 6, lg = 6, limit, required = false, accept = [], form = null, setFile = null }) => {
    const [fileList, setFileList] = useState([]);

    return (<Col xs={24} sm={sm} md={md} lg={lg} className="fileForm">
        <Form.Item name={name} label="file" hidden={true}>
            <Input />
        </Form.Item>
        <Form.Item>
            <Form.Item rules={[{ required: required && fileList.length === 0 ? true : false }]} name={name + "UPLOADER"} label={`${label}:`}>
                <Upload disabled={disabled} multiple={false} beforeUpload={() => false} fileList={fileList} accept={accept.map((e) => "." + e).join(",")}
                    onChange={(data) => {
                        const splited = data.file.name && data.file.name.split("."), ext = splited && splited[splited.length - 1];
                        if (data.fileList.length === 0) {
                            setFileList([]);
                            if (form) form.setFieldsValue({ [name]: null });
                        }
                        else if ((data.file.size / 1024 / 1024) > limit) Alert(`El archivo debe ser menor a los ${limit}MB`, AlertType.error);
                        else if (!accept.includes(ext)) Alert("Formato no valido", AlertType.error);
                        else if (data.fileList.length > 0) {
                            const reader = new FileReader(), files = [data.fileList.pop()];
                            reader.addEventListener("load", () => {
                                setFileList(files);
                                if (form) form.setFieldsValue({ [name]: reader.result });
                            });
                            reader.readAsDataURL(files[0].originFileObj);
                        }
                    }}>
                    <Button icon={<UploadOutlined />}>SUBIR</Button>
                    {fileList.length === 0 && descripcion && <span className="descripcionFile">Archivo cargado: {descripcion}</span>}
                </Upload>
            </Form.Item>
        </Form.Item>
    </Col>);
};

export const DividerForm = ({ title = "" }) => {
    return (<Row gutter={16}>
        <Col xs={24}>
            <Divider orientation="left">{title.toUpperCase()}</Divider>
        </Col>
    </Row>);
};
