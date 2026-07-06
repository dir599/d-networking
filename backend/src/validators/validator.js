import z from "zod";

export const idValidator = z.coerce.number().int().positive();
