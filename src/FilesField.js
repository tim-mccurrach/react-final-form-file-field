import React from "react";
import PropTypes from "prop-types";

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

FilesField.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onFileLoad: PropTypes.func,
	children: PropTypes.node,
};

export default FilesField;
