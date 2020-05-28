/*istanbul ignore file*/
import React from "react";
import { Form } from "react-final-form";
import { arrayMutators } from "react-final-form-named-arrays";

const FormTemplate = (props) => (
	<Form
		onSubmit={props.onSubmit || (() => {})}
		mutators={arrayMutators}
		render={({ handleSubmit }) => (
			<form onSubmit={handleSubmit}>{props.children}</form>
		)}
	></Form>
);

export default FormTemplate;
