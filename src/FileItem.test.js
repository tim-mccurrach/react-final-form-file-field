import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";

import { FileItem } from "./FileItem";

const removeFileMock = jest.fn();
const props = {
  fileName: "testFile.pdf",
  progress: 50,
  removeFile: removeFileMock,
};

describe("FileItem", () => {
  test("check file name is rendered", () => {
    const { container } = render(<FileItem {...props} />);
    expect(container).toHaveTextContent("testFile.pdf");
  });

  describe("Progress Bar", () => {
    it("should show when inProgress is true", () => {
      const { getByRole } = render(<FileItem {...props} inProgress={true} />);
      expect(getByRole("progressbar")).toBeInTheDocument();
    });

    it("should have value equal to progress", () => {
      const { getByRole, rerender } = render(
        <FileItem {...props} inProgress={true} />
      );
      expect(getByRole("progressbar")).toHaveValue(50);
      rerender(<FileItem {...props} inProgress={true} progress={5} />);
      expect(getByRole("progressbar")).toHaveValue(5);
    });

    it("should not show when inProgress is false", () => {
      const { queryByRole } = render(
        <FileItem {...props} inProgress={false} />
      );
      expect(queryByRole("progressbar")).not.toBeInTheDocument();
    });

    it("should not show when inProgress is missing", () => {
      const { queryByRole } = render(<FileItem {...props} />);
      expect(queryByRole("progressbar")).not.toBeInTheDocument();
    });
  });

  describe("Download Button", () => {
    it("should be an anchor if downloadFile is a string", () => {
      const { getByRole } = render(
        <FileItem {...props} downloadFile="/some/url" />
      );
      const link = getByRole("link");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/some/url");
    });

    it("should be a button if downloadFile is a function", () => {
      const downloadFile = jest.fn();
      const { queryAllByRole, debug } = render(
        <FileItem {...props} downloadFile={downloadFile} />
      );
      const downloadButton = queryAllByRole("button")[0];
      expect(downloadButton).toBeInTheDocument();
      fireEvent.click(downloadButton);
      expect(downloadFile).toHaveBeenCalledTimes(1);
    });

    it("should not display if downloadFile is missing", () => {
      const { queryByRole, queryAllByRole } = render(<FileItem {...props} />);
      const link = queryByRole("link");
      expect(link).not.toBeInTheDocument();
      // only 1 button (remove) should be present, as apposed to 2
      const buttons = queryAllByRole("button");
      expect(buttons.length).toEqual(1);
    });

    it("should not be displayed if inProgress is true - url", () => {
      const { queryByRole } = render(
        <FileItem {...props} downloadFile="some/url" inProgress={true} />
      );
      const link = queryByRole("link");
      expect(link).not.toBeInTheDocument();
    });

    it("should not be displayed if inProgress is true - function", () => {
      const downloadFunction = jest.fn();
      const { queryAllByRole } = render(
        <FileItem
          {...props}
          downloadFile={downloadFunction}
          inProgress={true}
        />
      );
      const buttons = queryAllByRole("button");
      expect(buttons.length).toEqual(1);
    });
  });

  describe("Cancel Button", () => {
    test("It calls the remove file prop", () => {
      const { getByRole } = render(<FileItem {...props} />);
      const removeButton = getByRole("button");
      fireEvent.click(removeButton);
      expect(removeFileMock).toHaveBeenCalledTimes(1);
    });
  });

  test("Check snapshot", () => {
    const { container } = render(<FileItem {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <li
          class="sc-AxjAm eQxWaQ"
        >
          <svg
            aria-hidden="true"
            class="svg-inline--fa fa-file fa-w-12 sc-AxirZ bNgdUu"
            data-icon="file"
            data-prefix="fas"
            focusable="false"
            role="img"
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
              fill="currentColor"
            />
          </svg>
          <button
            aria-label="Remove File"
            class="sc-AxhCb elDDMr"
          >
            <svg
              aria-hidden="true"
              class="svg-inline--fa fa-trash-alt fa-w-14 "
              data-icon="trash-alt"
              data-prefix="fas"
              focusable="false"
              role="img"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                fill="currentColor"
              />
            </svg>
          </button>
          <div>
            testFile.pdf
          </div>
        </li>
      </div>
    `);
  });

  test("Check accessability", async () => {
    const { container } = render(
      <ul>
        <FileItem {...props} />
      </ul>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
