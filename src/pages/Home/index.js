import React from 'react'
import { Navbar, SectionMain, ExploreCategory, PopularProducts } from '../../components'

export default function Home() {
    return (
        <div>
            <div className='my-auto md:min-h-screen bg-gray-200 rounded-b-3xl'>
                <Navbar />
                <SectionMain />
            </div >
            <ExploreCategory />
            <PopularProducts/>
        </div>
    )
}
