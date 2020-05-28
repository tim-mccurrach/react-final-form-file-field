import {
	faFileWord,
	faFileVideo,
	faFilePowerpoint,
	faFileExcel,
	faFilePdf,
	faFileImage,
	faFile,
	faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const microsoftFiles = ["word", "powerpoint", "excel"];

const fileTypeList = [
	"video",
	"pdf",
	"text",
	"image",
	"other",
	...microsoftFiles,
];

export const fileTypes = fileTypeList.reduce(
	(obj, fileType) => ({
		...obj,
		[fileType]: fileType,
	}),
	{}
);

export const getFileType = (mimeType = "") => {
	const [type, subtype] = mimeType.split("/");
	if (fileTypeList.includes(type)) {
		return type;
	}

	if (type === "application") {
		if (subtype === fileTypes.pdf) {
			return fileTypes.pdf;
		}
		var file;
		for (file of microsoftFiles) {
			if (subtype.includes(file)) {
				return file;
			}
		}
	}

	return fileTypes.other;
};

export const fileTypeToFaIcon = {
	[fileTypes.word]: faFileWord,
	[fileTypes.powerpoint]: faFilePowerpoint,
	[fileTypes.excel]: faFileExcel,
	[fileTypes.pdf]: faFilePdf,
	[fileTypes.image]: faFileImage,
	[fileTypes.other]: faFile,
	[fileTypes.video]: faFileVideo,
	[fileTypes.text]: faFileAlt,
};
