/*istanbul ignore file*/
import React from "react";
import { Form } from "react-final-form";
import { arrayMutators } from "react-final-form-named-arrays";

const FormTemplate = (props) => {
	const { onSubmit, ...otherProps } = props;

	return (
		<Form
			onSubmit={props.onSubmit || (() => {})}
			mutators={arrayMutators}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>{props.children}</form>
			)}
			{...otherProps}
		></Form>
	);
};

export default FormTemplate;
