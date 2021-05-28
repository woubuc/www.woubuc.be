export type Colour = 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple';

export function bgColourClass(colour: Colour): string {
	switch (colour) {
		case 'red': return 'bg-red-100';
		case 'orange': return 'bg-orange-100';
		case 'yellow': return 'bg-yellow-100';
		case 'cyan': return 'bg-cyan-100';
		case 'blue': return 'bg-blue-100';
		case 'purple': return 'bg-purple-100';
		default: return 'bg-green-100';
	}
}

export function textColourClass(colour: Colour): string {
	switch (colour) {
		case 'red': return 'text-red-900';
		case 'orange': return 'text-orange-900';
		case 'yellow': return 'text-yellow-900';
		case 'cyan': return 'text-cyan-900';
		case 'blue': return 'text-blue-900';
		case 'purple': return 'text-purple-900';
		default: return 'text-green-900';
	}
}

