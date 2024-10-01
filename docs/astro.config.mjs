// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			logo: {
				src: './src/assets/logo.svg',
			  },
			title: 'Basktt',
			social: {
				github: 'https://github.com/stumbdev/basktt',
			},
			sidebar: [
				{
					label: 'Get started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/intro' },
						{ label: 'Types', slug: 'guides/types'},
						{ label: 'Functions', slug: 'guides/functions'},
					],
				},
				{
					label: 'Introduction to quantum computing',
					items: [
						{ label: 'Intro2Quantum', slug: 'quantum/intro2quantum'},
					],
				}
			],
			editLink: {
				baseUrl: 'https://stumbdev.github.io/basktt',
			  },
		}),
	],
});
