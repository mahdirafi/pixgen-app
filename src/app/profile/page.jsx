"use client"
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePge = () => {
     const userData = authClient.useSession() ;
      const user = userData.data?.user;
      console.log(user);

    return (
        <div className=' '>
             <Card className='max-w-96 mx-auto flex flex-col items-center border -mt-4'>
                <Avatar className='h-48 w-48'>
                    <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                </Avatar>
                <p className="text-xl font-bold">{user?.name}</p>
                <h2 className="text-muted">{user?.email}</h2>
                
             <UpdateUserModal/>
             </Card>
        </div>
    );
};

export default ProfilePge;