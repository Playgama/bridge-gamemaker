bridge.advertisement.on(
    bridge.EVENT_NAME.INTERSTITIAL_STATE_CHANGED,
    (state) => {
        sendStateToGameMaker('advertisement_interstitial_state', state)
    })

bridge.advertisement.on(
    bridge.EVENT_NAME.REWARDED_STATE_CHANGED,
    (state) => {
        sendStateToGameMaker('advertisement_rewarded_state', state)
    })

bridge.advertisement.on(
    bridge.EVENT_NAME.BANNER_STATE_CHANGED,
    (state) => {
        sendStateToGameMaker('advertisement_banner_state', state)
    })

bridge.advertisement.on(
    bridge.EVENT_NAME.ADVANCED_BANNERS_STATE_CHANGED,
    (state) => {
        sendStateToGameMaker('advertisement_advanced_banners_state', state)
    })

bridge.platform.on(
    bridge.EVENT_NAME.AUDIO_STATE_CHANGED,
    (isEnabled) => {
        sendStateToGameMaker('platform_audio_state', isEnabled)
    })

bridge.platform.on(
    bridge.EVENT_NAME.PAUSE_STATE_CHANGED,
    (isPaused) => {
        sendStateToGameMaker('platform_pause_state', isPaused)
    })

// multiplayer events are forwarded as playgama_bridge_<event name>;
// skipped when the bundled core has no multiplayer module
if (bridge.multiplayer) {
    [
        bridge.EVENT_NAME.MULTIPLAYER_STATE_CHANGED,
        bridge.EVENT_NAME.MULTIPLAYER_ROOM_LEFT,
        bridge.EVENT_NAME.MULTIPLAYER_ROOM_UPDATED,
        bridge.EVENT_NAME.MULTIPLAYER_PLAYER_JOINED,
        bridge.EVENT_NAME.MULTIPLAYER_PLAYER_LEFT,
        bridge.EVENT_NAME.MULTIPLAYER_PLAYER_UPDATED,
        bridge.EVENT_NAME.MULTIPLAYER_HOST_CHANGED,
        bridge.EVENT_NAME.MULTIPLAYER_MESSAGE_RECEIVED,
        bridge.EVENT_NAME.MULTIPLAYER_SYNC_STATE_RECEIVED,
    ].forEach((eventName) => {
        bridge.multiplayer.on(eventName, (data) => {
            sendEventToGameMaker(eventName, data)
        })
    })
}


// advertisement
function playgamaBridgeAdvertisementShowInterstitial(placement) {
    window.bridge.advertisement.showInterstitial(placement)
}

function playgamaBridgeAdvertisementShowRewarded(placement) {
    window.bridge.advertisement.showRewarded(placement)
}

function playgamaBridgeAdvertisementInterstitialState() {
    return window.bridge.advertisement.interstitialState
}

function playgamaBridgeAdvertisementRewardedState() {
    return window.bridge.advertisement.rewardedState
}

function playgamaBridgeAdvertisementRewardedPlacement() {
    return window.bridge.advertisement.rewardedPlacement
}

function playgamaBridgeAdvertisementIsBannerSupported() {
    return serializeData(window.bridge.advertisement.isBannerSupported)
}

function playgamaBridgeAdvertisementIsInterstitialSupported() {
    return serializeData(window.bridge.advertisement.isInterstitialSupported)
}

function playgamaBridgeAdvertisementIsRewardedSupported() {
    return serializeData(window.bridge.advertisement.isRewardedSupported)
}

function playgamaBridgeAdvertisementMinimumDelayBetweenInterstitial() {
    return window.bridge.advertisement.minimumDelayBetweenInterstitial
}

function playgamaBridgeAdvertisementSetMinimumDelayBetweenInterstitial(value) {
    window.bridge.advertisement.setMinimumDelayBetweenInterstitial(value)
}

function playgamaBridgeAdvertisementShowBanner(position, placement) {
    window.bridge.advertisement.showBanner(position, placement)
}

function playgamaBridgeAdvertisementHideBanner() {
    window.bridge.advertisement.hideBanner()
}

function playgamaBridgeAdvertisementBannerState() {
    return window.bridge.advertisement.bannerState
}

