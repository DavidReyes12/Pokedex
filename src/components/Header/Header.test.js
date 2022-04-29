import { render, fireEvent, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../../redux/store";
import Header from "./index";

const { getByTestId } = screen;

describe("Header test", () => {

    beforeEach(() => {
       render(<Provider store={store}>
            <Header />
        </Provider>);
    });

    test("Header must be render", () => {

        fireEvent.click(getByTestId("MenuIconTest"));

        expect(getByTestId("HeaderTest")).toBeInTheDocument();
        
    });

});

