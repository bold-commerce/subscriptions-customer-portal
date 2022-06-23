import React from "react";
import PT from "prop-types";

const PropTypes = {
    className: PT.string
};

const EditIcon = ({className}) => {
    return <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g opacity="0.8">
            <path
                d="M15 5.2501L12.75 3.0001L14.25 1.5001C14.625 1.3751 15.525 1.2751 16.125 1.8751C16.725 2.4751 16.625 3.3751 16.5 3.7501L15 5.2501Z"
                fill="black" fillOpacity="0.2"/>
            <path fillRule="evenodd" clipRule="evenodd"
                d="M0.75 2.25H9V3.75H2.25V15C2.25 15.4142 2.58579 15.75 3 15.75H13.5C13.9142 15.75 14.25 15.4142 14.25 15V9H15.75V15C15.75 16.2426 14.7426 17.25 13.5 17.25H3C1.75736 17.25 0.75 16.2426 0.75 15V2.25Z"
                fill="#1671B6"/>
            <path fillRule="evenodd" clipRule="evenodd"
                d="M13.9393 0.75H14.5425C15.2606 0.75 15.9492 1.03525 16.457 1.54301C16.9647 2.05076 17.25 2.73943 17.25 3.4575V4.06066L7.81066 13.5H4.5V10.1893L13.9393 0.75ZM14.5605 2.25013L6 10.8107V12H7.18934L15.7499 3.43947C15.7452 3.12575 15.6185 2.82587 15.3963 2.60367C15.1741 2.38147 14.8743 2.25481 14.5605 2.25013Z"
                fill="#1671B6"/>
            <path fillRule="evenodd" clipRule="evenodd"
                d="M14.7348 5.51519L12.4848 3.26519L13.0152 2.73486L15.2652 4.98486L14.7348 5.51519Z" fill="#1671B6"/>
        </g>
    </svg>;

};

EditIcon.propTypes = PropTypes;

export default EditIcon;
