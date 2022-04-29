import { render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../../redux/store";
import FloatButton from "./index";

const { getByTestId } = screen;

describe("FloatButton test", () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <FloatButton />
            </Provider>
        );
    });

    test("FloatButton must be render", () => {

        expect(getByTestId("FloatButtonTest")).toBeInTheDocument();
        
    });

});