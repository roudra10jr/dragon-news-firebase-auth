import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
	//console.log(news);

	const { title, details, image_url, category_id } = news;

	return (
		<div>
			<div className="bg-base-100 rounded-xl shadow-sm  p-4 md:p-6">
				{/* Image */}
				<div className="mb-4">
					<img
						src={image_url}
						alt={title}
						className="w-full h-[320px] object-cover rounded-lg border"
					/>
				</div>

				{/* Title */}
				<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
					{title}
				</h2>

				{/* Details */}
				<p className="text-gray-700 leading-relaxed mb-6">{details}</p>

				{/* Button */}
				<Link
					to={`/category/${category_id}`}
					className="btn btn-secondary"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					All news in this category
				</Link>
			</div>
		</div>
	);
};

export default NewsDetailsCard;
