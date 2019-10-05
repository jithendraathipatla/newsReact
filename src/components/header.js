import React, { useState } from 'react';

const Header = (props) => {
    const style = {
        background:"red",
        padding:"10px"
      }

    return (
        <div style={style}>
           <input type="text" onChange={props.keywords1} placeholder="News search"></input>
        </div>
    );
};

export default Header;