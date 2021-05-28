<template>
	<div class="px-6 py-4 bg-gray-100 rounded-sm">
		<span class="block font-semibold text-gray-700">{{ name }}</span>
		<small class="mb-3 block text-sm text-gray-500">{{ formattedSize }}</small>
		<a :href="url" :download="name" class="">Download</a>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
	name: 'DownloadFile',
})
export default class DownloadFile extends Vue {

	@Prop({ required: true }) public readonly name: string;
	@Prop({ required: true }) public readonly size: string;
	@Prop({ required: true }) public readonly url: string;

	get formattedSize(): string {
		let mb = parseFloat(this.size);
		return `${ mb.toFixed(1) } MB`;
	}
}
</script>
