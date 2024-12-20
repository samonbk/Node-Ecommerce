import React, { useCallback, useEffect, useState } from "react";
import imageUrl from "../../assets/Data/url";
import { useUserStore } from "../../assets/Data/user";

const Users = () => {
  const { users, fetchUsers, updateUser } = useUserStore();
  const [sortUsers, setSortUsers] = useState([]);

  const fetchData = async () => {
    const result = await fetchUsers();
    if (!result.success) {
      console.log(result.message);
    }

    setSortUsers(users);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSetAdmin = async (id) => {
    const user = new FormData();
    user.append("role", "admin");
    const result = await updateUser(id, user);
    if (result.success) {
      alert(result.message);
      window.location.reload();
    }
  };
  const handleSetUser = async (id) => {
    const user = new FormData();
    user.append("role", "user");
    const result = await updateUser(id, user);
    if (result.success) {
      alert(result.message);
      window.location.reload();
    }
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="mt-10 px-3">
      <table className="w-full border border-gray-300 border-collapse">
        <thead>
          <tr>
            <th className="text-start border border-gray-300 border-collapse py-2 px-3">
              Id
            </th>
            <th className="text-start border border-gray-300 border-collapse py-2 px-3">
              Image
            </th>
            <th className="text-start border border-gray-300 border-collapse py-2 px-3">
              Name
            </th>
            <th className="text-start border border-gray-300 border-collapse py-2 px-3">
              Email
            </th>
            <th className="text-start border border-gray-300 border-collapse py-2 px-3">
              Role
            </th>
            <th className="text-start border border-gray-300 border-collapse py-2 px-3">
              Create Date
            </th>
          </tr>
        </thead>
        <tbody>
          {sortUsers &&
            sortUsers.map((p) => (
              <tr key={p.id}>
                <td className="text-start border border-gray-300 border-collapse py-2 px-3 w-4">
                  {p.id}
                </td>
                <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                  <div className="w-[70px] h-[70px] overflow-hidden">
                    <img className="" src={imageUrl + p.image} alt="" />
                  </div>
                </td>
                <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                  {p.name}
                </td>
                <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                  {p.email}
                </td>
                <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                  {p.role}
                </td>
                <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                  {new Date(p.date).getDate()}/
                  {months[new Date(p.date).getMonth()]}/
                  {new Date(p.date).getFullYear()}
                </td>
                <td className="text-start border border-gray-300 border-collapse py-2 px-3 max-w-[100px]">
                  <ul className="space-y-1 space-x-1">
                    <li
                      className="cursor-pointer py-1 px-2 rounded-2xl bg-green-600  text-center text-white"
                      onClick={() => handleSetAdmin(p.id)}
                    >
                      Set Admin
                    </li>
                    <li
                      className="cursor-pointer py-1 px-2 rounded-2xl bg-cyan-600  text-center text-white"
                      onClick={() => handleSetUser(p.id)}
                    >
                      Set User
                    </li>
                  </ul>
                </td>
                {/* <td className="text-start border border-gray-300 border-collapse py-2 px-3">
                  <span className="text-red-500 inline-block mr-4 cursor-pointer">
                    Delete
                  </span>
                  <span className="text-green-500 inline-block cursor-pointer">
                    Edit
                  </span>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
