import React from "react";
import PropTypes from "prop-types";

// styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, charater, imageURL }) => (
    <Wrapper>
        <Image src={imageURL} alt={name} />
        <h3>{name}</h3>
        <p>{charater}</p>
    </Wrapper>
);

Actor.prototypes = {
    name: PropTypes.string,
    charater: PropTypes.string,
    imageURL: PropTypes.string
}

export default Actor;