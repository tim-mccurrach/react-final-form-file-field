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
