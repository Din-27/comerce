import React, { useEffect, useState } from 'react'
import imageContainer from '../../assets/Image-container.png'
import { Swiper, SwiperSlide } from "swiper/react";
import chair1 from '../../assets/chair1.png'
import "swiper/css";
import "./style.css";
import CardColor from '../CardColor';
import { Pagination } from "swiper";
const dataImage = [
    1, 2, 3, 4, 5, 6, 7, 8,
]

export default function PopularProducts() {
    // const color = ['#CAF3E5', '#E0EFF6', '#EEEBFF']
    // const [selectColor, setSelectColor] = useState(color)
    // const getColor = () => {
    //     const item = color[Math.floor(Math.random() * color.length)]
    //     setSelectColor(item)
    // }
    // console.log(selectColor)
    // useEffect(() => {
    //     getColor()
    // })
    return (
        <div style={{
            backgroundImage: `url(${imageContainer})`,
            height: '160vh',
            backgroundRepeat: 'no-repeat'
        }}>
            <h2 class="text-3xl font-bold sm:text-4xl text-center">Popular Products</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}>
                {dataImage.map(x => <SwiperSlide><CardColor img={chair1} /></SwiperSlide>)}
            </Swiper>
        </div>
    )
}
