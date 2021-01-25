import StreamCard from "./StreamCard"

function StreamList(props) {
	const data = props.list;
	console.log("hi");
	console.log(data);
	const count = props.count;
	if (!!count) {
		return data.slice(0, count).map((stream, index) => <StreamCard stream={stream} key={index} />)
	}
	else {
		return data.map((stream, index) => <StreamCard stream={stream} key={index} />)
	}
}

export default StreamList;