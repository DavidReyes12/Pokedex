import { render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../../redux/store";
import PokemonCard from "./index";

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

describe("PokemonCard test", () => {

    test("PokemonCard must be render", () => {

        render(
            <Provider store={store}>
                <PokemonCard { ...testData } />
            </Provider>
        );

        expect(getByTestId("PokeCardTest")).toBeInTheDocument();

    });

    test("PokemonCard should be render without info", () => {

        render(
            <Provider store={store}>
                <PokemonCard />
            </Provider>
        );

        expect(getByTestId("PokeCardTest")).toBeInTheDocument();

    });

});