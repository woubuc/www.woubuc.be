<template>
	<content-list :content="posts" />
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import { Component, Vue } from 'nuxt-property-decorator';

import ContentList from '~/components/ContentList.vue';
import Post from '~/models/Post';

@Component({
	name: 'BlogPage',
	components: { ContentList },
	watchQuery: ['tag']
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
