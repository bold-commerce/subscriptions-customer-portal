import React from "react";
import { ChildrenType } from "../customPropTypes";

const DefaultLayoutPropTypes = {
    children: ChildrenType.isRequired
};

const DefaultLayout = (props) => {
    const { children } = props;

    return (
        <div>
            { children }
        </div>
    );
};

DefaultLayout.propTypes = DefaultLayoutPropTypes;

export default DefaultLayout;
