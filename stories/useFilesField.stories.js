import React from "react";

import { FileItem } from "../src/FileItem";
import useFilesField from "../src/useFilesField";
import FormTemplate from "../tests/FormTemplate";

export default {
	title: "Example using hooks",
};

const onFileAdd = ({ file, filename, addFile }) => {
	addFile({ mime: file.type, filename });
};

const Example = (props) => {
	const { uploadFiles, inputProps, files } = useFilesField(
		"files",
		onFileAdd,
		{ multiple: true }
	);
	return (
		<>
			<input {...inputProps} />
			<button onClick={uploadFiles}>Load files</button>
			<ul>
				{files.mapValues((file) => {
					return (
						<FileItem
							fileName={file.filename}
							mimeType={file.mime}
							downloadFile={() => {}}
							removeFile={() => {
								files.remove(file.filename);
							}}
						/>
					);
				})}
			</ul>
		</>
	);
};

export const FileList = (props) => (
	<FormTemplate>
		<Example />
	</FormTemplate>
);
