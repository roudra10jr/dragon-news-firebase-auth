import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
	const { logIn } = use(AuthContext);

	const location = useLocation();
	// console.log(location);

	const navigate = useNavigate();

	const [error, setError] = useState("");

	// handle sign in/log in:
	const handleLogIn = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		//	console.log({ email, password });

		// function call from api:
		logIn(email, password)
			.then((result) => {
				//console.log(result.user);
				navigate(`${location.state ? location.state : "/"}`);
			})
			.catch((error) => {
				console.log(error.message, error.code);
				setError(error.message);
			});
	};
	return (
		<div className="flex justify-center min-h-screen items-center">
			{" "}
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
				<h2 className="font-semibold text-xl text-center">
					Login in your account
				</h2>
				<form onSubmit={handleLogIn} className="card-body">
					<fieldset className="fieldset">
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
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-neutral mt-4">Login</button>

						<p className="font-semibold text-center pt-4">
							Don't Have an Account ?{" "}
							<Link
								className="text-secondary"
								to="/auth/register"
							>
								Register
							</Link>{" "}
						</p>
						{
							// error handling:
							error && (
								<p className="text-red-500 text-center py-3">
									{error}
								</p>
							)
						}
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Login;
