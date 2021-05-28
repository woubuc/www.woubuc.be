import { ContentDocument } from './ContentDocument';

export default interface Project extends ContentDocument {
	description: string;

	published: boolean;

	link?: string;
	images?: string[];
}
