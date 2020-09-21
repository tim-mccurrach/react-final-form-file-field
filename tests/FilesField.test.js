import React from "react";
import { render, fireEvent } from "@testing-library/react";

import FilesField from "../src/FilesField";
import FormTemplate from "./FormTemplate";

describe("FilesField", () => {
	test("Check hidden input is rendered", () => {
		const mockOnFileLoad = jest.fn();
		const { container } = render(
			<FormTemplate>
				<FilesField
					id="files"
					name="files"
					onFileLoad={mockOnFileLoad}
				/>
			</FormTemplate>
		);
	});
});

/*
IN useFilesField.test.js
 - raises an error if no onFileLoad is provided

In this file:
 - check the mock is called when files are added
 - check loading files with the same name
 - check update files works correctly
 - check 
*/
