let reloader
let reloadIntervalElement = document.getElementById('reloadInterval')
document.getElementById("startButton").addEventListener('click', startReload)
document.getElementById("stopButton").addEventListener('click', stopReload)

function startReload() {
    let reloadInterval = Number.parseInt(reloadIntervalElement.value)
    clearInterval(reloader)
    console.log(reloadInterval, '----> ', validateInterval(reloadInterval))

    if (validateInterval(reloadInterval)) {
        reloader = setInterval(() => {
            console.log('Hi')
            chrome.tabs.reload();
        }, reloadInterval * 1000)
    }
}

function validateInterval(interval) {
    console.log(typeof interval)
    if (interval && interval > 0 && Number.isInteger(interval)) {
        return true
    }

    return false
}

function stopReload () {
    clearInterval(reloader)
}