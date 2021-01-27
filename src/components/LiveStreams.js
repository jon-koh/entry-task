import "./LiveStreams.css"
import React from "react";
import "../App.css"
import StreamSection from "./StreamSection"
import { useAsync } from 'react-async';

const GetData = async () => 
	await fetch("https://test.connect.booyah.live/api/v3/streams?cursor=0&count=50&lang=en", {
		method: 'GET'
	})
	.then(response => (response.ok ? response : Promise.reject(response)))
	.then(response => response.json())

function LiveStreams() {
	const count = 10;
  	const { data, error, isLoading } = useAsync({ promiseFn: GetData });
	if (isLoading) return "wait";
	if (error) return `died ${error.message}`;
	if (data) {
		return (
			<StreamSection count={count} data={data.stream_list}/>
		);
	}
	return "wait";
}

export default LiveStreams;