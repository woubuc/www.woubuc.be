<template>
	<div>
		<div v-if="filtering" class="flex justify-between my-4 -mb-2 px-6 py-4 bg-gray-100 rounded-sm">
			<p class="flex-grow w-1/3">
				Showing posts tagged
				<strong>{{ filtering }}</strong>
			</p>
			<p class="flex-none whitespace-nowrap">
				<nuxt-link :to="{ name: 'blog' }"
						   class="text-gray-500 underline hover:text-black focus:text-black">
					Show all posts
				</nuxt-link>
			</p>
		</div>
		<content-list :content="posts" />
	</div>
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
		let where: Record<string, any> = { published: true };

		if (route.query.tag) {
			let tag = route.query.tag.toString().toLowerCase();
			where = { ...where, tagsLower: { $contains: tag }};
		}

		let posts = await $content('posts')
			.where(where)
			.sortBy('date', 'desc')
			.fetch() as IContentDocument[];

		return { posts };
	}

	get filtering() : string | null {
		if (this.$route.query.tag) {
			return this.$route.query.tag.toString();
		}
		return null;
	}
}
</script>
