import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotos = async() => {
    const res = await fetch("https://pixgen-app.vercel.app/data.json");
    const photo = await res.json();
     console.log(photo,"all photos");
    return (
        <div className='grid lg:grid-cols-4'>
            {
                photo.map((item) => <PhotoCard key={item.id} item={item}>
                    {item.title}
                </PhotoCard>)
            }

        </div>
    );
};

export default AllPhotos;