import React from "react";

import { Link } from "react-router-dom";

// styles
import { BreadCrumbsWrapper, Content } from "./BreadCrumbs.styles";

const BreadCrumbs = ({ movieTitle }) => (
    <BreadCrumbsWrapper>
        <Content>
            <Link to="/">
                <span>
                    Home
                </span>
            </Link>

            <span>|</span>

            <span>
                {movieTitle}
            </span>
        </Content>
    </BreadCrumbsWrapper>

)

export default BreadCrumbs;