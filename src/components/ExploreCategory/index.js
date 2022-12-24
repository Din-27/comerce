/* eslint-disable jsx-a11y/anchor-is-valid */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../Card";
import product from '../../assets/lamp-main.png'

const data = [
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg'
]

export default function ExploreCategory() {
    console.log(window.innerWidth)
    return (
        <section>
            <h2 class="text-3xl font-bold sm:text-4xl text-center pt-20">Explore by Category</h2>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-4 lg:gap-x-10">
                    <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left hidden md:block">
                        <div class="flex flex-col justify-between h-screen bg-white">
                            <div class="px-4">
                                <nav aria-label="Main Nav" class="flex flex-col mt-6 space-y-6">
                                    <div className="relative">
                                        <input class="w-full p-2 text-black bg-gray-100 rounded-lg font-medium" type="" name="" placeholder="Search..." />
                                        <span class="pointer-events-none absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </span>
                                    </div>
                                    {/* <details class="group [&_summary::-webkit-details-marker]:hidden">
                                    
                                </details> */}
                                    <div class="px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                        <span class="ml-3 text-sm font-medium"> Teams </span>
                                    </div>
                                    <div class="px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                        <span class="ml-3 text-sm font-medium"> Teams </span>
                                    </div>
                                    <div class="px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                        <span class="ml-3 text-sm font-medium"> Teams </span>
                                    </div>
                                    <div class="px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                        <span class="ml-3 text-sm font-medium"> Teams </span>
                                    </div>
                                    <div class="px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                        <span class="ml-3 text-sm font-medium"> Teams </span>
                                    </div>
                                    <button class="mt-8 inline-flex items-center mx-auto rounded border border-green-800 bg-green-800 px-8 
                                py-3 text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 opacity-50">
                                        <span class="text-sm font-medium"> All Categories</span>
                                        <svg
                                            class="ml-3 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 col-span-3 inline-block">
                        {data.length > 2 ? data.slice(0, 4).map(x => <Card img={x} />) : data.map(x => <Card img={x} />)}
                    </div>
                    <button className="md:hidden block mt-8 inline-flex items-center mx-auto rounded border border-green-800 bg-green-800 px-8
                    py-3 text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 opacity-50" type="">Read More ...</button>
                </div>
            </div>
        </section >
    );
}
