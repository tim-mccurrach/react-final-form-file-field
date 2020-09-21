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
		...otherProps
	} = props;
	const fileType = getFileType(mimeType);
	const icon = fileTypeToFaIcon[fileType];
	return (
		<FileItemLi ref={ref} {...otherProps}>
			<StyledFaIcon icon={icon} iconColor={fileType} />
			{!inProgress && typeof downloadFile === "string" && (
				<DownloadButton
					as="a"
					href={downloadFile}
					aria-label="Download File"
				>
					<FontAwesomeIcon icon={faArrowAltCircleDown} />
				</DownloadButton>
			)}
			{!inProgress && typeof downloadFile === "function" && (
				<DownloadButton
					onClick={downloadFile}
					aria-label="Download File"
				>
					<FontAwesomeIcon icon={faArrowAltCircleDown} />
				</DownloadButton>
			)}
			<DeleteButton onClick={removeFile} aria-label="Remove File">
				<FontAwesomeIcon icon={faTrashAlt} />
			</DeleteButton>
			<div>{fileName}</div>
			{inProgress && (
				<progress
					role="progressbar"
					value={progress}
					max={100}
				></progress>
			)}
		</FileItemLi>
	);
});

FileItem.displayName = "FileItem";

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
