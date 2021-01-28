import "./Views.css"
import React, { useState } from "react";
import StreamList from "../components/StreamList"
import InfiniteScroll from "react-infinite-scroll-component";



const fetchData = async (cursor, count) => {
	const res = await fetch(`https://test.connect.booyah.live/api/v3/streams?cursor=${cursor}&count=${count}&lang=en`);
	const response = await res.json();
	return response;
};

function Streams() {
   	const [streamList, setStreamList] = useState([]);
	const [cursor, setCursor] = useState(0);
	const [hasMore, setHasMore] = useState(true);

    const loadData = (cursor, count) => {
    	fetchData(cursor, count).then((response) => {
			setCursor(response.cursor); 
			setHasMore(response.cursor !== 0); 
			setStreamList(streamList.concat(response.stream_list))
		})
    }

    React.useEffect(() => {
		loadData(0, 10)
	}, []);

	return (
		<InfiniteScroll
		dataLength={streamList.length}
		next={() => loadData(cursor, 10)}
		hasMore={hasMore}
		loader={<div class="title">wait pls</div>}
		>
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
			</div>
			<StreamList list={streamList}/>
		</InfiniteScroll>
	);
}


export default Streams;