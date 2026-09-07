// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Carikerja Launchpad',
			logo: {
				src: './src/assets/kulkul-mark.png',
				alt: 'KulKul',
			},
			components: {
				Header: './src/components/Header.astro',
				PageFrame: './src/components/PageFrame.astro',
			},
			editLink: {
				baseUrl: 'https://github.com/kulkultech/carikerja-launchpad/edit/main/',
			},
			social: [
				{ icon: 'x.com', label: 'X', href: 'https://x.com/kulkultech' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/kulkul-technology/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/AYvyGpb7aP' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/kulkultech/carikerja-launchpad' },
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Program Onboarding', slug: 'onboarding' },
						{ label: 'Non-Coder Guide', slug: 'non-coder-guide' },
						{
							label: '10-Step AI Challenge',
							items: [
								{ label: 'Challenge Overview', slug: 'challenge' },
								{ label: 'Step 1: Mindset & Portal Setup', slug: 'challenge/step-1' },
								{ label: 'Step 2: Define Offerings & Niche', slug: 'challenge/step-2' },
								{ label: 'Step 3: Configure AI Business Stack', slug: 'challenge/step-3' },
								{ label: 'Step 4: LinkedIn Optimization', slug: 'challenge/step-4' },
								{ label: 'Step 5: Write a Case Study', slug: 'challenge/step-5' },
								{ label: 'Step 6: Build Your Portfolio Site', slug: 'challenge/step-6' },
								{ label: 'Step 7: Lead Research & Targeting', slug: 'challenge/step-7' },
								{ label: 'Step 8: Cold Outreach & Pitching', slug: 'challenge/step-8' },
								{ label: 'Step 9: Project Scoping & Pricing', slug: 'challenge/step-9' },
								{ label: 'Step 10: Pitch Launch & Submit PR', slug: 'challenge/step-10' },
							]
						},
						{ label: 'Frequently Asked Questions', slug: 'faq' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Overview', slug: 'launchers' },
						{
							label: 'Our Launchers',
							items: [{ autogenerate: { directory: 'launchers' } }]
						}
					],
				},
			],
		}),
	],
});
