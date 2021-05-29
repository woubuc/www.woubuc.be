<template>
	<div>
		<page-intro-block :colour="post.colour">
			<div class="text-center">
				<h1 class="text-3xl sm:text-4xl md:text-5xl leading-[1.2em] font-semibold mb-2">{{ post.title }}</h1>
				<div class="flex flex-wrap justify-center gap-x-4 opacity-75">
					<date-label :date="post.date" />
					<span v-if="post.subject">{{ post.subject }}</span>
					<span>{{ post.readingTime.text }}</span>
				</div>
			</div>
		</page-intro-block>

		<body-text :colour="post.colour" :document="post" :full-page="true" />

		<div class="sm:mx-6 mt-24 mb-6 p-6 bg-gray-100 rounded-sm">
			<div class="flex items-center flex-wrap gap-2">
				<span class="font-semibold text-gray-800">Tagged</span>
				<post-tag-link v-for="tag in post.tags" :key="tag" :tag="tag" :colour="post.colour" />
			</div>
		</div>

		<p class="text-center my-12">
			<site-button :to="{ name: 'blog' }" :colour="post.colour">Back to blog overview</site-button>
		</p>

		<post-scroll-progress :colour="post.colour" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

import BodyText from '~/components/BodyText.vue';
import DateLabel from '~/components/DateLabel.vue';
import PageIntroBlock from '~/components/PageIntroBlock.vue';
import PostScrollProgress from '~/components/PostScrollProgress.vue';
import PostTagLink from '~/components/PostTagLink.vue';
import PostCommentLink from '~/components/PostTagLink.vue';
import SiteButton from '~/components/SiteButton.vue';

import Post from '~/models/Post';

@Component({
	name: 'PostPage',
	components: { PostTagLink, PostScrollProgress, SiteButton, PostCommentLink, BodyText, DateLabel, PageIntroBlock },
})
export default class PostPage extends Vue {

	head() {
		let postUrl = `https://www.woubuc.be/blog/post/${ this.post.slug }`;

		return {
			title: `${ this.post.title } - @woubuc`,
			meta: [
				{ property: 'og:type', content: 'article' },
				{ property: 'og:site_name', content: '@woubuc' },
				{ property: 'og:title', content: this.post.title },
				{ property: 'og:description', content: this.post.description },
				{ property: 'og:url', content: postUrl },
				{ property: 'og:published_time', content: new Date(this.post.date).toISOString() },

				...this.post.tags.map(tag => ({ property: 'article:tag', content: tag })),

				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:site', content: '@woubuc' },
				{ name: 'twitter:title', content: this.post.title },
				{ name: 'twitter:description', content: this.post.description },
				{ name: 'twitter:url', content: postUrl },
				{ name: 'twitter:label1', content: 'Tagged' },
				{ name: 'twitter:data1', content: this.post.tags.join(', ') },
			],
			link: [
				{ rel: 'canonical', href: postUrl },
			],
		};
	}

	private post: IContentDocument & Post;

	async asyncData({ $content, params }: Context & Vue): Promise<Record<string, any>> {
		let slug = params.postId;

		let post = await $content('posts', slug).fetch();

		if (Array.isArray(post)) {
			post = post[0];
		}

		return { post };
	}

	get colourClass(): string {
		return `Body-${ this.post.colour }`;
	}

}
</script>

<style scoped>

</style>
