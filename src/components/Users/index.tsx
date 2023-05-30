"use client";

import { User } from "@prisma/client";
import { useEffect, useState } from "react";

async function getUsers() {
  const res = await fetch("/api/contact");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<User[]>;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Nome</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Telefone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border px-4 py-2">{user.id}</td>
            <td className="border px-4 py-2 whitespace-nowrap">{user.name}</td>
            <td className="border px-4 py-2">{user.email}</td>
            <td className="border px-4 py-2">{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
