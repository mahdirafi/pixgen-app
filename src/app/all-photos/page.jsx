import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import { getPhotos } from '@/lib/getPhotos';
 
import React from 'react';

const AllPhotos = async ({searchParams}) => {
    const {category} =await searchParams;
    console.log(category);

    const photos = await getPhotos();

    const filteredPhotos =category? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos 
   
    return (
        <div>
            <h2 className="text-xl font-bold  text-amber-600 ">All Photos Category </h2>
            <Category/>

            <div className='grid lg:grid-cols-4'>
                {
                    filteredPhotos.map((item) => (
                        <PhotoCard key={item.id} item={item} />
                    ))
                }
            </div>
       </div>
            
    );
};

export default AllPhotos;