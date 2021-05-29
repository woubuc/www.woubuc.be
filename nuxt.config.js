export default {
	target: 'static',

	env: {},

	head: {
		title: '@woubuc',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: 'Where I write about programming, tech and stuff.' },
			{ name: 'monetization', content: '$ilp.uphold.com/9YjGeW4zW7pF' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap',
			},
			{ rel: 'alternate', type: 'application/rss+xml', title: '@woubuc', href: 'https://www.woubuc.be/rss.xml' },
		],
	},

	css: [],

	plugins: [],

	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/svg',
	],

	modules: [
		'@nuxt/content',
		'@nuxtjs/feed',
		'@nuxtjs/sitemap',
	],

	content: {
		liveEdit: false,
		markdown: {
			remarkPlugins: ['remark-unwrap-images'],
			prism: {
				theme: 'prismjs/themes/prism-tomorrow.css',
			},
		},
	},

	hooks: {
		'content:file:beforeInsert': (document) => {
			document.mdSource = document.text;
			if (document.extension === '.md') {
				const time = require('reading-time')(document.text);
				document.readingTime = time;

				if (document.tags) {
					document.tagsLower = document.tags.map(t => t.toLowerCase());
				}
			}
		},
	},

	feed() {
		const { $content } = require('@nuxt/content');

		async function createFeed(feed) {
			feed.options = {
				title: '@woubuc',
				description: 'Where I write about programming, tech and stuff.',
				link: 'https://www.woubuc.be/',
			};

			let posts = await $content('posts').sortBy('date', 'desc').fetch();

			for (let post of posts) {
				if (post.published !== true) {
					continue;
				}

				let url = `https://www.woubuc.be/blog/post/${ post.slug }`;

				feed.addItem({
					id: url,
					link: url,
					title: post.title,
					date: new Date(post.date),
					description: post.description,
					content: post.mdSource,
				});
			}
		}

		return [{
			path: '/rss.xml',
			type: 'rss2',
			cacheTime: 1000 * 60 * 15,
			create: createFeed,
		}, {
			path: '/feed.json',
			type: 'json1',
			cacheTime: 1000 * 60 * 15,
			create: createFeed,
		}];
	},

	sitemap: {
		hostname: 'https://www.woubuc.be',
		async routes() {
			const { $content } = require('@nuxt/content');

			let posts = await $content('posts').sortBy('date', 'desc').fetch();

			let tags = posts
				.flatMap(post => post.tagsLower)
				.filter((tag, i, tags) => tags.indexOf(tag) === i);

			return [
				...posts.map(post => `blog/post/${ post.slug }`),
				...tags.map(tag => `blog/tag/${ tag }`),
			];
		},
	},
};
