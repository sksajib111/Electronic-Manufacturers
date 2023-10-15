import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading/Loading";
import UserRow from "../UserRow/UserRow";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://evening-ridge-50687.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  // console.log(users);

  return (
    <div className="px-20">
      <h2 className="text-3xl text-center mb-4">All User</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th  className="text-xl font-bold">Sl</th>
              <th className="text-xl font-bold">Name</th>
              <th className="text-xl font-bold">Action</th>
              <th className="text-xl font-bold">Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
