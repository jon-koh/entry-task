import "./LiveStreams.css"
import StreamCard from "./StreamCard"
import React from "react";
import { Link } from "react-router-dom";
import Home from "../views/Home";
import "../App.css"
import Streams from "../views/Streams"

function LiveStreams() {
	const response = {
	  "cursor": 123,
	  "stream_list": [
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 100,
	        "chatroom_id": 15,
	        "create_time": 1536292056,
	        "description": "lalalala",
	        "flag": 8,
	        "hostee": {
	          "channel_id": 1,
	          "create_time": 1536292056,
	          "follower_count": 100,
	          "nickname": "abc",
	          "thumbnail": "https://thumbnail.com/abc",
	          "update_time": 1536292056
	        },
	        "is_content_creator": true,
	        "is_enable_download_vod": true,
	        "is_enable_long_clip": true,
	        "is_enable_vod": true,
	        "is_streaming": true,
	        "is_verified_streamer": true,
	        "label_content": "Sample Content",
	        "label_name": "label_banner_other",
	        "last_gift_time": 1535612522,
	        "name": "channel name",
	        "offline_pic": "http://xxx.com/1.jpg",
	        "share_url": "http://xxx.com/1.jpg",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "http://xxx.com/1.jpg"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "http://xxx.com/1.jpg",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "http://xxx.com/1.jpg",
	          "post_bind_icon": "http://xxx.com/1.jpg",
	          "pre_bind_banner": "http://xxx.com/1.jpg",
	          "pre_bind_icon": "http://xxx.com/1.jpg",
	          "small_label": "http://xxx.com/1.jpg",
	          "web_post_bind_banner": "http://xxx.com/1.jpg",
	          "web_post_bind_icon": "http://xxx.com/1.jpg",
	          "web_pre_bind_banner": "http://xxx.com/1.jpg",
	          "web_pre_bind_icon": "http://xxx.com/1.jpg"
	        },
	        "lucky_draw_info": {
	          "count_down_time": 300,
	          "round_info": {
	            "channel_id": 100,
	            "create_time": 160234903423,
	            "criteria": 1,
	            "item_uniq": "ff_diamond",
	            "mode": 1,
	            "quantity": 1,
	            "round_id": 1,
	            "status": 0,
	            "update_time": 160234903423,
	            "winner_amount": 20
	          }
	        },
	        "mirror_list": [
	          {
	            "name": "akamai",
	            "url_domain": "https://brdatamambet-a.akamaihd.net"
	          }
	        ],
	        "snapshot": "http://xxx.com/1.jpg",
	        "snapshot_webp": "http://xxx.com/1.webp",
	        "stream_addr_list": [
	          {
	            "resolution": "1080",
	            "url_path": "/hls/17206/10.m3u8"
	          }
	        ],
	        "tag_uniq": "simple_tag",
	        "update_time": 1535612522,
	        "viewer_count": 102,
	        "viewer_count_info": [
	          {
	            "live_views": 1000,
	            "platform": "twitch"
	          }
	        ]
	      },
	      "user": {
	        "age": 13,
	        "birthday": 1600661907,
	        "birthday_next_update_time": 1578467643,
	        "clan_id": 1,
	        "follow_time": 1535612522,
	        "followed_time": 1535612522,
	        "follower_count": 100,
	        "following_count": 100,
	        "gender": 0,
	        "gender_next_update_time": 1578467643,
	        "nickname": "abc123",
	        "nickname_next_update_time": 1578467643,
	        "notification": 1,
	        "platform": 3,
	        "thumbnail": "http://xxx.com/1.jpg",
	        "uid": 10001
	      }
	    }
	  ],
	  "version": 1552119405
	};
	const data = Array(100).fill(response);
	const count = 10;
    return (
		<div class="live-streams section">
		    <div class="header">
		        <span class="title">
		            <b>
		                Live Streams
		            </b>
		        </span>
		        <Link to="/streams" class="abcdef">
                    <button class="view-more">
                        View More
                    </button>
                </Link>
		    </div>
		    <br/>
		    <div class="stream-list section-list">	
	     	{
	     		data.slice(0, count).map((stream, index) => <StreamCard stream={response} id={index}/>)
	     	}  	    
		    </div>
		</div>
	);
}

export default LiveStreams;