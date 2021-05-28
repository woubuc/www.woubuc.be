<template>
	<span>{{ formatted }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import format from 'date-fns/format';

@Component({
	name: 'DateLabel',
})
export default class DateLabel extends Vue {

	@Prop({ required: true }) public readonly date: Date | string;
	@Prop({ default: 'dd MMM yyyy' }) public readonly format: string;

	get formatted(): string {
		return format(new Date(this.date), this.format);
	}

}
</script>
