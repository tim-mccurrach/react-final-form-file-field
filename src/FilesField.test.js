import React from "react";
import { render, fireEvent } from "@testing-library/react";

import FilesField from "./FilesField";
import FormTemplate from "./FormTemplate";

describe("FilesField", () => {
	test("Check hidden input is rendered", () => {
		const mockOnFileLoad = jest.fn();
		const { container } = render(
			<FormTemplate>
				<FilesField name="files" onFileLoad={mockOnFileLoad} />
			</FormTemplate>
		);
	});
});
