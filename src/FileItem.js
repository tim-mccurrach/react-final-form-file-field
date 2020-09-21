import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowAltCircleDown,
	faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { fileTypeToFaIcon, getFileType } from "./mimeTypeMaps";

import {
	FileItemLi,
	StyledFaIcon,
	DownloadButton,
	DeleteButton,
} from "./styledComponents";

export const FileItem = React.forwardRef((props, ref) => {
	const {
		fileName,
		removeFile,
		downloadFile,
		inProgress,
		progress,
		mimeType,
		dragProps,
		...otherProps
	} = props;
	const fileType = getFileType(props.mimeType);
	const icon = fileTypeToFaIcon[fileType];
	return (
		<FileItemLi ref={ref} {...otherProps}>
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
});

FileItem.propTypes = {
	// required
	fileName: PropTypes.string.isRequired,
	removeFile: PropTypes.func.isRequired,

	//optional
	downloadFile: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	inProgress: PropTypes.bool,
	progress: PropTypes.number,
	mimeType: PropTypes.string,
};
