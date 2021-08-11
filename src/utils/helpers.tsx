export const runtimeFormat = (n: number) => `${n / 60 ^ 0} hrs ${n % 60} mins`;

export function truncateString(string:string, max:number) {
	if (string.length < max) {
		return string;
	} else {
		return `${string.substr(0, string.substr(0, max - 3).lastIndexOf(' '))}...`;
	}
}

export const addDecimal = (n) => {
	return n % 1 !== 0 ?  n : n.toFixed(1);
};



