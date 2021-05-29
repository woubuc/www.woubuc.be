<template>
	<div class="max-w-screen-md mx-auto">
		<index-page-intro />

		<content-list :content="content" />

		<div class="flex justify-center gap-x-6">
			<site-button :to="{ name: 'blog' }">Read more blog posts</site-button>
			<site-button :to="{ name: 'projects' }">View all my projects</site-button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

import ContentList from '~/components/ContentList.vue';
import PageIntroBlock from '~/components/PageIntroBlock.vue';
import IndexPageIntro from '~/components/IndexPageIntro.vue';
import SiteButton from '~/components/SiteButton.vue';

@Component({
	name: 'IndexPage',
	components: { SiteButton, IndexPageIntro, ContentList, PageIntroBlock  },
})
export default class IndexPage extends Vue {

	private content: IContentDocument[] = [];

	async asyncData({ $content }: Context & Vue) {
		let content = await $content('', { deep: true })
			.where({ published: true })
			.sortBy('date', 'desc')
			.limit(5)
			.fetch() as IContentDocument[];

		return { content };
	}
}
</script>
