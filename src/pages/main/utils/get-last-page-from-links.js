export const getLastPageFromLinks = (links) => {
	const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);
	console.log('result', result[1]);
	return Number(result[1]);
};
