"use client";

import { useState, useTransition } from "react";
import { setRole, removeRole } from "./actions";

interface Props {
    userId: string;
}

export default function UserActions({ userId }: Props) {
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSetRole = (role: string) => {
        startTransition(async () => {
            const formData = new FormData();
            formData.set("id", userId);
            formData.set("role", role);
            const result = await setRole(formData);

            if (!result?.success) {
                setMessage(result?.message || "An unknown error occurred.");
                setShowModal(true);
            } else {
                setMessage("");
                setShowModal(false);
            }
        });
    };

    const handleRemoveRole = () => {
        startTransition(async () => {
            const formData = new FormData();
            formData.set("id", userId);
            const result = await removeRole(formData);

            if (!result?.success) {
                setMessage(result?.message || "An unknown error occurred.");
                setShowModal(true);
            } else {
                setMessage("");
                setShowModal(false);
            }
        });
    };

    return (
        <>
            {/* Role action buttons */}
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => handleSetRole("admin")}
                    disabled={isPending}
                    className="px-4 py-1 rounded-md bg-green-600 text-white hover:bg-green-700 transition shadow-md"
                >
                    Make Admin
                </button>
                <button
                    onClick={() => handleSetRole("moderator")}
                    disabled={isPending}
                    className="px-4 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition shadow-md"
                >
                    Make Moderator
                </button>
                <button
                    onClick={handleRemoveRole}
                    disabled={isPending}
                    className="px-4 py-1 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition shadow-md"
                >
                    Remove Role
                </button>
            </div>

            {/* Error Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl p-6 w-full max-w-md text-center">
                        <h2 className="text-xl font-bold text-red-600 mb-4">Action Denied</h2>
                        <p className="text-gray-800 dark:text-gray-100 mb-6">{message}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
