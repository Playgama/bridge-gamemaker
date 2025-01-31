// advertisement callbacks
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

function playgama_bridge_advertisement_check_adblock_callback(success, data) {
	if success {
		if data {
			// adblock detected
		}
	}
}


// game callbacks
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


// platform callbacks
function playgama_bridge_platform_get_server_time_callback(success, data) {
	if success {
		// your logic here
	}
}


// storage callbacks
function playgama_bridge_storage_get_callback(success, data) {
	if success {
		// single key
		if !is_undefined(data) {
			// your logic
		}
		
		// multiple keys
		var values = json_parse(data)
		if !is_undefined(values[0]) {
			// your logic
		}
		
	
		if !is_undefined(values[1]) {
			// your logic
		}
	}
}

function playgama_bridge_storage_set_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_storage_delete_callback(success) {
	if success {
		// your logic
	}
}