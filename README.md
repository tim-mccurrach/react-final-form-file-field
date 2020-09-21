# React Final Form File Field

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

---

Easily add a file upload field to your [`react-final-form`](https://final-form.org/react) form. FileField is agnostic about; how you store your files in the field, how you upload files, and how you display the files / uploader. But provides tools to make this easier.

### Installation

Update this when published

### Examples

[see Storybook](https://tim-mccurrach.github.io/react-final-form-file-field/?path=/story/example-using-hooks--file-list)

### Basic Usage

The `FilesField` registers a field array, and provides props to render your file uploader.

```
<Form onSubmit={onSubmit} mutators={arrayMutators}>
    {({ handleSubmit }) => (
	<form onSubmit={handleSubmit}>
	    <FilesField name="files" onFileLoad={onFileLoad}>
		{({ uploadFiles, files }) => (
		    <>
			// render uploader
			<button onClick={uploadFiles}>Upload Files</button>

			//render files
			{files.mapValues((file) => (<p>file</p>))}
		    </>
		)}
	    </FilesField>
	</form>
    )}
</Form>;
```

However you can also use the `useFilesField` hook to achieve just the same thing. You just have to make sure you render the input that is used under-the-cover, the hook provides everything you need to pass it though.

```
const MyFileUploader = ({fieldName, onFileLoad, config}) => {
    const { uploadFiles, inputProps, files } = useFilesField(
	fieldName,
	onFileAdd,
	config
    )
    return(
	<>
	    // this will be hidden
	    <input {...inputProps} />

	    // render uploader
	    <button onClick={uploadFiles}>Upload Files</button>

	    //render files
	    {files.mapValues((file) => (<p>file</p>))}
	</>
   )
}
```

### API

The API for `react-final-form-file-field` consists of 2 components (`FileItem` and `FilesField` and 1 hook (`useFilesField`).

#### `FileItem`

A component to represent a file. It selects the appropriate font-awesome icon based on the mime-type, and provides adds two buttons to delete and download the file.

Props:

-   fileName: (string) required.
-   removeFile: (function) required. An event handler that is passed to the delete buttons `onClick`. It should remove the file from the field.
-   downloadFile (string | function) optional. If `downloadFile` is a function, it will be called when the download file button is pressed. If `downloadFile` is a string, then the download button will be a link, and when clicked it will navigate to the value of `downloadFile`. If this prop is not supplied the download button will not be rendered.
-   inProgress: (bool) optional. If `true`, a progress bar will be displayed underneath the file (designed to show upload progress). If `inProgress` is true, then the `progress` prop must also be supplied.
-   `progress` : (number) optional. This should be a number between 0 and 100 representing the percentage to show on the progress bar.
-   mimeType: (string) optional. `FileItem` will attempt to display the most appropriate icon based on this value. If absent it will display a 'standard' file icon.

All other props will be passed to the `li` element that makes up `FileItem`.
