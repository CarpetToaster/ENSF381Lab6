import React from 'react';

function Contact(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default Contact;