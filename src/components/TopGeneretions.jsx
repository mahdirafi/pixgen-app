import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
    const res = await fetch("https://pixgen-app.vercel.app/data.json");
    const photo = await res.json();
    const topPhoto = photo.slice(0,5)
    console.log(topPhoto, "photo");
    return (
        <div className='mt-22'>
            <h2 className='text-4xl lg:text-6xl font-semibold text-pink-600 text-center my-8
             underline decoration-pink-600 decoration-4 underline-offset-[12px]'>
            TOP PHOTOS GENERATIONS
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                {
                    photo.map(item => <PhotoCard key={item.id} item={item}>
                         
                    </PhotoCard> )
                }
            </div>
            
        </div>
    );
};

export default TopGenerations;