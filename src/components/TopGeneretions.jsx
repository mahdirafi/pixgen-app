import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
    const res = await fetch("https://pixgen-app.vercel.app/data.json");
    const photo = await res.json();
    const topPhoto = photo.slice(0,5)
    console.log(topPhoto, "photo");
    return (
        <div>
            <h2 className='text-6xl font-semibold text-green-700 text-center my-8'>
            Top Photos </h2>
            <div>
                {
                    photo.map(item => <PhotoCard key={item.id} item={item}>
                         
                    </PhotoCard> )
                }
            </div>
            
        </div>
    );
};

export default TopGenerations;