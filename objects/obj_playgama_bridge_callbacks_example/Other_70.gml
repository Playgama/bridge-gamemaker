/// @description Playgama Bridge Callbacks Example
show_debug_message(json_encode(async_load))

// advertisement callbacks
if async_load[? "type"] == "playgama_bridge_advertisement_interstitial_state_changed" {
	switch async_load[? "data"] {
		case "loading":
			// your logic here
			break
		case "opened":
			// your logic here
			break
		case "closed":
			// your logic here
			break
		case "failed":
			// your logic here
			break
	}
}

if async_load[? "type"] == "playgama_bridge_advertisement_rewarded_state_changed" {
	switch async_load[? "data"] {
		case "loading":
			// your logic here
			break
		case "opened":
			// your logic here
			break
		case "closed":
			// your logic here
			break
		case "failed":
			// your logic here
			break
	}
}

if async_load[? "type"] == "playgama_bridge_advertisement_banner_state_changed" {
	switch async_load[? "data"] {
		case "loading":
			// your logic here
			break
		case "shown":
			// your logic here
			break
		case "hidden":
			// your logic here
			break
		case "failed":
			// your logic here
			break
	}
}

if async_load[? "type"] == "playgama_bridge_advertisement_check_adblock_callback" {
	if async_load[? "success"] {
		if async_load[? "data"] {
			// adblock detected
		}
	}
}


// game callbacks
if async_load[? "type"] == "playgama_bridge_game_visibility_state_changed" {
	switch async_load[? "data"] {
		case "visible":
			// your logic here
			break
		case "hidden":
			// your logic here
			break
	}
}


// platform callbacks
if async_load[? "type"] == "playgama_bridge_platform_get_server_time_callback" {
	if async_load[? "success"] {
		if async_load[? "data"] {
			// your logic here
		}
	}
}


// storage callbacks
if async_load[? "type"] == "playgama_bridge_storage_get_callback" {
	if async_load[? "success"] {
		if async_load[? "data"] {
			// your logic here
		}
	}
}

if async_load[? "type"] == "playgama_bridge_storage_set_callback" {
	if async_load[? "success"] {
		// your logic here
	}
}

if async_load[? "type"] == "playgama_bridge_storage_delete_callback" {
	if async_load[? "success"] {
		// your logic here
	}
}


// player callbacks
if async_load[? "type"] == "playgama_bridge_player_authorize_callback" {
	if async_load[? "success"] {
		// your logic
	}
}


// social callbacks
if async_load[? "type"] == "playgama_bridge_social_share_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_social_join_community_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_social_invite_friends_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_social_create_post_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_social_add_to_favorites_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_social_add_to_home_screen_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_social_rate_callback" {
	if async_load[? "success"] {
		// your logic
	}
}


// leaderboard callbacks
if async_load[? "type"] == "playgama_bridge_leaderboard_set_score_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_leaderboard_get_score_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_leaderboard_get_entries_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_leaderboard_show_native_popup_callback" {
	if async_load[? "success"] {
		// your logic
	}
}


// achievements callbacks
if async_load[? "type"] == "playgama_bridge_achievements_unlock_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_achievements_get_list_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_achievements_show_native_popup_callback" {
	if async_load[? "success"] {
		// your logic
	}
}


// payments callbacks
if async_load[? "type"] == "playgama_bridge_payments_purchase_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_payments_consume_purchase_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_payments_get_catalog_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_payments_get_purchases_callback" {
	if async_load[? "success"] {
		// your logic
	}
}


// remote config callbacks
if async_load[? "type"] == "playgama_bridge_remote_config_get_callback" {
	if async_load[? "success"] {
		// your logic
	}
}