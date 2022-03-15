import React from "react";
import PT from "prop-types";

const PropTypes = {
    className: PT.string
};

const EllipsisIcon = ({className}) => {
    return <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12.2504 7C12.2504 6.51675 11.8587 6.125 11.3754 6.125C10.8922 6.125 10.5004 6.51675 10.5004 7C10.5004 7.48325 10.8922 7.875 11.3754 7.875C11.8587 7.875 12.2504 7.48325 12.2504 7Z" fill="black" fillOpacity="0.9"/>
        <path d="M3.50043 7C3.50043 6.51675 3.10868 6.125 2.62543 6.125C2.14218 6.125 1.75043 6.51675 1.75043 7C1.75043 7.48325 2.14218 7.875 2.62543 7.875C3.10868 7.875 3.50043 7.48325 3.50043 7Z" fill="black"/>
        <path d="M7.87543 7C7.87543 6.51675 7.48368 6.125 7.00043 6.125C6.51718 6.125 6.12543 6.51675 6.12543 7C6.12543 7.48325 6.51718 7.875 7.00043 7.875C7.48368 7.875 7.87543 7.48325 7.87543 7Z" fill="black"/>
    </svg>;
};

EllipsisIcon.propTypes = PropTypes;

export default EllipsisIcon;
