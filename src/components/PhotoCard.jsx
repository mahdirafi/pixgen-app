import { Card } from '@heroui/react';
import React from 'react';

const PhotoCard = ({item}) => {
    return (
        <Card>
            <h2>  {item.title}  </h2>
            <div>{item.imageUrl}</div>
            
        </Card>
    );
};

export default PhotoCard;