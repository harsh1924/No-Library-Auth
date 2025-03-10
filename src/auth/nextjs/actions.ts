"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { signInSchema, signUpSchema } from "./schemas";

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
    const { success, data } = signInSchema.safeParse(unsafeData);
    if (!success) {
        redirect("/");
    }
}

export async function signUp(unsafeData: z.infer<typeof signInSchema>) {
    const { success, data } = signInSchema.safeParse(unsafeData);
    if (!success) {
        redirect("/");
    }
}

export async function logOut() {
    redirect("/");
}