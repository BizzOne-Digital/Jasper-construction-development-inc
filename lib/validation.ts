import { z } from "zod";
export const estimateSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(254),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine(
      (v) => !v || /^[+()\d\s.\-]{7,30}$/.test(v),
      "Please enter a valid phone number.",
    ),
  service: z
    .enum([
      "Not sure yet",
      "Kitchen renovation",
      "Bathroom renovation",
      "Basement renovation",
      "Full-home renovation",
      "Addition / construction",
    ])
    .default("Not sure yet"),
  details: z
    .string()
    .trim()
    .min(15, "Please share at least 15 characters about your project.")
    .max(5000),
  website: z.string().max(200).optional(),
});
