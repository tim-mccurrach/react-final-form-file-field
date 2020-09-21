import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";

import { FileItem } from "../src/FileItem";
import FilesField from "../src/FilesField";
import FormTemplate from "../tests/FormTemplate";

export default {
	title: "Example using dropzone and react beautiful dnd",
};

const DraggableFileItem = (props) => (
	<Draggable
		key={props.fileName}
		index={props.index}
		draggableId={props.fileName}
	>
		{(provided) => (
			<FileItem
				ref={provided.innerRef}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				{...props}
			/>
		)}
	</Draggable>
);

const DropZone = (props) => {
	const onDrop = (acceptedFiles) => {
		acceptedFiles.forEach((file) => props.addFile({ filename: file.name }));
	};
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag 'n' drop some files here, or click to select files</p>
			)}
		</div>
	);
};

const Example = (props) => {
	return (
		<FilesField name="files">
			{({ files }) => {
				const onDragEnd = ({ source, destination, type }) => {
					if (!destination || source.index == destination.index) {
						return;
					}
					files.move(source.index, destination.index);
				};
				return (
					<>
						<DropZone addFile={files.push} />
						<DragDropContext onDragEnd={onDragEnd}>
							<Droppable
								droppableId="uploadedFiles"
								direction="horizontal"
							>
								{(provided) => (
									<ul
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										{files.mapValues((file, index) => (
											<DraggableFileItem
												removeFile={() => {
													files.remove(file.filename);
												}}
												fileName={file.filename}
												index={index}
											/>
										))}
										{provided.placeholder}
									</ul>
								)}
							</Droppable>
						</DragDropContext>
					</>
				);
			}}
		</FilesField>
	);
};

export const FileList = (props) => (
	<FormTemplate>
		<Example />
	</FormTemplate>
);
