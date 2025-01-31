playgama_bridge_platform_send_message("game_ready")

var keys = json_stringify(["coins", "level"])
playgama_bridge_storage_delete(keys)