import React from "react";

import useFilesField from "../src/useFilesField";
import FormTemplate from "../src/FormTemplate";

export default {
	title: "Example using hooks",
};

const onFileAdd = ({ filename, addFile }) => {
	addFile({ filename });
};

const Example = (props) => {
	const { uploadFiles, inputProps, files } = useFilesField(
		"files",
		onFileAdd
	);
	return (
		<>
			<input {...inputProps} />
			<button onClick={uploadFiles}>Load files</button>
			{files.map((x) => {
				console.log(x);
				return <p>{x.fileName}</p>;
			})}
		</>
	);
};

export const FileList = (props) => (
	<FormTemplate>
		<Example />
	</FormTemplate>
);
