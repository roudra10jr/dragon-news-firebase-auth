import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
	// call the context api to :
	const { createUser, setUser, updateUser } = use(AuthContext);

	//when a new user registered then automatically navigate to home;
	const navigate = useNavigate();

	// handle register on submit:
	const handleRegister = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const photo = e.target.photo.value;
		const email = e.target.email.value;
		const password = e.target.password.value;

		//console.log({ name, photo, email, password });

		// sign up/register :
		createUser(email, password)
			.then((result) => {
				// console.log(result.user);
				const user = result.user;
				updateUser({ displayName: name, photoURL: photo })
					.then(() => {
						setUser({
							...user,
							displayName: name,
							photoURL: photo,
						});

						navigate("/");
					})
					.catch((error) => {
						console.log(error);
						setUser(user);
					});
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div className="flex justify-center min-h-screen items-center">
			{" "}
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
				<h2 className="font-semibold text-xl text-center">
					Register in your account
				</h2>
				<form onSubmit={handleRegister} className="card-body">
					<fieldset className="fieldset">
						{/* name */}
						<label className="label">Name</label>
						<input
							type="text"
							className="input"
							name="name"
							placeholder="Your Name"
							required
						/>

						{/* photo URL */}
						<label className="label">Photo URL</label>
						<input
							type="text"
							className="input"
							name="photo"
							placeholder="Photo URL"
							required
						/>

						{/* email */}
						<label className="label">Email</label>
						<input
							type="email"
							className="input"
							name="email"
							placeholder="Email"
							required
						/>

						{/* password */}
						<label className="label">Password</label>
						<input
							type="password"
							className="input"
							name="password"
							placeholder="Password"
							required
						/>

						<button className="btn btn-neutral mt-4">
							Register
						</button>

						<p className="font-semibold text-center pt-4">
							Already Have an Account ?{" "}
							<Link className="text-secondary" to="/auth/login">
								Login
							</Link>{" "}
						</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Register;