function playgamaBridgeAdvertisementIsAdvancedBannersSupported() {
    return serializeData(window.bridge.advertisement.isAdvancedBannersSupported)
}

function playgamaBridgeAdvertisementAdvancedBannersState() {
    return window.bridge.advertisement.advancedBannersState
}

function playgamaBridgeAdvertisementShowAdvancedBanners(placement) {
    window.bridge.advertisement.showAdvancedBanners(placement)
}

function playgamaBridgeAdvertisementHideAdvancedBanners() {
    window.bridge.advertisement.hideAdvancedBanners()
}

function playgamaBridgeAdvertisementCheckAdblock() {
    window.bridge.advertisement.checkAdBlock()
        .then((data) => {
            sendCallbackToGameMaker('advertisement_check_adblock', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('advertisement_check_adblock', false)
        })
}


// platform
function playgamaBridgePlatformId() {
    return window.bridge.platform.id
}

function playgamaBridgePlatformLanguage() {
    return window.bridge.platform.language
}

function playgamaBridgePlatformPayload() {
    return serializeData(window.bridge.platform.payload)
}

function playgamaBridgePlatformTld() {
    return serializeData(window.bridge.platform.tld)
}

function playgamaBridgePlatformLaunchSource() {
    return serializeData(window.bridge.platform.launchSource)
}

function playgamaBridgePlatformData() {
    return serializeData(window.bridge.platform.data)
}

function playgamaBridgePlatformSendMessage(message, options) {
    var parsed = {}
    try { parsed = JSON.parse(options) } catch (e) {}
    window.bridge.platform.sendMessage(message, parsed)
}

function playgamaBridgePlatformSendCustomMessage(id, options) {
    var parsed = {}
    try { parsed = JSON.parse(options) } catch (e) {}
    window.bridge.platform.sendCustomMessage(id, parsed)
}

function playgamaBridgePlatformIsAudioEnabled() {
    return serializeData(window.bridge.platform.isAudioEnabled)
}

function playgamaBridgePlatformIsPaused() {
    return serializeData(window.bridge.platform.isPaused)
}

function playgamaBridgePlatformGetServerTime() {
    window.bridge.platform.getServerTime()
        .then((data) => {
            sendCallbackToGameMaker('platform_get_server_time', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('platform_get_server_time', false)
        })
}

function playgamaBridgePlatformIsExternalCallsSupported() {
    return serializeData(window.bridge.platform.isExternalCallsSupported)
}


// cross promo
function playgamaBridgeCrossPromoGetGames() {
    window.bridge.crossPromo.getGames()
        .then((data) => {
            sendCallbackToGameMaker('cross_promo_get_games', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('cross_promo_get_games', false)
        })
}

function playgamaBridgeCrossPromoShow() {
    window.bridge.crossPromo.show()
}

function playgamaBridgeCrossPromoHide() {
    window.bridge.crossPromo.hide()
}

function playgamaBridgeCrossPromoIsVisible() {
    return serializeData(window.bridge.crossPromo.isVisible)
}

// tasks
function playgamaBridgeTasksGetTasks() {
    window.bridge.tasks.getTasks()
        .then((data) => {
            sendCallbackToGameMaker('tasks_get_tasks', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('tasks_get_tasks', false)
        })
}

function playgamaBridgeTasksAddProgress(metric, amount) {
    window.bridge.tasks.addProgress(metric, amount)
        .then(() => {
            sendCallbackToGameMaker('tasks_add_progress', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('tasks_add_progress', false)
        })
}

function playgamaBridgeTasksClaimReward(taskId) {
    window.bridge.tasks.claimReward(taskId)
        .then((claimed) => {
            // claimed is a boolean: whether the reward was claimed
            sendCallbackToGameMaker('tasks_claim_reward', claimed)
        })
        .catch(() => {
            sendCallbackToGameMaker('tasks_claim_reward', false)
        })
}


// daily rewards
function playgamaBridgeDailyRewardsGetRewards() {
    window.bridge.dailyRewards.getRewards()
        .then((data) => {
            sendCallbackToGameMaker('daily_rewards_get_rewards', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('daily_rewards_get_rewards', false)
        })
}

function playgamaBridgeDailyRewardsGetCurrentDay() {
    window.bridge.dailyRewards.getCurrentDay()
        .then((data) => {
            sendCallbackToGameMaker('daily_rewards_get_current_day', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('daily_rewards_get_current_day', false)
        })
}

function playgamaBridgeDailyRewardsGetCurrentReward() {
    window.bridge.dailyRewards.getCurrentReward()
        .then((data) => {
            sendCallbackToGameMaker('daily_rewards_get_current_reward', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('daily_rewards_get_current_reward', false)
        })
}

function playgamaBridgeDailyRewardsClaimCurrentReward() {
    window.bridge.dailyRewards.claimCurrentReward()
        .then((claimed) => {
            // claimed is a boolean: whether the reward was claimed
            sendCallbackToGameMaker('daily_rewards_claim_current_reward', claimed)
        })
        .catch(() => {
            sendCallbackToGameMaker('daily_rewards_claim_current_reward', false)
        })
}


// notifications
function playgamaBridgeNotificationsIsSupported() {
    return serializeData(window.bridge.notifications.isSupported)
}

function playgamaBridgeNotificationsSchedule(notification) {
    try {
        notification = JSON.parse(notification)
    }
    catch (e) {}

    window.bridge.notifications.schedule(notification)
        .then(() => {
            sendCallbackToGameMaker('notifications_schedule', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('notifications_schedule', false)
        })
}

function playgamaBridgeNotificationsCancel(id) {
    window.bridge.notifications.cancel(id)
        .then(() => {
            sendCallbackToGameMaker('notifications_cancel', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('notifications_cancel', false)
        })
}

function playgamaBridgeNotificationsCancelAll() {
    window.bridge.notifications.cancelAll()
        .then(() => {
            sendCallbackToGameMaker('notifications_cancel_all', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('notifications_cancel_all', false)
        })
}


// storage
function playgamaBridgeStorageSet(key, value) {
    try {
        key = JSON.parse(key)
        value = JSON.parse(value)
    }
    catch (e) {}

    window.bridge.storage.set(key, value)
        .then(() => {
            sendCallbackToGameMaker('storage_set', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_set', false)
        })
}

function playgamaBridgeStorageGet(key) {
    try {
        key = JSON.parse(key)
    }
    catch (e) {}

    window.bridge.storage.get(key, false)
        .then((data) => {
            sendCallbackToGameMaker('storage_get', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_get', false)
        })
}

function playgamaBridgeStorageDelete(key) {
    try {
        key = JSON.parse(key)
    }
    catch (e) {}

    window.bridge.storage.delete(key)
        .then(() => {
            sendCallbackToGameMaker('storage_delete', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_delete', false)
        })
}


// device
function playgamaBridgeDeviceType() {
    return window.bridge.device.type
}


// player
function playgamaBridgePlayerIsAuthorizationSupported() {
    return serializeData(window.bridge.player.isAuthorizationSupported)
}

function playgamaBridgePlayerIsAuthorized() {
    return serializeData(window.bridge.player.isAuthorized)
}

function playgamaBridgePlayerIsGuest() {
    return serializeData(window.bridge.player.isGuest)
}

function playgamaBridgePlayerId() {
    return serializeData(window.bridge.player.id)
}

function playgamaBridgePlayerName() {
    return serializeData(window.bridge.player.name)
}

function playgamaBridgePlayerExtra() {
    return serializeData(window.bridge.player.extra)
}

function playgamaBridgePlayerPhotos() {
    return serializeData(window.bridge.player.photos)
}

function playgamaBridgePlayerAuthorize(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.player.authorize(options)
        .then(() => {
            sendCallbackToGameMaker('player_authorize', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('player_authorize', false)
        })
}


// social
function playgamaBridgeSocialIsShareSupported() {
    return serializeData(window.bridge.social.isShareSupported)
}

function playgamaBridgeSocialShare(id) {
    window.bridge.social.share(id || undefined)
        .then(() => {
            sendCallbackToGameMaker('social_share', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_share', false)
        })
}

function playgamaBridgeSocialIsJoinCommunitySupported() {
    return serializeData(window.bridge.social.isJoinCommunitySupported)
}

function playgamaBridgeSocialJoinCommunity() {
    window.bridge.social.joinCommunity()
        .then(() => {
            sendCallbackToGameMaker('social_join_community', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_join_community', false)
        })
}

function playgamaBridgeSocialIsInviteFriendsSupported() {
    return serializeData(window.bridge.social.isInviteFriendsSupported)
}

function playgamaBridgeSocialInviteFriends(id) {
    window.bridge.social.inviteFriends(id || undefined)
        .then(() => {
            sendCallbackToGameMaker('social_invite_friends', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_invite_friends', false)
        })
}

function playgamaBridgeSocialIsCreatePostSupported() {
    return serializeData(window.bridge.social.isCreatePostSupported)
}

function playgamaBridgeSocialCreatePost(id, payload) {
    window.bridge.social.createPost(id || undefined, payload || undefined)
        .then(() => {
            sendCallbackToGameMaker('social_create_post', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_create_post', false)
        })
}

function playgamaBridgeSocialIsAddToFavoritesSupported() {
    return serializeData(window.bridge.social.isAddToFavoritesSupported)
}

function playgamaBridgeSocialAddToFavorites() {
    window.bridge.social.addToFavorites()
        .then(() => {
            sendCallbackToGameMaker('social_add_to_favorites', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_add_to_favorites', false)
        })
}

function playgamaBridgeSocialIsAddToHomeScreenSupported() {
    return serializeData(window.bridge.social.isAddToHomeScreenSupported)
}

function playgamaBridgeSocialAddToHomeScreen() {
    window.bridge.social.addToHomeScreen()
        .then(() => {
            sendCallbackToGameMaker('social_add_to_home_screen', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_add_to_home_screen', false)
        })
}

function playgamaBridgeSocialIsRateSupported() {
    return serializeData(window.bridge.social.isRateSupported)
}

function playgamaBridgeSocialRate() {
    window.bridge.social.rate()
        .then(() => {
            sendCallbackToGameMaker('social_rate', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_rate', false)
        })
}

function playgamaBridgeSocialIsPostRewardSupported() {
    return serializeData(window.bridge.social.isPostRewardSupported)
}

function playgamaBridgeSocialGetPostReward() {
    window.bridge.social.getPostReward()
        .then((data) => {
            sendCallbackToGameMaker('social_get_post_reward', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('social_get_post_reward', false)
        })
}

function playgamaBridgePlatformIsExternalLinksAllowed() {
    return serializeData(window.bridge.platform.isExternalLinksAllowed)
}


// leaderboards
function playgamaBridgeLeaderboardsType() {
    return serializeData(window.bridge.leaderboards.type)
}

function playgamaBridgeLeaderboardsSetScore(id, score) {
    window.bridge.leaderboards.setScore(id, score)
        .then(() => {
            sendCallbackToGameMaker('leaderboards_set_score', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('leaderboards_set_score', false)
        })
}

function playgamaBridgeLeaderboardsGetEntries(id) {
    window.bridge.leaderboards.getEntries(id)
        .then((data) => {
            sendCallbackToGameMaker('leaderboards_get_entries', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('leaderboards_get_entries', false)
        })
}

function playgamaBridgeLeaderboardsShowNativePopup(id) {
    window.bridge.leaderboards.showNativePopup(id)
        .then(() => {
            sendCallbackToGameMaker('leaderboards_show_native_popup', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('leaderboards_show_native_popup', false)
        })
}


// achievements
function playgamaBridgeAchievementsUnlock(id) {
    window.bridge.achievements.unlock(id)
        .then(() => {
            sendCallbackToGameMaker('achievements_unlock', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('achievements_unlock', false)
        })
}

function playgamaBridgeAchievementsGetAchievements() {
    window.bridge.achievements.getAchievements()
        .then((data) => {
            sendCallbackToGameMaker('achievements_get_achievements', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('achievements_get_achievements', false)
        })
}

// payments
function playgamaBridgePaymentsIsSupported() {
    return serializeData(window.bridge.payments.isSupported)
}

function playgamaBridgePaymentsPurchase(id, options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.payments.purchase(id, options)
        .then((data) => {
            sendCallbackToGameMaker('payments_purchase', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('payments_purchase', false)
        })
}

function playgamaBridgePaymentsConsumePurchase(id) {
    window.bridge.payments.consumePurchase(id)
        .then((data) => {
            sendCallbackToGameMaker('payments_consume_purchase', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('payments_consume_purchase', false)
        })
}

function playgamaBridgePaymentsGetCatalog() {
    window.bridge.payments.getCatalog()
        .then((data) => {
            sendCallbackToGameMaker('payments_get_catalog', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('payments_get_catalog', false)
        })
}

function playgamaBridgePaymentsGetPurchases() {
    window.bridge.payments.getPurchases()
        .then((data) => {
            sendCallbackToGameMaker('payments_get_purchases', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('payments_get_purchases', false)
        })
}


// remote config
function playgamaBridgeRemoteConfigIsSupported() {
    return serializeData(window.bridge.remoteConfig.isSupported)
}

function playgamaBridgeRemoteConfigSetContext(parameters) {
    try {
        parameters = JSON.parse(parameters)
    }
    catch (e) {}

    window.bridge.remoteConfig.setContext(parameters)
}

function playgamaBridgeRemoteConfigGet() {
    window.bridge.remoteConfig.get()
        .then((data) => {
            sendCallbackToGameMaker('remote_config_get', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('remote_config_get', false)
        })
}


// analytics
// The event name and the data are entirely up to the game — they are never
// matched against the SDK's own event names.
function playgamaBridgeAnalyticsSend(eventName, data) {
    var parsed = {}
    try { parsed = JSON.parse(data) } catch (e) {}
    window.bridge.analytics.send(eventName, parsed)
}


// multiplayer
function playgamaBridgeMultiplayerIsSupported() {
    return serializeData(window.bridge.multiplayer.isSupported)
}

function playgamaBridgeMultiplayerState() {
    return window.bridge.multiplayer.state
}

function playgamaBridgeMultiplayerIsInRoom() {
    return serializeData(window.bridge.multiplayer.isInRoom)
}

function playgamaBridgeMultiplayerIsHost() {
    return serializeData(window.bridge.multiplayer.isHost)
}

function playgamaBridgeMultiplayerPlayerId() {
    return serializeData(window.bridge.multiplayer.playerId)
}

function playgamaBridgeMultiplayerHostId() {
    return serializeData(window.bridge.multiplayer.hostId)
}

function playgamaBridgeMultiplayerRoomId() {
    return serializeData(window.bridge.multiplayer.roomId)
}

function playgamaBridgeMultiplayerRoom() {
    return serializeData(window.bridge.multiplayer.room)
}

function playgamaBridgeMultiplayerPlayers() {
    return serializeData(window.bridge.multiplayer.players)
}

function playgamaBridgeMultiplayerIsInviteSupported() {
    return serializeData(window.bridge.multiplayer.isInviteSupported)
}

function playgamaBridgeMultiplayerLaunchRoomId() {
    return serializeData(window.bridge.multiplayer.launchRoomId)
}

function playgamaBridgeMultiplayerSyncState() {
    return serializeData(window.bridge.multiplayer.syncState)
}

// failed operation callbacks carry the error code (e.g. MULTIPLAYER_ROOM_FULL) as data
function playgamaBridgeMultiplayerCreateRoom(options) {
    var parsed = {}
    try { parsed = JSON.parse(options) } catch (e) {}

    window.bridge.multiplayer.createRoom(parsed)
        .then((roomId) => {
            sendCallbackToGameMaker('multiplayer_create_room', true, roomId)
        })
        .catch((error) => {
            sendCallbackToGameMaker('multiplayer_create_room', false, error && error.code)
        })
}

function playgamaBridgeMultiplayerJoinRoom(roomId, options) {
    var parsed = {}
    try { parsed = JSON.parse(options) } catch (e) {}

    window.bridge.multiplayer.joinRoom(roomId, parsed)
        .then(() => {
            sendCallbackToGameMaker('multiplayer_join_room', true)
        })
        .catch((error) => {
            sendCallbackToGameMaker('multiplayer_join_room', false, error && error.code)
        })
}

function playgamaBridgeMultiplayerJoinOrCreateRoom(options) {
    var parsed = {}
    try { parsed = JSON.parse(options) } catch (e) {}

    window.bridge.multiplayer.joinOrCreateRoom(parsed)
        .then((roomId) => {
            sendCallbackToGameMaker('multiplayer_join_or_create_room', true, roomId)
        })
        .catch((error) => {
            sendCallbackToGameMaker('multiplayer_join_or_create_room', false, error && error.code)
        })
}

function playgamaBridgeMultiplayerGetRooms(options) {
    var parsed = {}
    try { parsed = JSON.parse(options) } catch (e) {}

    window.bridge.multiplayer.getRooms(parsed)
        .then((data) => {
            sendCallbackToGameMaker('multiplayer_get_rooms', true, data)
        })
        .catch((error) => {
            sendCallbackToGameMaker('multiplayer_get_rooms', false, error && error.code)
        })
}

function playgamaBridgeMultiplayerInviteToRoom(options) {
    var parsed = {}
    try { parsed = JSON.parse(options) } catch (e) {}

    window.bridge.multiplayer.inviteToRoom(parsed)
        .then((data) => {
            sendCallbackToGameMaker('multiplayer_invite_to_room', true, data)
        })
        .catch((error) => {
            sendCallbackToGameMaker('multiplayer_invite_to_room', false, error && error.code)
        })
}

function playgamaBridgeMultiplayerLeaveRoom() {
    window.bridge.multiplayer.leaveRoom()
}

function playgamaBridgeMultiplayerSetRoomOpen(isOpen) {
    window.bridge.multiplayer.setRoomOpen(Boolean(isOpen))
}

function playgamaBridgeMultiplayerSetRoomVisible(isVisible) {
    window.bridge.multiplayer.setRoomVisible(Boolean(isVisible))
}

function playgamaBridgeMultiplayerSetRoomProperties(properties) {
    var parsed = {}
    try { parsed = JSON.parse(properties) } catch (e) {}
    window.bridge.multiplayer.setRoomProperties(parsed)
}

function playgamaBridgeMultiplayerSetPlayerProperties(properties) {
    var parsed = {}
    try { parsed = JSON.parse(properties) } catch (e) {}
    window.bridge.multiplayer.setPlayerProperties(parsed)
}

// data: any JSON (a non-JSON string is sent as is);
// target: 'all' / 'others' / 'host' / player id / JSON array of player ids, empty for 'others'
function playgamaBridgeMultiplayerSend(type, data, target) {
    try {
        data = JSON.parse(data)
    }
    catch (e) {}

    if (typeof target === 'string' && target.trim().startsWith('[')) {
        try {
            target = JSON.parse(target)
        }
        catch (e) {}
    }

    window.bridge.multiplayer.send(type, data === '' ? undefined : data, { to: target || undefined })
}

// state: JSON object of the world; anything else is rejected by the core
// with a warning and the current world is kept
function playgamaBridgeMultiplayerSetSyncState(state) {
    try {
        state = JSON.parse(state)
    }
    catch (e) {}

    window.bridge.multiplayer.setSyncState(state)
}


// utils
function sendStateToGameMaker(type, state) {
    let serializedState = this.serializeData(state)
    sendSocialEventStateToGameMaker(type, serializedState)
}

function sendCallbackToGameMaker(type, success, data) {
    let serializedData = serializeData(data)
    let serializedSuccess = serializeData(success)
    sendSocialEventCallbackToGameMaker(type, serializedSuccess, serializedData)
}

function sendSocialEventCallbackToGameMaker(type, success, data = null) {
    let map = {
        type: formatSpecifiedCallbackType(type),
        success,
    }

    if (data !== null) {
        map.data = data
    }

    window.GMS_API.send_async_event_social(map)
}

function sendSocialEventStateToGameMaker(type, data = null) {
    let map = {
        type: formatSpecifiedStateCallbackType(type)
    }

    if (data !== null) {
        map.data = data
    }

    window.GMS_API.send_async_event_social(map)
}

function sendEventToGameMaker(type, data) {
    let map = {
        type: `playgama_bridge_${type}`
    }

    let serializedData = serializeData(data)
    if (serializedData !== undefined) {
        map.data = serializedData
    }

    window.GMS_API.send_async_event_social(map)
}

function formatSpecifiedCallbackType(type) {
    return `playgama_bridge_${type}_callback`
}

function formatSpecifiedStateCallbackType(type) {
    return `playgama_bridge_${type}_changed`
}

function serializeData(data) {
    if (data === null) {
        return undefined
    }

    switch (typeof data) {
        case 'number':
            return String(data)
        case 'boolean':
            return String(data ? 1 : 0)
        case 'string':
            return data
        default:
            return JSON.stringify(data)
    }
}
