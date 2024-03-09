"use client";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z
    .string()
    .regex(/^\d{10}$/)
    .optional(),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(500),
});

export default formSchema;
