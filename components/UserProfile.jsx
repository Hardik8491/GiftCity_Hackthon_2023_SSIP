'use client'

import React from "react";
import useUser from "./hooks/useUser";

const UserProfile = () => {
  const {user}=useUser()
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <div className="bg-gray-500 h-40 w-full"></div>
      <div className="mt-[-8rem] relative">
        <img
          height={200}
          width={200}
          src={user?.img}
          className="border rounded-full"
          alt="User Profile"
        />
      </div>
      <div className="bg-white flex flex-col items-center py-10 w-full shadow-lg mt-4">
        <div className="flex items-center flex-col mt-9">
          <div>
            <span className="text-xl font-bold">Charles Patterson</span>
          </div>
          <p>
            Fool for tips, memes, and freebies design. Co-founder of fhaesifakesnas.com. Lorem ipsum description.
          </p>
          <div className="flex items-center gap-1">
            <p>@denliaeukqw</p>
            <p>Joined Jun 2022</p>
            <p>Goalble</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center relative py-10 w-full shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4">Followers</h2>
        {/* Add your followers section content here */}
      </div>
      <div className="bg-white flex flex-col items-center relative py-10 w-full shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4">Likes</h2>
        {/* Add your likes section content here */}
      </div>
      <div className="bg-white flex flex-col items-center relative py-10 w-full shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4">User Badges</h2>
        {/* Add your user badges section content here */}
      </div>
    </div>
  );
};

export default UserProfile;
