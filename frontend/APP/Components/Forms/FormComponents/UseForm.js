import { useState, useEffect } from "react";

const useForm = () => {
	const [values, setValue] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		confirm_password: "",
		phone: "",
		gender: "",
	});

	const [errors, setError] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setValue({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		setError(validate(values));
		setIsSubmitting(true);
	};
	return { handleChange, values, handleSubmit, errors };
};
export default useForm;
