import React from "react";
import PropTypes from "prop-types";

// Helper
import { calcTime, convertMoney } from "../../helpers";

// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";
import MovieInfo from "../MovieInfo";

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            {/* <div className="column">
                <p>Release date:</p>
                <p>{release_date}</p>
            </div> */}
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.prototypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;