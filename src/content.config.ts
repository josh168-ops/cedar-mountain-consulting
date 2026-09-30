import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    order: z.number(),
    education: z.string().optional(),
    languages: z.string().optional(),
  }),
});

const thoughtLeadership = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thought-leadership' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Regulatory Updates', 'Compliance Insights', 'Webinars & Events', 'Firm News']),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { pages, team, thoughtLeadership };