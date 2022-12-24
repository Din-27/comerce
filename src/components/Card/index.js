import React from 'react'
// import product from '../../assets/lamp-main.png'

export default function Card(props) {
    console.log(props.length)
    return (
        <div class="block text-center rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <span class="inline-block rounded-lg bg-gray-50 p-3">
                <img src={props.img} alt="" />
            </span>

            <h2 class="mt-2 font-bold">Accountant</h2>

            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
            </p>
        </div>
    )
}
