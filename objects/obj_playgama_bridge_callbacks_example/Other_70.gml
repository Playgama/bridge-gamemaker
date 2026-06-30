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
		var is_adblock_detected = async_load[? "data"]
	}
}


// platform callbacks
if async_load[? "type"] == "playgama_bridge_platform_audio_state_changed" {
	if async_load[? "data"] {
		// audio is enabled
	}
}

if async_load[? "type"] == "playgama_bridge_platform_pause_state_changed" {
	if async_load[? "data"] {
		// is paused
	}
}

if async_load[? "type"] == "playgama_bridge_platform_get_server_time_callback" {
	if async_load[? "success"] {
		var server_time = async_load[? "data"]
	}
}


// cross promo callbacks
if async_load[? "type"] == "playgama_bridge_cross_promo_get_games_callback" {
	if async_load[? "success"] {
		var games_list = json_parse(async_load[? "data"])
	}
}


// storage callbacks
if async_load[? "type"] == "playgama_bridge_storage_get_callback" {
	if async_load[? "success"] {
		var data = json_parse(async_load[? "data"])
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


// leaderboards callbacks
if async_load[? "type"] == "playgama_bridge_leaderboards_set_score_callback" {
	if async_load[? "success"] {
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_leaderboards_get_entries_callback" {
	if async_load[? "success"] {
		var entries = json_parse(async_load[? "data"])
	}
}

if async_load[? "type"] == "playgama_bridge_leaderboards_show_native_popup_callback" {
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

if async_load[? "type"] == "playgama_bridge_achievements_get_achievements_callback" {
	if async_load[? "success"] {
		var list = json_parse(async_load[? "data"])
	}
}


// payments callbacks
if async_load[? "type"] == "playgama_bridge_payments_purchase_callback" {
	if async_load[? "success"] {
		var purchase = json_parse(async_load[? "data"])
		var productId = purchase.id
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_payments_consume_purchase_callback" {
	if async_load[? "success"] {
		var purchase = json_parse(async_load[? "data"])
		var productId = purchase.id
		// your logic
	}
}

if async_load[? "type"] == "playgama_bridge_payments_get_catalog_callback" {
	if async_load[? "success"] {
		var catalog = json_parse(async_load[? "data"])
		for (var i = 0; i < array_length(catalog); i += 1)
		{
		    var productId = catalog[i].id
			var price = catalog[i].price
			var priceCurrencyCode = catalog[i].priceCurrencyCode
			var priceValue = catalog[i].priceValue
		}
	}
}

if async_load[? "type"] == "playgama_bridge_payments_get_purchases_callback" {
	if async_load[? "success"] {
		var purchases = json_parse(async_load[? "data"])
		for (var i = 0; i < array_length(purchases); i += 1)
		{
		    var productId = purchases[i].id
		}
	}
}


// remote config callbacks
if async_load[? "type"] == "playgama_bridge_remote_config_get_callback" {
	if async_load[? "success"] {
		var values = json_parse(async_load[? "data"])
	}
}


// tasks callbacks
if async_load[? "type"] == "playgama_bridge_tasks_get_tasks_callback" {
	if async_load[? "success"] {
		var tasks = json_parse(async_load[? "data"])
		for (var i = 0; i < array_length(tasks); i += 1)
		{
			var task = tasks[i]
			var taskId = task.id
			var taskType = task.type
			var completed = task.completed
			// task.targets[] = { id, amount, progress, completed }
			// task.rewards[] = { id, amount }
		}
	}
}

if async_load[? "type"] == "playgama_bridge_tasks_add_progress_callback" {
	if async_load[? "success"] {
		// progress added; call playgama_bridge_tasks_get_tasks() to refresh the list
	}
}

if async_load[? "type"] == "playgama_bridge_tasks_claim_reward_callback" {
	if async_load[? "success"] {
		// reward claimed; the rewards to grant are on the task (task.rewards from get_tasks)
	}
}


// daily rewards callbacks
if async_load[? "type"] == "playgama_bridge_daily_rewards_get_rewards_callback" {
	if async_load[? "success"] {
		var rewards = json_parse(async_load[? "data"])
		for (var i = 0; i < array_length(rewards); i += 1)
		{
			var reward_id = rewards[i]
		}
	}
}

if async_load[? "type"] == "playgama_bridge_daily_rewards_get_current_day_callback" {
	if async_load[? "success"] {
		// 0-based index of the reward the player is currently on
		var current_day = async_load[? "data"]
	}
}

if async_load[? "type"] == "playgama_bridge_daily_rewards_get_current_reward_callback" {
	if async_load[? "success"] {
		// id of the reward claimable today, or undefined when nothing can be claimed
		var current_reward = async_load[? "data"]
	}
}

if async_load[? "type"] == "playgama_bridge_daily_rewards_claim_current_reward_callback" {
	if async_load[? "success"] {
		// reward claimed; grant the current reward (id from get_current_reward)
	}
}