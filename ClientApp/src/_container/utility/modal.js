import React from "react";
import { Modal, Skeleton } from "antd";

const ModalCustom = ({ close = null, ok = null, title = "", show = false, loading = false, loadingOk = false, children, okText = "ACEPTAR", hideFooter = false }) => {
    return (<Modal title={title} centered open={show} onOk={() => ok ? ok() : null} onCancel={() => close ? close() : null}
        width={1000} destroyOnClose={true} className={`modal-custom ${hideFooter ? "hide-footer" : ""}`} okButtonProps={{ loading: loadingOk, className: "btn-success" }} okText={okText}>
        {loading ? <Skeleton /> : children}
    </Modal>);
};

export default ModalCustom;
