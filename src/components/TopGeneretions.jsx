import React from 'react';
import PhotoCard from './PhotoCard';
import { getPhotos } from '@/lib/getPhotos';

const TopGenerations = async() => {
    const photo = await getPhotos();

    return (
        <div className='mt-22'>
            <h2 className='text-4xl lg:text-6xl font-semibold text-pink-600 text-center my-8
             underline decoration-pink-600 decoration-2 underline-offset-[15px]'>
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