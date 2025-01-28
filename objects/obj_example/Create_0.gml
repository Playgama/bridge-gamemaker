playgama_bridge_platform_send_message("game_ready")

var keys = ["coins", "level"]
playgama_bridge_storage_get(json_stringify(keys))