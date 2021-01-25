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
	        "channel_id": 0,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 1,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 2,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 3,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 4,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 5,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 6,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 7,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 8,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 9,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 10,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 11,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 12,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 13,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 14,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 15,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	    {
	      "channel": {
	        "alias": "king",
	        "channel_id": 16,
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
	        "name": "jkzy", //"channel name"
	        "offline_pic": "https://picsum.photos/160/90",
	        "share_url": "https://picsum.photos/160/90",
	        "social_links": [
	          {
	            "channel_id": 1,
	            "link": "https://facebook.com",
	            "platform": "facebook/instagram/twitter/youtube"
	          }
	        ],
	        "thumbnail": "https://picsum.photos/160/90"
	      },
	      "stream": {
	        "create_time": 1535612522,
	        "default_mirror": "string",
	        "encoder": "Anroid Encoder",
	        "game_build_id": 1,
	        "lootdrop_info": {
	          "account_id": "sg_12873182738172",
	          "big_label": "https://picsum.photos/160/90",
	          "login_url": "https://partner.ff.garena.com/mambet",
	          "name": "FreeFire World Cup",
	          "post_bind_banner": "https://picsum.photos/160/90",
	          "post_bind_icon": "https://picsum.photos/160/90",
	          "pre_bind_banner": "https://picsum.photos/160/90",
	          "pre_bind_icon": "https://picsum.photos/160/90",
	          "small_label": "https://picsum.photos/160/90",
	          "web_post_bind_banner": "https://picsum.photos/160/90",
	          "web_post_bind_icon": "https://picsum.photos/160/90",
	          "web_pre_bind_banner": "https://picsum.photos/160/90",
	          "web_pre_bind_icon": "https://picsum.photos/160/90"
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
	        "snapshot": "https://picsum.photos/160/90",
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
	        "thumbnail": "https://picsum.photos/160/90",
	        "uid": 10001
	      }
	    },
	  ],
	  "version": 1552119405
	};
	const data = response.stream_list;
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
	     		data.slice(0, count).map((stream, index) => <StreamCard stream={stream} key={index} />)
	     	}  	    
		    </div>
		</div>
	);
}

export default LiveStreams;