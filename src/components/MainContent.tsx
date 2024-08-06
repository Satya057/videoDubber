import Image from 'next/image'
import React from 'react'
// import HeaderMantine from './Header-mantine';
 
import Dropdown from './ui/Dropdown'
import Upvote from './ui/Upvote';

function MainContent() {
    return (
        <div className='container mx-auto w-[90%] md:w-full max-w-screen-lg md:px-20 mt-5'>
            <div>
                <Image 
                    src={'/logo.jpeg'} 
                    alt='logo' 
                    width={100} 
                    height={100} 
                    className='logo w-[60px] h-[60px] md:w-[100px] md:h-[100px]' 
                />
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                <div>
                    <h1 className='font-bold text-3xl'>VideoDubber - Fast Video Translator</h1>
                    <p className='text-xl font-thin text-slate-500'>
                        Translate videos in your own voice, globalize in a click!
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <Dropdown />
                    <Upvote />
                </div>
            </div>
            <div className='mt-2 text-sm text-red-500'>
                2 months free annually • Free Options
            </div>
            <div className='mt-2 text-lg'>
                Translate video in one click with AI to 150+ languages & accents in original voice. Prime features: 
                1. 0.1 USD/min for premium video translation with voice cloning 
                2. Unlimited Editing 
                3. Exports MP4/SRT/MP3
            </div>
            <div className='mt-2 flex flex-wrap gap-2'>
                <span className='badge'>SaaS</span>
                <span className='badge'>Artificial Intelligence</span>
                <span className='badge'>Video</span>
            </div>
        </div>
    )
}

export default MainContent
