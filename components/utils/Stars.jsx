import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Stars = ({ count }) => {
    return (
        <div className='flex items-center'>
            {count === 1 && count <= 2 && (
                <div className='items-center flex  space-x-4'>
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                </div>
            )}
            {count === 2 && count <= 3 && (
                <div className='items-center flex  space-x-4'>
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                </div>
            )}
            {count === 3 && count <= 4 && (
                <div className='items-center flex  space-x-4'>
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                    <BsStarFill className='text-2xl lg:text-4xl text-lightGray' />
                </div>
            )}
            {count === 4 && count <= 5 && (
                <div className='items-center flex  space-x-4'>
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl lg:text-4xl  text-lightGray' />
                </div>
            )}
            {count === 5 && (
                <div className='items-center flex  space-x-4'>
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                    <BsStarFill className='text-2xl text-lightBrown lg:text-4xl ' />
                </div>
            )}
        </div>
    )
}

export default Stars