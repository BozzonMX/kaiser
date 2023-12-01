import React, { Component } from "react";
import { Result, Button } from "antd";
import NavigateSetter from "../../navigateSetter";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    };

    css = `#root > div { justify-content: center; align-items: center; display: flex; flex-wrap: wrap; }`;

    static getDerivedStateFromError(e) {
        return { hasError: true };
    };

    componentDidCatch(error, info) {
        console.log(error.stack);
    }

    render() {
        const { hasError } = this.state, { children } = this.props;

        if (!hasError) return (<>
            <NavigateSetter />
            {children}
        </>);
        return (<>
            <style>{this.css}</style>
            <Result status="500" title="ERROR" subTitle="OCURRIO UN ERROR EN LA APLICACIÓN" extra={<Button onClick={() => { window.location = "/"; }} className="btn-black">IR A INICIO</Button>} />
        </>);
    };
}

export default ErrorBoundary;
