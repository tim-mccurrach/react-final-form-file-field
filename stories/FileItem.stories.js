import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import { FileItem } from "../test/FileItem";

export default {
	title: "File Item",
	component: FileItem,
	decorators: [withKnobs],
};

export const FileItemStory = () => (
	<FileItem
		fileName={text("File Name", "Example")}
		downloadFile={() => {}}
		progress={number("progress", 50, {
			range: true,
			min: 0,
			max: 100,
			step: 1,
		})}
		mimeType={text("MIME", "video/something")}
		inProgress={boolean("uploaded", true)}
	/>
);
