import React from "react";

import useFilesField from "./useFilesField";

const FilesField = (props) => {
	const { name, onFileLoad, id, children, ...otherProps } = props;
	const { uploadFiles, inputProps, files, meta } = useFilesField(
		name,
		onFileLoad,
		otherProps
	);

	if (children && typeof children !== "function") {
		throw new Error(`children must be funtion for FileField - ${name}`);
	}

	return (
		<>
			<input id={id} {...inputProps} />
			{children && children({ uploadFiles, files, meta, inputId: id })}
		</>
	);
};

export default FilesField;
