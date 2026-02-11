// @ts-ignore
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	// @ts-ignore
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const libraries = defineCollection({
	loader: glob({base: './src/content/library', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		creator: z.string(),
		category: z.string(),
		description: z.string(),
		latestVersion: z.string(),
		website: z.string().url(),
		stars: z.number(),
		groupId: z.string(),
		nameId: z.string(),
		varName: z.string(),
	}),
})

export const collections = { blog, libraries };
