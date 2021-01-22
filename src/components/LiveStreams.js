// import "./LiveStreams.css"
import StreamCard from "./StreamCard"

function LiveStreams() {
    return (
		<div class="live-streams"><div class="header"><span class="title"><b>Live Streams</b></span><button class="view-more"><a>View More</a></button></div><br /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /></div>
	);
}

export default LiveStreams;