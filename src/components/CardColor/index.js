import React from 'react'

export default function CardColor(props) {
    return (
        <div className='p-5 rounded-lg bg-gray-200'>
            <img src={props.img} alt="" />
            <div className='text-left flex flex-col gap-y-3 mt-5 text-slate-500'>
                <p className='font-bold'>Armchair</p>
                <p>Light single chair</p>
                <p className='font-bold'>$145</p>
            </div>
        </div>
    )

}
