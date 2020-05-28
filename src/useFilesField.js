import { useRef } from "react";
import { useFieldArray } from "react-final-form-named-arrays";

import { addVersionToFilename } from "./utils";

const defaultConfig = {
	multiple: true,
};

const useFilesField = function (
	name,
	onFileLoad,
	config = {},
	fieldConfig = {}
) {
	const inputRef = useRef(null);
	const { meta, fields } = useFieldArray(name, {
		getItemName: (v) => v,
		...fieldConfig,
	});
	const onChange = ({ target }) => {
		const nameList = meta.data.NAME_LIST;
		Array.from(target.files).forEach((file) => {
			var filename = file.name;
			if (nameList.includes(filename)) {
				const count = nameList.reduce(
					(n, val) => n + (val === file.name),
					0
				);
				filename = addVersionToFilename(filename, count);
			}
			onFileLoad({
				file: file,
				filename: filename,
				addFile: (value) => fields.push(value, filename),
				removeFile: () => fields.remove(filename),
				updateFile: (value) => fields.update(filename, value),
			});
		});
	};

	const uploadFiles = () => {
		inputRef.current.click();
	};

	const fileInputProps = {
		ref: inputRef,
		hidden: true,
		multiple: config.multiple,
		accepts: config.accepts,
		type: "file",
		onChange,
	};
	return {
		inputProps: fileInputProps,
		files: fields,
		meta: meta,
		uploadFiles,
	};
};

export default useFilesField;
