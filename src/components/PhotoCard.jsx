import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({item}) => {
    return (
        <div  className='shadow-2xl mx-2 my-2'>
            <Card>
                <div className='p-1 relative aspect-square'>
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded"
                        />
                        <Chip size='sm'color="danger" className='absolute right-1'>{item.category}</Chip>
                </div>

                <h2>  {item.title}  </h2>
                <div className='flex justify-between mx-2 items-center'>
                    <div className='flex gap-4 items-center'>
                    <p><FaHeart /></p>
                    <p>{item.likes}</p>
                </div>

             <Separator orientation="vertical"/>

                <div className='flex gap-4 items-center'>
                    <p><BiDownload /></p>
                    <p>{item.downloads}</p>
                </div>
                </div>
                <Button className="w-full" variant="danger-soft" >View</Button>
                
            </Card>
        </div>
    );
};

export default PhotoCard;