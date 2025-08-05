"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "../../../types/globals";
import { revalidatePath } from "next/cache";


// 🛡️ Protect this user from role changes
const SUPER_ADMIN_ID = process.env.NEXT_PUBLIC_SUPER_ADMIN_ID;

export async function setRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if (sessionClaims?.metadata?.role !== "admin") {
        // throw new Error("You are not authorized to perform this action");
        return { success: false, message: "You are not authorized to perform this action" };
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
    const role = formData.get("role") as Roles;

    // 🔒 Prevent role changes for the Super Admin
    if (id === SUPER_ADMIN_ID) {
        // throw new Error("Cannot modify role of the Super Admin.");
        return { success: false, message: "You can't change the role of the Super Admin." };
    }

    try {
        await client.users.updateUser(id, {
            publicMetadata: {
                role
            }
        });
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Error updating user role:", error);
        throw new Error("Failed to update user role");
    }
}


export async function removeRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if (sessionClaims?.metadata?.role !== "admin") {
        // throw new Error("You are not authorized to perform this action");
        return { success: false, message: "You are not authorized to perform this action" };
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;

    // 🔒 Prevent role changes for the Super Admin
    if (id === SUPER_ADMIN_ID) {
        // throw new Error("Cannot modify role of the Super Admin.");
        return { success: false, message: "You can't change the role of the Super Admin." };
    }


    try {
        await client.users.updateUser(id, {
            publicMetadata: {
                role: null
            }
        });
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Error while removing role:", error);
        throw new Error("Failed to remove user role");
    }
}