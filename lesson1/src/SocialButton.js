import React from 'react';
import './button.css';

function SocialButton(props) {
return (
    <button>
       <a href="network" className="fa">{props.type}</a>
    </button>
);
}

export default SocialButton;