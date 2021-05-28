import { ContentDocument } from './ContentDocument';

export default interface Post extends ContentDocument {
	subject: string;
	description: string;

	tags: string[];
	tags_lower: string[];

	comments: Record<string, string>;
}
