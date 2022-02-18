// import React from "react";
import Navbar from "../../components/Navbar";
import UserList from "../../components/UserList";
// const baseUrl = `https://reqres.in/api/users?page=1`;
const users = ({ users = [] }) => {
  // console.log(users);
  return (
    <div>
      <Navbar />
      <main className="min-h-[91vh] ">
        <section className="mx-auto my-12 w-[95%] max-w-5xl gap-12 sm:grid sm:grid-cols-12  ">
          {users?.data.map((item) => {
            return <UserList key={item.id} user={item} />;
          })}
        </section>
      </main>
    </div>
  );
};

export default users;

export async function getStaticProps() {
  const response = await fetch("https://reqres.in/api/users?page=1");

  let data = await response.json();

  // console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
