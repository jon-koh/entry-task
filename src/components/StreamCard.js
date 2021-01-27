import "./StreamCard.css"

function StreamCard(props) {
	const stream = props.stream; 
	const thumbnailSrc = stream.stream.snapshot || stream.channel.thumbnail;
	const title = stream.channel.name;
	const description = stream.channel.description;
	return (
    	<div class="stream-card card">
		    <div class="stream-card-content">
		        <img alt="" class="stream-card-thumbnail" src={thumbnailSrc}/>
		        <div class="stream-card-details">
		            <span class="stream-card-details-title">
		            	{title}
		            </span>
		            <br/>
		            <span class="stream-card-details-description">
		            	{description}
		            </span>
		        </div>
		    </div>
		</div>
	);
}

export default StreamCard;

