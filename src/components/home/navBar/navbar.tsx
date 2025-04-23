import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import boxHeader from "@/assets/Picsart_25-04-23_11-47-37-966.jpg"
import fantasy from"@/assets/fantasy.jpg"
import old from "@/assets/old.jpg"
import litrituer from "@/assets/litriture.jpg"
import novel from "@/assets/novel.jpg"


export default function Navbar() {
    return (
        <div className='bg-[#A68A64] w-5/6 h-18 rounded-4xl mb-20'>
            <nav className='flex -mt-26'>
                <Link href={''}><Image className='' src={fantasy} alt={''} /></Link>
                <Link href={''}><Image className='' src={old} alt={''} /></Link>
                <Link href={''}><Image className='' src={litrituer} alt={''} /></Link>
                <Link href={''}><Image className='' src={novel} alt={''} /></Link>

            </nav>
        </div>

    )
}
