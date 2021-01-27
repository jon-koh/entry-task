import StreamList from "./StreamList"
import { Link } from "react-router-dom";

function StreamSection(props) {
	return (
		<div class="live-streams section">
		    <div class="header">
		        <span class="title">
		            <b>
		                Live StreamListams
		            </b>
		        </span>
		        <Link to="/streams" class="abcdef">
	                <button class="view-more">
	                    View More
	                </button>
	            </Link>
		    </div>
		    <br/>
	    	<StreamList list={props.data} count={props.count} />
		</div>
	);
}

export default StreamSection;