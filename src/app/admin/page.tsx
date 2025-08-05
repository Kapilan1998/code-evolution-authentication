import { clerkClient } from "@clerk/nextjs/server";
import UserActions from "./userActions";

export default async function Admin() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
      <header className="mb-6 px-6 py-4 border-b border-green-700 bg-green-600 rounded-t-xl">
        <h1 className="text-3xl font-bold text-white">User Role Management</h1>
        <p className="text-green-100 mt-1">
          Assign or remove roles for your application users.
        </p>
      </header>

      <section>
        {users.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-10">
            No users found.
          </p>
        )}

        {users.map((user, idx) => {
          const email = user.emailAddresses.find(
            (email) => email.id === user.primaryEmailAddressId
          )?.emailAddress;

          return (
            <div
              key={user.id}
              className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-lg mb-4
                ${idx % 2 === 0
                  ? "bg-green-50 dark:bg-neutral-800"
                  : "bg-green-100 dark:bg-neutral-700"
                }`}
            >
              {/* User Info */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1 text-gray-900 dark:text-gray-100">
                <div className="font-semibold text-lg">
                  {user.firstName} {user.lastName}
                </div>
                <div className="italic text-sm text-gray-700 dark:text-gray-300">
                  {email || "No primary email"}
                </div>
                <div className="capitalize font-medium text-green-700 dark:text-green-300">
                  Role: {typeof user.publicMetadata.role === "string" ? user.publicMetadata.role : "None"}
                </div>
              </div>

              {/* Action Buttons */}
              <UserActions userId={user.id} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
