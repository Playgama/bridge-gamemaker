/// @description Playgama Bridge Callbacks Example
show_debug_message(json_encode(async_load))

// common callback for every method
if async_load[? "type"] == "playgama_bridge_callback" {
	
	// check callback subtype
	if async_load[? "subtype"] == "advertisement_interstitial_state_changed" {
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
	
}

// direct advertisement callbacks
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
	if async_load[? "data"] == true {
		// adblock detected
	}
}


// direct game callbacks
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


// direct platform callbacks
if async_load[? "type"] == "playgama_bridge_platform_get_server_time_callback" {
	if async_load[? "data"] {
		// your logic here
	}
}