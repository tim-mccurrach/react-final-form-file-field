import React from "react";
import PropTypes from "prop-types";
import { forbidExtraProps } from "airbnb-prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleDown,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";

import { fileTypeToFaIcon, getFileType } from "./mimeTypeMaps";

import {
	FileItemLi,
	StyledFaIcon,
	DownloadButton,
	DeleteButton,
} from "./styledComponents";
/*
export default function DraggableFileItem(props) {
	return (
		<Draggable
			key={props.fileName}
			index={props.index}
			draggableId={props.fileName}
		>
			{(provided) => <FileItem dragProps={provided} {...props} />}
		</Draggable>
	);
}
*/
export function FileItem(props) {
	const fileType = getFileType(props.mimeType);
	const icon = fileTypeToFaIcon[fileType];
	return (
		<FileItemLi
			ref={props.dragProps.innerRef}
			{...props.dragProps.draggableProps}
			{...props.dragProps.dragHandleProps}
		>
			<StyledFaIcon icon={icon} iconColor={fileType} />
			{!props.inProgress && typeof props.downloadFile === "string" && (
				<DownloadButton
					as="a"
					href={props.downloadFile}
					aria-label="Download File"
				>
					<FontAwesomeIcon icon={faArrowAltCircleDown} />
				</DownloadButton>
			)}
			{!props.inProgress && typeof props.downloadFile === "function" && (
				<DownloadButton
					onClick={props.downloadFile}
					aria-label="Download File"
				>
					<FontAwesomeIcon icon={faArrowAltCircleDown} />
				</DownloadButton>
			)}
			<DeleteButton onClick={props.removeFile} aria-label="Remove File">
				<FontAwesomeIcon icon={faTrashAlt} />
			</DeleteButton>
			<div>{props.fileName}</div>
			{props.inProgress && (
				<progress
					role="progressbar"
					value={props.progress}
					max={100}
				></progress>
			)}
		</FileItemLi>
	);
}

FileItem.defaultProps = {
	dragProps: {},
};

FileItem.propTypes = forbidExtraProps({
	// required
	fileName: PropTypes.string.isRequired,
	progress: PropTypes.number.isRequired,
	removeFile: PropTypes.func.isRequired,

	//optional
	downloadFile: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	inProgress: PropTypes.bool,
	mimeType: PropTypes.string,
	dragProps: PropTypes.object,
});
