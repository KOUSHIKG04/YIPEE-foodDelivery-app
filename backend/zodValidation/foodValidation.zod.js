import { z } from 'zod';

export const addFoodSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
});

export const removeFoodSchema = z.object({
  id: z.string().nonempty("Required"),
});
