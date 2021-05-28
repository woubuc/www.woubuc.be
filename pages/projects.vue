<template>
	<div class="ProjectsPage">
		<content-list :content="projects" />
	</div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import { Component, Vue } from 'nuxt-property-decorator';
import ContentList from '../components/ContentList.vue';
import Post from '../models/Post';
import Project from '../models/Project';

@Component({
	name: 'ProjectsPage',
	components: { ContentList },
})
export default class ProjectsPage extends Vue {

	private projects: (IContentDocument & Project)[] = [];

	async asyncData({ $content }: Context & Vue) {
		let projects = await $content('projects')
			.where({ published: true })
			.sortBy('date', 'desc')
			.fetch() as IContentDocument[];

		return { projects };
	}
}
</script>
