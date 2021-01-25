import "./HotClips.css"
import StreamCard from "./StreamCard"

function HotClips() {
    return (
		<div class="hot-clips section">
		    <div class="header">
		        <span class="title">
		            <b>
		                Hot Clips
		            </b>
		        </span>
                <button class="view-more">
                    View More
                </button>
		    </div>
		    <br/>
		    <div class="stream-list section-list">	    	
			    <StreamCard />

			    <StreamCard />

			    <StreamCard />

			    <StreamCard />

			    <StreamCard />
		    </div>
		</div>
	);
}

export default HotClips;