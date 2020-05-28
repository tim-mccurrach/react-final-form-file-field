export const addVersionToFilename = (filename, version) => {
	const name = filename.substring(0, filename.lastIndexOf("."));
	const extension = filename.split(".").pop();
	return `${name}(${version}).${extension}`;
};
