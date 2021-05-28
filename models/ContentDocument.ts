export interface ContentDocument {
	title: string;
	type?: string;

	date: Date | string;
	date_format?: string;
	published: boolean;

	colour: 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple';
}
