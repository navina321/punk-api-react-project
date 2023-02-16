import React from "react";
import Card from "../Card/Card";
import "./CardContainer.scss";

const CardContainer = (props) => {
  const { punk } = props;

  const cardJSX = punk.map((beer) => {
    return (
      <Card
        key={beer.id}
        image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        age={beer.first_brewed}
        abv={beer.abv}
        ph={beer.ph}
        />
    );
  });

  return <div className="card-container">{cardJSX}</div>;
};

export default CardContainer;
