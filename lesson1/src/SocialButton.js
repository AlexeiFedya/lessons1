import React from 'react';
import './button.css';

function SocialButton({type, className}) {
return (
    <button className={className} href={type === 'Facebook' 
    ? 'https://www.facebook.com/' 
    : type === 'Twitter' 
        ? 'https://twitter.com'
        : ''}/>
);
}

export default SocialButton;