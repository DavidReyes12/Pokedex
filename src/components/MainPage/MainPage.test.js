import { render, fireEvent, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../../redux/store";
import MainPage from "./index";
import PokemonCard from "../PokemonCard"

const { getByTestId } = screen;
const testData = { 
    name: "Pikachu", 
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", 
    types: [{
        slot: 1,
        type: {
            name: "electric"
        }
    }], 
    abilities: [
        {
            slot: 1,
            ability: {
                name: "lightning-rod"
            }
        },
        {
            slot: 2,
            ability: {
                name: "static"
            }
        },
    ],
    locations: [
        {
            location_area: {
                name: "trophy-garden-area",
            },
        },
    ]
};

describe("MainPage test", () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <MainPage />
                <PokemonCard />
            </Provider>
        );
    });

    test("MainPage must be render", () => {

        expect(getByTestId("MainPageTest")).toBeInTheDocument();
        
    });

    test("MainPage should have width: 100% ", () => {

        expect(getByTestId("MainPageTest")).toHaveStyle("width: 100%");
        
    });

    test("MainPage input should have empty", () => {

        expect(getByTestId("MainPageInputTest")).toHaveValue("");
        
    });

    test("MainPage input should have bulbasaur as value", () => {

        fireEvent.change(getByTestId("MainPageInputTest"), {
            target: { value: "bulbasaur" },
        });

        expect(getByTestId("MainPageInputTest")).toHaveValue("bulbasaur");
        
    });

    test("MainPage input should not call to handleKeyDown", () => {

        fireEvent.keyDown(getByTestId("MainPageInputTest"), {
            key: "Enter",
            code: "Enter",
            charCode: 13
        });

        expect(getByTestId("MainPageButtonTest")).toHaveValue("");
        
    });

    test("MainPage input should call to handleKeyDown and get the pokemon data", () => {

        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(testData)
        }));

        fireEvent.change(getByTestId("MainPageInputTest"), {
            target: { value: "bulbasaur" },
        });

        fireEvent.keyDown(getByTestId("MainPageInputTest"), {
            key: "Enter",
            code: "Enter",
            charCode: 13
        });

        expect(getByTestId("PokeCardTest")).toBeInTheDocument();
        
    });

    test("MainPage button should call to onSearch and get the pokemon data", () => {

        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(testData)
        }));

        fireEvent.change(getByTestId("MainPageInputTest"), {
            target: { value: "pikachu" },
        });

        fireEvent.click(getByTestId("MainPageButtonTest"));

        expect(getByTestId("PokeCardTest")).toBeInTheDocument();
        
    });

});