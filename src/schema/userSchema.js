 //import { z } from "zod";
//import * as z from "zod";

import * as z from "zod";



export const userSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  email: z.string().email("Invalid email address"),
});
