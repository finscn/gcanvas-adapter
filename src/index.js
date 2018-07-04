let _window = require('./window');
let document = require('./document');

function inject() {
    _window.document = document;

    _window.addEventListener = (type, listener) => {
        _window.document.addEventListener(type, listener)
    }
    _window.removeEventListener = (type, listener) => {
        _window.document.removeEventListener(type, listener)
    }
    _window.dispatchEvent = function(event = {}) {
        // console.log('window.dispatchEvent', event.type, event);
        // nothing to do
    }

    for (const key in _window) {
        global[key] = _window[key]
    }
    global.window = _window
    global.top = global.parent = global
}

inject()
