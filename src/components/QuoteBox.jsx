import React from 'react';


const QuoteBox = ({randomQuote, randomColor, getRandom}) => {

    const colorObj = {
        color: randomColor
    }

    const colorBack = {
        background: randomColor
    }
    
    console.log(randomColor)

    return (
        <article className='card' style={colorObj}>
            <p className='card_quote'>{randomQuote.quote}</p>
            <h1 className='card_author'>{randomQuote.author}</h1>
            <button 
            style={colorBack}
            className='card_btn'
            onClick={getRandom}
            >&#62;</button>
        </article>
    );
};

export default QuoteBox;