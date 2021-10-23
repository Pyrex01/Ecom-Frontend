export default function validate(values) {
	let errors = {};

	// first name
	if (!values.first_name.trim()) {
		errors.first_name = "First Name Required";
	}
	// last name
	if (!values.last_name.trim()) {
		errors.last_name = "Last Name Required";
	}
	// email
	if (!values.email.trim()) {
		errors.email = "Email Required";
	} else if (
		!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)
	) {
		errors.email = "Email id is invalid";
	}
	// Phone
	if (values.phone) {
		errors.phone = "Phone number is required";
	} else if (
		!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
			values.phone,
		)
	) {
		errors.phone = " Phone Number is not valid";
	}
	// gender
	if (values.gender) {
		errors.gender = "gender is not valid";
	}
	//password
	if (!values.password.trim()) {
		errors.password = "Password Required";
	} else if (values.password.length < 8) {
		errors.password = "Password needs at least 8 characters";
	}
	// confirm password
	if (values.confirm_password) {
		errors.confirm_password = "Confirm Password Required";
	} else if (values.confirm_password !== values.password) {
		errors.confirm_password = "Password does not match";
	}
	// photo
	if (values.photo) {
		errors.photo = "Enter your photo here";
	}
}
