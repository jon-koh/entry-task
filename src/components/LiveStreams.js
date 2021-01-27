import "./LiveStreams.css"
import React from "react";
import StreamList from "./StreamList"
import {Link} from "react-router-dom"
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
			<div class="live-streams section">
			    <div class="header">
			        <span class="title">
			            <b>
			                Live Streams
			            </b>
			        </span>
			        <Link to="/streams" class="abcdef">
		                <button class="view-more">
		                    View More
		                </button>
		            </Link>
			    </div>
		    	<StreamList list={data.stream_list} count={count} />
			</div>			
		);
	}
	return null;
}

export default LiveStreams;