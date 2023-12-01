import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import { notification, Empty, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MethodType =
{
    get: "GET",
    post: "POST",
    put: "PUT",
};
export const ServerCall = async ({ method, url, data = null, success = null, error = null, onQueryString = false, showSuccess = false, showError = true, afterCloseModal = null, responseType = "json", config = {} }) => {
    if (onQueryString || (data !== null && method === "GET")) url = url + "?" + EncodeParams(data);
    await axios({
        method: method,
        url: `api/${url}`,
        data: (onQueryString || method) === "GET" ? null : data,
        responseType: responseType,
        config: config,
    }).then((Response) => {
        if (success && Response) success(Response.data, Response);
        if (showSuccess && Response.data.ShowBanner === false) Alert(Response.data.Message, AlertType.success);
        if (Response.data.ShowBanner === true) ModalConfirm({ title: "¡LISTO!", content: Response.data.Message, afterCloseModal });
    }).catch((e) => {
        const { data, status } = e.response ? e.response : {};
        if (status !== 500) Alert(`Error ${status} del servidor`, AlertType.error);
        else if (showError) Alert(data.Message, AlertType.error);
        if (error) error(data, status);
    });
};

export const EncodeParams = (params) => {
    return Object.entries(params).map((e) => e.map(encodeURIComponent).join("=")).join("&");
};

export const RenderEmpty = (text = "SIN DATOS PARA MOSTRAR") => {
    return (<Empty description={text} />);
};

export const ModalConfirm = ({ title = "", content = "", afterClose = null }) => {
    Modal.success({
        title: title, content: content, centered: true, maskClosable: true,
        afterClose: afterClose ? afterClose : null
    });
};

const pastAlerts = [];
export const AlertType =
{
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
};
export const Alert = (message, type, duration = null) => {
    var doAlert = false;
    if (pastAlerts.length === 0) doAlert = true;
    else if (pastAlerts[pastAlerts.length - 1].message !== message) doAlert = true;
    else if (pastAlerts[pastAlerts.length - 1].message === message && pastAlerts[pastAlerts.length - 1].time <= dayjs().add(-2, "second").valueOf()) doAlert = true;
    if (doAlert) {
        pastAlerts.push({ message, time: dayjs().valueOf() });
        let title, ico = "";
        if (type === AlertType.info) {
            title = "INFORMACIÓN";
            ico = "info";
        }
        else if (type === AlertType.success) {
            title = "ÉXITO";
            ico = "check";
        }
        else if (type === AlertType.warning) {
            title = "ALERTA";
            ico = "exclamation-triangle";
        }
        else if (type === AlertType.error) {
            title = "ERROR";
            ico = "times";
        }
        notification.open({
            message: title,
            description: message,
            duration: (duration ? null : 5),
            className: "no-select notifZ " + type,
            placement: "bottomRight",
            icon: <FontAwesomeIcon icon={["fas", ico]} />,
        });
    }
};
