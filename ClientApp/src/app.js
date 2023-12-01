import React, { Component } from "react";
import { RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { ConfigProvider } from "antd";
import { RenderEmpty } from "./_utility";
import locale from "antd/lib/locale/es_ES";
import router from "./_router";
import 'dayjs/locale/es-mx';
library.add(fas, far, fab);

class App extends Component {
    render() {
        return (<div>
            <ConfigProvider renderEmpty={() => RenderEmpty()} locale={locale} virtual >
                <RouterProvider router={router} />
            </ConfigProvider>
        </div>);
    };
};

export default App;
