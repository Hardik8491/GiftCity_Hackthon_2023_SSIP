"use client";
import { useEffect, useState } from 'react';
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useUser from '../hooks/useUser';


export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();
  const {user}=useUser();


  const handleSignIn = async () => {
    // router.push("/Login");
  };

  return (
    <div className="grid place-items-center ">
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        {session ? (
          <>
            <div className="flex flex-col items-start gap-2">
             <div> UserName:<span className="font-bold">{" "} {user?.username}</span></div>
             <div>   Email: <span className="font-bold">{user?.email}</span></div>
           
            </div>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
              Log Out
            </button>
            {/* <button onClick={router.push('/Profile')} >Profile</button> */}
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-green-500 text-white font-bold px-6 py-2 mt-3">
            Sign In
          </button>
        )}
       
   

         
      </div>
   
    </div>
  );
}
