import { prisma } from "@/db";

export const revalidate = 20;

const Admin = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="max-w-md mx-auto min-h-screen flex items-center justify-center text-white">
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
              <td className="border px-4 py-2 whitespace-nowrap">
                {user.name}
              </td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
