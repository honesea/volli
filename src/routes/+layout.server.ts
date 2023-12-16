export const config = {
	runtime: 'edge'
};

export async function load() {
	return {
		bfcache: true
	};
}
