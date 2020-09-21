import { useRef } from "react";
import { useFieldArray } from "react-final-form-named-arrays";

import { addVersionToFilename, countDuplicates } from "./utils";

const defaultConfig = {
	multiple: true,
};
// rethink this, should I use defaultConfig as the default argument
// how will this fit in with defaultProps with the component, what
// is least confusing
const useFilesField = function (name, onFileLoad, config = {}) {
	const { multiple, accepts, ...fieldConfig } = config;
	const inputRef = useRef(null);
	const { meta, fields } = useFieldArray(name, {
		getItemName: (v) => v,
		...fieldConfig,
	});

	const onChange = ({ target }) => {
		const nameList = meta.data.NAME_LIST;
		Array.from(target.files).forEach((file) => {
			var filename = file.name;
			// add a verion number for repeated file names
			const count = countDuplicates(nameList, filename);
			if (duplicates) {
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
		multiple,
		accepts,
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
