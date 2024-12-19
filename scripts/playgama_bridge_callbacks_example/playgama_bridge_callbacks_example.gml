// common callback
function playgama_bridge_callback(subtype, json_data) {
	
	if subtype == "advertisement_interstitial_state_changed" {
		switch json_data {
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
function playgama_bridge_advertisement_interstitial_state_changed(state) {
	switch state {
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

function playgama_bridge_advertisement_rewarded_state_changed(state) {
	switch state {
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

function playgama_bridge_advertisement_check_adblock_callback(result) {
	if result {
		// adblock detected
	}
}