import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setPokemonData } from "../../redux/MainpageDucks";

import PokemonCard from '../PokemonCard';

import './Styles/MainPage.scss';

export const MainPage = () => {

    const [pokemonName, setPokemonName] = useState("");
    const [error, setError] = useState(false);

    // dispatch to trigger our action
    const dispatch = useDispatch();
    // get these variables from our store
    const { app: { isSidebarOpen }, mainpage: { pokemonData } } = useSelector((state) => state);

    // In this fetch get the pokemon location and set the pokemon info 
    const onSearchArea = ( direction, pokeInfo ) => {
        if ( !direction ) return;
        fetch(direction)
            .then( (response) => response.json() )
            .then( (data) => { 
                dispatch( setPokemonData({
                    ...pokeInfo,
                    locations: data.slice(0, 5),
                }));
                setError(false);
            });
    };

    // do the first fetch with the pokemon name and get some data 
    const onSearch = () => {
        if ( !pokemonName ) return;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.trim()}`)
            .then( (response) => response.json() )
            .then( (data) => {

                const { name, sprites: { front_default }, types, abilities, location_area_encounters } = data;
                // calling the second fetch
                onSearchArea( location_area_encounters, { name, image: front_default, types, abilities } );

            })
            .catch( () => {
                dispatch( setPokemonData({}) );
                setError(true);
            });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') onSearch();
    };

    return (
        <div 
            className="MainPage"
            data-testid="MainPageTest" 
            style={isSidebarOpen ? { width: "80%" } : { width: "100%" }} // I adjust our styling depending the sidebar
        >
            <div className="SearchCont" >
                <input 
                    className="InputStyle"
                    type="text" 
                    autoFocus
                    value={pokemonName} 
                    data-testid="MainPageInputTest"
                    onChange={ ({ target: { value } }) => setPokemonName(value.toLowerCase()) } 
                    onKeyDown={handleKeyDown}
                />
                <button
                    data-testid="MainPageButtonTest"
                    className="ButtonStyle" 
                    disabled={!pokemonName}
                    onClick={onSearch} 
                >
                    Search
                </button> 
            </div>
            {
                (error) && (
                    <div className="error" > This pokemon does not exist... </div>
                )
            }
            {
                (Object.keys(pokemonData).length > 0)  && (
                    <PokemonCard { ...pokemonData } />
                )
            }
        </div>
    )
}

export default MainPage;