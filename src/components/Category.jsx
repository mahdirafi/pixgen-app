import { getCategory } from '@/lib/getPhotos';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category  = async () => {
     const item = await getCategory();
     console.log(item);

    return (
        <div className='my-4 ml-4 mx-auto space-x-2'>
             {
                item.map(e => <Link href={`?category=${e.name.toLowerCase()}`} key={e.id}><Button  size="sm" variant="outline">{e.name}</Button></Link>)
             }
        </div>
    );
};

export default Category;