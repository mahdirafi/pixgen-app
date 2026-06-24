"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
 

const Navbar = () => {

  const userData = authClient.useSession() ;
  const user = userData.data?.user;
  console.log(user);

  const handleSignOut = async() =>{
    await authClient.signOut();
  }




  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/Logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          
          {!user && 
           <ul className="flex items-center space-x-2 text-sm">

           <Button >
            <Link
              href="/signup"
              className="">
              Sign Up
            </Link>
          </Button>

            <Button  variant="outline">
              <Link href={"/signin"}>SignIn</Link>
            </Button>
            
          </ul>}

          { user && ( 
            <div className="flex gap-2 items-center">
              
                <Avatar>
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
                <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div> )
          }

        </div>
      </nav>
    </div>
  );
};

export default Navbar;