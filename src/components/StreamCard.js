import "./StreamCard.css"
import StreamCardThumbnail from "../169.png"

function StreamCard(props) {
	const index = props.id;
	console.log(index);
	// const title =props.stream.title;
	// const description = props.stream.description;
    return (
    	<div class="stream-card card">
		    <div class="stream-card-content">
		        <img alt="" class="stream-card-thumbnail" src="{StreamCardThumbnail}"/>
		        <div class="stream-card-details">
		            <span class="stream-card-details-title">
		                {index}
		            </span>
		            <br/>
		            <span class="stream-card-details-description">
		            	something
		            </span>
		        </div>
		    </div>
		</div>
	);
}

export default StreamCard;

