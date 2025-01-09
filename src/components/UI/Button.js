import React from "react";

const Button = ({onclick, children, style}) => {
    return(
        <button onclick={onclick} style={{ ...style, padding: '0.5rem 1rem', cursor: 'pointer' }}>
            {children}
        </button>
    );
    
};

export default Button;