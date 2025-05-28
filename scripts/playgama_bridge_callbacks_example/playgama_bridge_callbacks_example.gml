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
		var is_adblock_detected = data
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
		var server_time = data
	}
}

function playgama_bridge_platform_get_all_games_callback(success, data) {
	if success {
		var games = json_parse(data)
	}
}

function playgama_bridge_platform_get_game_by_id_callback(success, data) {
	if success {
		var game = json_parse(data)
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


// player callbacks
function playgama_bridge_player_authorize_callback(success) {
	if success {
		// your logic
	}
}


// social callbacks
function playgama_bridge_social_share_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_social_join_community_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_social_invite_friends_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_social_create_post_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_social_add_to_favorites_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_social_add_to_home_screen_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_social_rate_callback(success) {
	if success {
		// your logic
	}
}


// leaderboard callbacks
function playgama_bridge_leaderboard_set_score_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_leaderboard_get_score_callback(success, data) {
	if success {
		var score_value = data
	}
}

function playgama_bridge_leaderboard_get_entries_callback(success, data) {
	if success {
		var entries = json_parse(data)
	}
}

function playgama_bridge_leaderboard_show_native_popup_callback(success) {
	if success {
		// your logic
	}
}


// achievements callbacks
function playgama_bridge_achievements_unlock_callback(success) {
	if success {
		// your logic
	}
}

function playgama_bridge_achievements_get_list_callback(success, data) {
	if success {
		var list = json_parse(data)
	}
}

function playgama_bridge_achievements_show_native_popup_callback(success) {
	if success {
		// your logic
	}
}


// payments callbacks
function playgama_bridge_payments_purchase_callback(success, data) {
	if success {
		var purchase = json_parse(data)
		var productId = purchase.id
		// your logic
	}
}

function playgama_bridge_payments_consume_purchase_callback(success, data) {
	if success {
		var purchase = json_parse(data)
		var productId = purchase.id
		// your logic
	}
}

function playgama_bridge_payments_get_catalog_callback(success, data) {
	if success {
		var catalog = json_parse(data)
		for (var i = 0; i < array_length(catalog); i += 1)
		{
		    var productId = catalog[i].id
			var price = catalog[i].price
			var priceCurrencyCode = catalog[i].priceCurrencyCode
			var priceValue = catalog[i].priceValue
		}
	}
}

function playgama_bridge_payments_get_purchases_callback(success, data) {
	if success {
		var purchases = json_parse(data)
		for (var i = 0; i < array_length(purchases); i += 1)
		{
		    var productId = purchases[i].id
		}
	}
}


// remote config callbacks
function playgama_bridge_remote_config_get_callback(success, data) {
	if success {
		var values = json_parse(data)
	}
}