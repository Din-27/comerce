/* eslint-disable jsx-a11y/anchor-is-valid */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import React from "react";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./style.css";

const data = [
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
    'https://i.etsystatic.com/37479131/r/il/4d46e7/4136767160/il_340x270.4136767160_m64v.jpg',
]

export default function ExploreCategory() {
    
    return (
        <section>
            <h2 class="text-3xl font-bold sm:text-4xl text-center pt-20">Explore by Category</h2>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-4 lg:gap-x-10">
                    <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left lg:block">
                        <div class="flex flex-col justify-between lg:h-screen bg-white">
                            <div class="px-4">
                                <nav aria-label="Main Nav" class="flex flex-col mt-6 space-y-6">
                                    <div className="relative">
                                        <input class="w-full p-2 text-black bg-gray-100 rounded-lg font-medium" type="" name="" placeholder="Search..." />
                                        <button class="absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-500">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                    {/* <details class="group [&_summary::-webkit-details-marker]:hidden">
                                    
                                </details> */}
                                    <div className="lg:block flex justify-between lg:h-96 lg:overflow-y-auto lg:scrollbar-hide">
                                        <div class="lg:px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                            <span class="lg:ml-3 px-1 text-sm font-medium"> Teams </span>
                                        </div>
                                        <div class="lg:px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                            <span class="lg:ml-3 px-1 text-sm font-medium"> Teams </span>
                                        </div>
                                        <div class="lg:px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                            <span class="lg:ml-3 px-1 text-sm font-medium"> Teams </span>
                                        </div>
                                        <div class="lg:px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                            <span class="lg:ml-3 px-1 text-sm font-medium"> Teams </span>
                                        </div>
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
                    <div class="hidden lg:grid grid-cols-1 gap-8 lg:grid-cols-3 col-span-3 max-h-screen overflow-y-auto scrollbar-hide">
                        {data.map(x => <Card img={x} />)}
                    </div>
                    <div class="lg:hidden grid grid-cols-1 gap-8 lg:grid-cols-3 col-span-3">
                        <Swiper className="mySwiper">
                            {data.map(x => <SwiperSlide><Card img={x} /></SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </div >
        </section >
    );
}
