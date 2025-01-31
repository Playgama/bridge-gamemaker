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
function playgamaBridgeAdvertisementShowInterstitial() {
    window.bridge.advertisement.showInterstitial()
}

function playgamaBridgeAdvertisementShowRewarded() {
    window.bridge.advertisement.showRewarded()
}

function playgamaBridgeAdvertisementInterstitialState() {
    return window.bridge.advertisement.interstitialState
}

function playgamaBridgeAdvertisementRewardedState() {
    return window.bridge.advertisement.rewardedState
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

function playgamaBridgeAdvertisementShowBanner(options) {
    window.bridge.advertisement.showBanner(options)
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
    return window.bridge.platform.payload
}

function playgamaBridgePlatformTld() {
    return window.bridge.platform.tld
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


// game
function playgamaBridgeGameVisibilityState() {
    return window.bridge.game.visibilityState
}


// storage
function playgamaBridgeStorageSet(key, value, storageType) {
    console.log('JS playgamaBridgeStorageSet', key, value, storageType)

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
    console.log('JS playgamaBridgeStorageGet', key, storageType)

    try {
        key = JSON.parse(key)
    }
    catch (e) {}

    window.bridge.storage.get(key, storageType, false)
        .then((data) => {
            console.log('JS playgamaBridgeStorageGet THEN', data)
            sendCallbackToGameMaker('storage_get', true, data)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_get', false)
        })
}

function playgamaBridgeStorageDelete(key, storageType) {
    console.log('JS playgamaBridgeStorageDelete', key, storageType)

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


// utils
function sendStateToGameMaker(type, state) {
    let serializedState = this.serializeData(state)
    callGameMakerSpecifiedStateCallbackFunction(type, serializedState)
    sendSocialEventStateToGameMaker(type, serializedState)
}

function sendCallbackToGameMaker(type, success, data) {
    let serializedData = serializeData(data)
    let serializedSuccess = serializeData(success)
    callGameMakerSpecifiedCallbackFunction(type, serializedSuccess, serializedData)
    sendSocialEventCallbackToGameMaker(type, serializedSuccess, serializedData)
}

function callGameMakerSpecifiedCallbackFunction(type, success, data) {
    let formattedType = formatSpecifiedCallbackType(type)
    if (window[`gml_Script_${formattedType}`]) {
        window[`gml_Script_${formattedType}`](null, null, success, data)
    }
}

function callGameMakerSpecifiedStateCallbackFunction(type, data) {
    let formattedType = formatSpecifiedStateCallbackType(type)
    if (window[`gml_Script_${formattedType}`]) {
        window[`gml_Script_${formattedType}`](null, null, data)
    }
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
