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
            sendCallbackToGameMaker('advertisement_check_adblock', data)
        })
        .catch(() => {
            sendCallbackToGameMaker('advertisement_check_adblock')
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
            sendCallbackToGameMaker('platform_get_server_time', data)
        })
        .catch(() => {
            sendCallbackToGameMaker('platform_get_server_time')
        })
}


// game
function playgamaBridgeGameVisibilityState() {
    return window.bridge.game.visibilityState
}


// storage
function playgamaBridgeStorageSet(key, value, storageType) {
    window.bridge.storage.set(key, value, storageType)
        .then(() => {
            sendCallbackToGameMaker('storage_set', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_set')
        })
}

function playgamaBridgeStorageGet(key, storageType) {
    window.bridge.storage.get(key, storageType, false)
        .then((data) => {
            sendCallbackToGameMaker('storage_get', data)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_get')
        })
}

function playgamaBridgeStorageDelete(key, storageType) {
    window.bridge.storage.delete(key, storageType)
        .then(() => {
            sendCallbackToGameMaker('storage_delete', true)
        })
        .catch(() => {
            sendCallbackToGameMaker('storage_delete')
        })
}


function sendStateToGameMaker(type, state) {
    let serializedState = this.serializeData(state)
    callGameMakerCommonCallbackFunction(type, serializedState, true)
    callGameMakerSpecifiedStateCallbackFunction(type, serializedState)
    sendSocialEventToGameMaker(type, serializedState, false, true)
    sendSocialEventToGameMaker(type, serializedState, true, true)
}

function sendCallbackToGameMaker(type, data) {
    let serializedData = serializeData(data)
    callGameMakerCommonCallbackFunction(type, serializedData)
    callGameMakerSpecifiedCallbackFunction(type, serializedData)
    sendSocialEventToGameMaker(type, serializedData)
    sendSocialEventToGameMaker(type, serializedData, true)
}

function callGameMakerCommonCallbackFunction(subtype, data, isState = false) {
    let formattedSubtype = isState ? formatCommonStateCallbackType(subtype) : subtype
    if (window['gml_Script_playgama_bridge_callback']) {
        window['gml_Script_playgama_bridge_callback'](null, null, formattedSubtype, data)
    }
}

function callGameMakerSpecifiedCallbackFunction(type, data) {
    let formattedType = formatSpecifiedCallbackType(type)
    if (window[`gml_Script_${formattedType}`]) {
        window[`gml_Script_${formattedType}`](null, null, data)
    }
}

function callGameMakerSpecifiedStateCallbackFunction(type, data) {
    let formattedType = formatSpecifiedStateCallbackType(type)
    if (window[`gml_Script_${formattedType}`]) {
        window[`gml_Script_${formattedType}`](null, null, data)
    }
}

function sendSocialEventToGameMaker(type, data = null, isSpecified = false, isState = false) {
    let map = {
        type: isSpecified
            ? isState ? formatSpecifiedStateCallbackType(type) : formatSpecifiedCallbackType(type)
            : 'playgama_bridge_callback'
    }

    if (!isSpecified) {
        map.subtype = isState ? `${type}_changed` : type
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

function formatCommonStateCallbackType(type) {
    return `${type}_changed`
}

function serializeData(data) {
    switch (typeof data) {
        case 'number':
            return String(data)
        case 'boolean':
            return String(data ? 1 : 0)
        case 'string':
            return data
        default:
            return json_stringify(data)
    }
}
