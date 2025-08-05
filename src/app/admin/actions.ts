"use server";

import {auth,clerkClient} from "@clerk/nextjs/server";
import { Roles } from "../../../types/globals";
import { revalidatePath } from "next/cache";

export async function setRole(formData: FormData){
    const {sessionClaims} = await auth();

    if(sessionClaims?.metadata?.role !== "admin"){
        throw new Error("You are not authorized to perform this action");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
    const role = formData.get("role") as Roles;

    try{
        await client.users.updateUser(id,{
            publicMetadata: {
                role
            }
        });
        revalidatePath("/admin");
    }catch(error){
        console.error("Error updating user role:", error);
        throw new Error("Failed to update user role");
    }
}


export async function removeRole(formData: FormData){
    const {sessionClaims} = await auth();

    if(sessionClaims?.metadata?.role !== "admin"){
        throw new Error("You are not authorized to perform this action");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;

    try{
        await client.users.updateUser(id,{
            publicMetadata: {
                role:null
            }
        });
        revalidatePath("/admin");
    }catch(error){
        console.error("Error while removing role:", error);
        throw new Error("Failed to remove user role");
    }
}