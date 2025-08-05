import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./actions";

export default async function Admin() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-lg">
      {/* Header */}
      <header className="mb-6 px-6 py-4 border-b border-green-700 bg-green-600 rounded-t-xl">
        <h1 className="text-3xl font-bold text-white">
          User Role Management
        </h1>
        <p className="text-green-100 mt-1">
          Assign or remove roles for your application users.
        </p>
      </header>

      {/* Users list */}
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


              {/* Actions */}
              <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                <form action={setRole} className="inline">
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="admin" name="role" />
                  <button
                    type="submit"
                    className="px-4 py-1 rounded-md bg-green-600 text-white hover:bg-green-700 transition shadow-md"
                  >
                    Make Admin
                  </button>
                </form>

                <form action={setRole} className="inline">
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="moderator" name="role" />
                  <button
                    type="submit"
                    className="px-4 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition shadow-md"
                  >
                    Make Moderator
                  </button>
                </form>

                <form action={removeRole} className="inline">
                  <input type="hidden" value={user.id} name="id" />
                  <button
                    type="submit"
                    className="px-4 py-1 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition shadow-md"
                  >
                    Remove Role
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
