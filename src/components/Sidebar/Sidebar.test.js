import { render, screen } from '@testing-library/react';

import * as reactRedux from 'react-redux'
import { Provider } from "react-redux";
import store from "../../redux/store";
import Sidebar from "./index";

const { getByTestId } = screen;

describe("Sidebar test", () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <Sidebar />
            </Provider>
        );
    });

    test("Sidebar must be render", () => {

        expect(getByTestId("SidebarTest")).toBeInTheDocument();
        
    });

    test("Sidebar should be close", () => {

        expect(getByTestId("SidebarTest")).toHaveStyle("width: 0");
        
    });

});