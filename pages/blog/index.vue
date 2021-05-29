<template>
	<content-list :content="posts" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

import Post from '~/models/Post';

import ContentList from '~/components/ContentList.vue';

@Component({
	name: 'BlogPage',
	components: { ContentList },

	head: {
		title: 'Blog - @woubuc',
	},
})
export default class BlogPage extends Vue {

	private posts : (IContentDocument & Post)[] = [];

	async asyncData({ $content, route } : Context & Vue) {
		let posts = await $content('posts')
			.where({ published: true })
			.sortBy('date', 'desc')
			.fetch() as IContentDocument[];

		return { posts };
	}
}
</script>
