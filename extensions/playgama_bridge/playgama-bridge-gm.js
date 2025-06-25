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

bridge.game.on(
    bridge.EVENT_NAME.VISIBILITY_STATE_CHANGED,
    (state) => {
        sendStateToGameMaker('game_visibility_state', state)
    })


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

function playgamaBridgePlatformSendMessage(message) {
    window.bridge.platform.sendMessage(message)
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

function playgamaBridgePlatformIsGetAllGamesSupported() {
    return serializeData(window.bridge.platform.isGetAllGamesSupported)
}

function playgamaBridgePlatformIsGetGameByIdSupported() {
    return serializeData(window.bridge.platform.isGetGameByIdSupported)
}

function playgamaBridgePlatformGetAllGames() {
    window.bridge.platform.getAllGames()
        .then((data) => {
            sendCallbackToGameMaker('platform_get_all_games', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('platform_get_all_games', false)
        })
}

function playgamaBridgePlatformGetGameById(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.platform.getGameById(options)
        .then((data) => {
            sendCallbackToGameMaker('platform_get_game_by_id', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('platform_get_game_by_id', false)
        })
}


// game
function playgamaBridgeGameVisibilityState() {
    return window.bridge.game.visibilityState
}


// storage
function playgamaBridgeStorageDefaultType() {
    return window.bridge.storage.defaultType
}

function playgamaBridgeStorageIsSupported(storageType) {
    return serializeData(window.bridge.storage.isSupported(storageType))
}

function playgamaBridgeStorageIsAvailable(storageType) {
    return serializeData(window.bridge.storage.isAvailable(storageType))
}

function playgamaBridgeStorageSet(key, value, storageType) {
    try {
        key = JSON.parse(key)
        value = JSON.parse(value)
    }
    catch (e) {}

    window.bridge.storage.set(key, value, storageType)
        .then(() => {
            sendCallbackToGameMaker('storage_set', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_set', false)
        })
}

function playgamaBridgeStorageGet(key, storageType) {
    try {
        key = JSON.parse(key)
    }
    catch (e) {}

    window.bridge.storage.get(key, storageType, false)
        .then((data) => {
            sendCallbackToGameMaker('storage_get', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_get', false)
        })
}

function playgamaBridgeStorageDelete(key, storageType) {
    try {
        key = JSON.parse(key)
    }
    catch (e) {}

    window.bridge.storage.delete(key, storageType)
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

function playgamaBridgePlayerId() {
    return serializeData(window.bridge.player.id)
}

function playgamaBridgePlayerName() {
    return serializeData(window.bridge.player.name)
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

function playgamaBridgeSocialShare(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.social.share(options)
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

function playgamaBridgeSocialJoinCommunity(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.social.joinCommunity(options)
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

function playgamaBridgeSocialInviteFriends(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.social.inviteFriends(options)
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

function playgamaBridgeSocialCreatePost(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.social.createPost(options)
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

function playgamaBridgeSocialIsExternalLinksAllowed() {
    return serializeData(window.bridge.social.isExternalLinksAllowed)
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


// achievements
function playgamaBridgeAchievementsIsSupported() {
    return serializeData(window.bridge.achievements.isSupported)
}

function playgamaBridgeAchievementsIsGetListSupported() {
    return serializeData(window.bridge.achievements.isGetListSupported)
}

function playgamaBridgeAchievementsIsNativePopupSupported() {
    return serializeData(window.bridge.achievements.isNativePopupSupported)
}

function playgamaBridgeAchievementsUnlock(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.achievements.unlock(options)
        .then(() => {
            sendCallbackToGameMaker('achievements_unlock', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('achievements_unlock', false)
        })
}

function playgamaBridgeAchievementsGetList(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.achievements.getList(options)
        .then((data) => {
            sendCallbackToGameMaker('achievements_get_list', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('achievements_get_list', false)
        })
}

function playgamaBridgeAchievementsShowNativePopup(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.achievements.showNativePopup(options)
        .then(() => {
            sendCallbackToGameMaker('achievements_show_native_popup', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('achievements_show_native_popup', false)
        })
}


// payments
function playgamaBridgePaymentsIsSupported() {
    return serializeData(window.bridge.payments.isSupported)
}

function playgamaBridgePaymentsPurchase(id) {
    window.bridge.payments.purchase(id)
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

function playgamaBridgeRemoteConfigGet(options) {
    try {
        options = JSON.parse(options)
    }
    catch (e) {}

    window.bridge.remoteConfig.get(options)
        .then((data) => {
            sendCallbackToGameMaker('remote_config_get', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('remote_config_get', false)
        })
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
