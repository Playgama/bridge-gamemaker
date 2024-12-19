bridge.advertisement.on(
    'interstitial_state_changed',
    (state) => {
        sendStateToGameMaker('advertisement_interstitial_state', state)
    })

bridge.advertisement.on(
    'rewarded_state_changed',
    (state) => {
        sendStateToGameMaker('advertisement_rewarded_state', state)
    })

bridge.advertisement.on(
    'banner_state_changed',
    (state) => {
        sendStateToGameMaker('advertisement_banner_state', state)
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

function playgamaBridgeAdvertisementShowBanner() {
    window.bridge.advertisement.showBanner()
}

function playgamaBridgeAdvertisementHideBanner() {
    window.bridge.advertisement.hideBanner()
}

function playgamaBridgeAdvertisementCheckAdblock() {
    window.bridge.advertisement.checkAdBlock()
        .then(result => {
            sendCallbackToGameMaker('advertisement_check_adblock', result)
        })
}


// storage
function playgamaBridgeStorageSet(key, value, storageType) {
    window.bridge.storage.set(key, value, storageType)
        .then(() => {
            sendCallbackToGameMaker('storage_set')
        })
}


function sendStateToGameMaker(type, state) {
    let serializedState = this.serializeData(state)
    callGameMakerCommonCallbackFunction(type, true, serializedState)
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

function callGameMakerCommonCallbackFunction(subtype, data) {
    if (window['gml_Script_playgama_bridge_callback']) {
        window['gml_Script_playgama_bridge_callback'](null, null, subtype, data)
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
        if (isState) {
            map.state = data
        } else {
            map.data = data
        }
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
    if (data == null) {
        return null
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
