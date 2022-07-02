import React from 'react'

const Button = ({ text, bgColor, textColor }) => {
    return (
        <div className={`cursor-pointer group overflow-hidden w-fit py-2 px-8 md:py-3 md:px-12 hover:tracking-widest hover:shadow-lg hover:bg-darkYellow relative transition-all duration-500 delay-100 text-base text-white bg-themeYellow `}>
            <p>{text}</p>
        </div>
    )
}

export default Button