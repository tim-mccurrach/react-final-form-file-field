import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fileTypes } from "./mimeTypeMaps";

const colourMap = {
	[fileTypes.word]: "#2a347d",
	[fileTypes.powerpoint]: "#c66035",
	[fileTypes.excel]: "#30703a",
	[fileTypes.pdf]: "#ca433c",
	[fileTypes.image]: "#6be8de",
	[fileTypes.other]: "#f7c46c",
	[fileTypes.video]: "#602976",
	[fileTypes.text]: "#000",
};

export const FileItemLi = styled.li`
	width: 12ch;
	position: relative;
	text-align: center;
	display: inline-block;
	vertical-align: top;

	div {
		margin: 0;
		overflow-wrap: break-word;
		line-height: 1em;
		max-height: 3em;
		overflow: hidden;
	}

	&:hover,
	&:focus {
		button {
			opacity: 1;
		}
	}

	progress {
		width: 12ch;
	}

	button {
		position: absolute;
		top: 0;
		font-size: 1.4em;
		display: block;
		border: none;
		background: none;
		opacity: 0;

		&:focus {
			opacity: 1;
		}

		&:hover {
			cursor: pointer;
		}
	}
`;

export const StyledFaIcon = styled(({ iconColor, ...rest }) => (
	<FontAwesomeIcon {...rest} />
))`
	font-size: 4em;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 3px;
	display: block;
	color: ${(props) => colourMap[props.iconColor]};
`;

export const DownloadButton = styled.button`
	left: 1.4em;
	color: green;

	&:hover,
	&:focus {
		color: darkgreen;
	}
`;

export const DeleteButton = styled.button`
	left: 0.2em;
	color: red;
	&:hover,
	&:focus {
		color: darkred;
	}
`;
