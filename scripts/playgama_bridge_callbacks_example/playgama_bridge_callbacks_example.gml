// common callback for every method
function playgama_bridge_callback(subtype, data) {
	
	show_debug_message("playgama_bridge_callback")
	show_debug_message(subtype)
	show_debug_message(data)
	
	// check subtype
	if subtype == "advertisement_interstitial_state_changed" {
		switch data {
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
function playgama_bridge_advertisement_interstitial_state_changed(data) {
	switch data {
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

function playgama_bridge_advertisement_rewarded_state_changed(data) {
	switch data {
		case "loading":
			// your logic here
			break
		case "opened":
			// your logic here
			break
		case "rewarded":
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

function playgama_bridge_advertisement_banner_state_changed(data) {
	switch data {
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

function playgama_bridge_advertisement_check_adblock_callback(data) {
	if data == true {
		// adblock detected
	}
}


// direct game callbacks
function playgama_bridge_game_visibility_state_changed(data) {
	switch data {
		case "visible":
			// your logic here
			break
		case "hidden":
			// your logic here
			break
	}
}


// direct platform callbacks
function playgama_bridge_platform_get_server_time_callback(data) {
	if data {
		// your logic here
	}
}


// direct storage callbacks
function playgama_bridge_storage_get_callback(data) {
	if data {
		// your logic here
	}
}