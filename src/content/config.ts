import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    order: z.number(),
    education: z.string().optional(),
    languages: z.string().optional(),
  }),
});

export const collections = { pages, team };
