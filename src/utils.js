export const countDuplicates = (array, value) => {
	const name = value.substring(0, value.lastIndexOf("."));
	const extension = value.split(".").pop();
	var pattern;
	if (name) {
		pattern = `${name}(\\(\\d+\\))?\\.${extension}`;
	} else {
		pattern = `${extension}(\\(\\d+\\))?`;
	}
	var count = 0;
	array.forEach((item) => {
		if (item.match(pattern)) {
			count += 1;
		}
	});
	return count;
};

export const addVersionToFilename = (filename, version) => {
	const name = filename.substring(0, filename.lastIndexOf("."));
	const extension = filename.split(".").pop();
	if (name) {
		return `${name}(${version}).${extension}`;
	}
	return `${extension}(${version})`;
};
