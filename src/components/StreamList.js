import StreamCard from "./StreamCard"

function StreamList(props) {
	const data = props.list;
	const count = props.count;
	let list = data;
	if (!!count) {
		list = list.slice(0, count)
	}
	return <div class = "stream-list section-list">{list.map((stream, index) => <StreamCard stream={stream} key={index} />)}</div>;
}

export default StreamList;