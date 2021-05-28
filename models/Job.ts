import { ContentDocument } from './ContentDocument';

export default interface Job extends ContentDocument {
	date_end?: Date | string;
}
