/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import chairContent from '../../assets/chair-main.png'

const fadeInUpAnimation = keyframes`${fadeInUp}`;

export default function SectionMain() {
    const FadeInUpDiv = styled.div`
  animation: 1s ${fadeInUpAnimation};`;
    return (
        <div>
            <div className='content'>
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div class="relative overflow-hidden rounded-lg lg:order-last">
                            <FadeInUpDiv>
                                <img
                                    alt="Party"
                                    src={chairContent}
                                    class="h-full w-full my-auto"
                                />
                            </FadeInUpDiv>
                        </div>
                        <div class="lg:py-24 my-auto ml-2">
                            <h2 class="text-3xl font-bold sm:text-4xl">Exclusive Deals of Furniture Collection</h2>

                            <p class="mt-4 text-gray-600">
                                Explore different categories. Find the best deals.
                            </p>

                            <button
                                href="#"
                                class="mt-8 inline-flex items-center rounded border border-teal-600 bg-teal-600 px-8 py-3 text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
                            >
                                <span class="text-sm font-medium"> Get Started </span>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
