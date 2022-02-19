// import React from 'react'
import Image from "next/image";
const UserList = ({ user }) => {
  // console.log(user);
  return (
    <article className=" w-full rounded-md shadow-lg hover:shadow-xl sm:col-span-6 md:col-span-4">
      <Image
        // loader={myLoader}
        src={user?.avatar}
        alt="Picture of the author"
        className="w-full rounded-t-md object-cover"
        layout="responsive"
        height={300}
        width={400}
      />
      <footer className="px-3 py-5">
        <h4 className="text-xl font-bold ">{`${user?.first_name} ${user?.last_name}`}</h4>
        <h5 className="text-base font-semibold text-gray-600">{user?.email}</h5>
      </footer>
    </article>
  );
};

export default UserList;
