import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
	const data = useLoaderData();

	const { id } = useParams();
	// console.log(id);

	const [news, setNews] = useState({});

	useEffect(() => {
		const findNews = data.find((singleNews) => singleNews.id == id);
		setNews(findNews);
	}, [data, id]);

	return (
		<div className="w-11/12 mx-auto">
			<header className="py-3">
				<Header></Header>
			</header>
			<main className="grid grid-cols-12 gap-10">
				<section className="col-span-9">
					<h2 className="mb-4 font-bold">News Details</h2>
					<NewsDetailsCard news={news}></NewsDetailsCard>
				</section>
				<aside className="col-span-3">
					<RightAside></RightAside>
				</aside>
			</main>
		</div>
	);
};

export default NewsDetails;
