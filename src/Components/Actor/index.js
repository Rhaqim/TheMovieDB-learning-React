import React from "react";

// styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, charater, imageURL }) => (
    <Wrapper>
        <Image src={imageURL} alt={name} />
        <h3>{name}</h3>
        <p>{charater}</p>
    </Wrapper>
)

export default Actor;