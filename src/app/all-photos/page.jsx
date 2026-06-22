import PhotoCard from '@/components/PhotoCard';
import { getPhotos } from '@/lib/getPhotos';
import React from 'react';

const AllPhotos = async () => {
    const photo = await getPhotos();

    return (
        <div className='grid lg:grid-cols-4'>
            {
                photo.map((item) => (
                    <PhotoCard key={item.id} item={item} />
                ))
            }
        </div>
    );
};

export default AllPhotos;