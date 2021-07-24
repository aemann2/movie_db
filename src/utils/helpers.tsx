export const runtimeFormat = (n: number) => `${n / 60 ^ 0} hrs ${n % 60} mins`;

export function truncateString(string:string, max:number) {
	if (string.length < max) {
		return string;
	} else {
		return `${string.substr(0, string.substr(0, max - 3).lastIndexOf(' '))}...`;
	}
}

// image resolution switching function taken from this blog:
// https://crystallize.com/blog/react-image-sizes-attribute-for-fast-ecommerce
interface Variants {
	url: string,
	width: number
}

export const srcSetUtils = {

	getSrcSet(variants: Variants[], path?: string) {
		return (
			variants
				.map(variant => `${variant.url}${path} ${variant.width}w`)
				.join(',')
		);
	},

	backdropVariants: [
		{
			url: 'https://image.tmdb.org/t/p/w300/',
			width: 400
		},
		{
			url: 'https://image.tmdb.org/t/p/w780/',
			width: 900
		},
		{
			url: 'https://image.tmdb.org/t/p/w1280/',
			width: 1400
		},
	],

	posterVariants: [
		{
			url: 'https://image.tmdb.org/t/p/w342/',
			width: 770
		},
		{
			url: 'https://image.tmdb.org/t/p/w500/',
			width: 1020
		},
	]
};



