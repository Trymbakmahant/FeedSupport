import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export async function encrypt(payload :any) {
//   return await new SignJWT(payload).set
// }
// export async function login(formData: FormData) {
//   const user = { email: formData.get("email"), name: "Lee" };

//   const expires = new Date(Date.now() + 10 * 1000);
//   const session = await bycryptjs;
// }
