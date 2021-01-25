import "./Home.css"
import Carousel from "../components/Carousel"
import LiveStreams from "../components/LiveStreams"
import HotClips from "../components/HotClips"

function Home() {
    return (
    	<div class="content">
    		<Carousel />
    		<LiveStreams />
    		<HotClips />
    	</div>
	);
}

export default Home;