import React from "react";

const Section = ({id, children, bg}) => {
    const sectionStyle = {
        // backgroundColor: bg || 'trasparent',
        padding: '2rem 0',
        textalign: 'center',
    };

    return(
        <section id={id} style={sectionStyle}>
            {children}
        </section>
    );
};

export default Section;