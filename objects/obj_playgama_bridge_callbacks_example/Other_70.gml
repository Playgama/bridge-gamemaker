/// @description Playgama Bridge Callbacks
show_debug_message(json_encode(async_load))

// common callback
if async_load[? "type"] == "playgama_bridge_callback" {
	
	// advertisement callbacks
	if async_load[? "subtype"] == "advertisement_interstitial_state_changed" {
		switch async_load[? "state"] {
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

// advertisement callbacks
if async_load[? "type"] == "playgama_bridge_advertisement_interstitial_state_changed" {
	switch async_load[? "state"] {
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
	switch async_load[? "state"] {
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

if async_load[? "type"] == "playgama_bridge_advertisement_check_adblock_callback" {
	if async_load[? "data"] {
		// adblock detected
	}
}