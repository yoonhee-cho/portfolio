import React from 'react'
import arrow from '../assets/images/arrow.png'
import Boop from '../components/Boop'

const ScrollButton = () => {

    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    }

    return (
        <Boop rotation={20} timing={200}>
            <img className="arrow" src={arrow} alt={arrow} onClick={handleClick}></img>
        </Boop>
    )
}

export default ScrollButton