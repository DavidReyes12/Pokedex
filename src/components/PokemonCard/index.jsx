import React from 'react'

import "./Styles/PokemonCard.scss";

export const PokemonCard = ({ 
    name = "", 
    image = "", 
    types = [], 
    abilities = [],
    locations = []
}) => {

    return (
        <div 
            className="PokemonCard"
            data-testid="PokeCardTest"
        >
            <div className="CardName">{ name }</div>
            <div className="CardImg">
                <img className="Img" src={image} alt={`${name} img`} />
            </div>
            <div className="CardInfo">
                <div className="TitleInfo"> Type: </div>
                <div className="Types">
                    {
                        types.map( ({ type: { name }, slot }) => 
                            <div key={slot} >{`- ${name}`}</div>
                        )
                    }
                </div>
                <div className="TitleInfo"> Abilities: </div>
                <div className="Types">
                    {
                        abilities.map( ({ slot, ability: { name } }) => 
                            <div key={slot} >{`- ${name}`}</div>
                        )
                    }
                </div>
            </div>
            <div className="CardFooter">
                    <div className="TitleInfo"> Where can you find it?: </div>
                    <div className="Types">
                        {
                            locations.map( ({ location_area: { name } }, index) => 
                                <div key={index} >{`* ${name}`}</div>
                            )
                        }
                    </div>
                </div>
        </div>
    )
};

export default PokemonCard;
