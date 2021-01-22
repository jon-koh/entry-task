// import "./StreamCard.css"
import StreamCardThumbnail from "../169.png"

function StreamCard() {
	const StreamCardDetailsTitle = "Join my stream";
	const StreamCardDetailsDescription = "Channel Name";
    return (
    	<div class="stream-card"><div class="stream-card-content"><img alt="" class="stream-card-thumbnail" src={StreamCardThumbnail} /><div class="stream-card-details"><span class="stream-card-details-title">{StreamCardDetailsTitle}</span><br /><span class="stream-card-details-description">{StreamCardDetailsDescription}</span></div></div></div>
	);
}

export default StreamCard;

