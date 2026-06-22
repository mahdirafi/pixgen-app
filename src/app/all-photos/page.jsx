import PhotoCard from '@/components/PhotoCard';
import { getPhotos } from '@/lib/getPhotos';
 
import React from 'react';

const AllPhotos = async () => {
    const photos = await getPhotos();
    


    return (
        <div className='grid lg:grid-cols-4'>
            {
                photos.map((item) => (
                    <PhotoCard key={item.id} item={item} />
                ))
            }
        </div>
            
    );
};

export default AllPhotos;