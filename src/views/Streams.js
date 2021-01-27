import "./Views.css"
import React from "react";
import StreamList from "../components/StreamList"
import { useAsync } from 'react-async';

const GetData = async () => 
	await fetch("https://test.connect.booyah.live/api/v3/streams?cursor=0&count=50&lang=en", {
		method: 'GET'
	})
	.then(response => (response.ok ? response : Promise.reject(response)))
	.then(response => response.json())

function Streams() {
  	const { data, error, isLoading } = useAsync({ promiseFn: GetData });
	if (isLoading) return "wait";
	if (error) return `died ${error.message}`;
	if (data) {
		return (
			<div class="stream-list section">
				<div class="header">
					<input type="text" placeholder="Search for a stream"/>
					<button class="view-more">
						Search
					</button>
				</div>
				<div class="header">
					<span class="title">
			            <b>
			                Live Streams
			            </b>
			        </span>
				</div>
				<StreamList list={data.stream_list}/>
			</div>
		);
	}
	return null;
}

export default Streams;