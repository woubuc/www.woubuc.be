<template>
	<div>
		<div class="flex justify-between my-4 -mb-2 px-6 py-4 bg-gray-100 rounded-sm">
			<p class="flex-grow w-1/3">
				Showing posts tagged
				<strong>{{ tag }}</strong>
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
import ContentList from '../../../components/ContentList.vue';
import Post from '../../../models/Post';

@Component({
	name: 'TagPage',
	components: { ContentList },
})
export default class TagPage extends Vue {

	private posts: (IContentDocument & Post)[] = [];
	private tag: string = '';

	async asyncData({ $content, route }: Context & Vue) {
		let tag = route.params.tag;

		let posts = await $content('posts')
			.where({
				published: true,
				tagsLower: { $contains: tag },
			})
			.sortBy('date', 'desc')
			.fetch() as IContentDocument[];

		return { tag, posts };
	}

}
</script>
