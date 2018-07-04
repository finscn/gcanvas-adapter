import Canvas from './Canvas'

import CommonComputedStyle from './style/CommonComputedStyle'
import getImageComputedStyle from './style/ImageComputedStyle'
import getCanvasComputedStyle from './style/CanvasComputedStyle'
import Event from './Event'

export { default as navigator } from './navigator'
export { default as XMLHttpRequest } from './XMLHttpRequest'
export { default as WebSocket } from './WebSocket'
export { default as Worker } from './Worker'
export { default as Image } from './Image'
export { default as ImageBitmap } from './ImageBitmap'
export { default as Audio } from './Audio'
export { default as FileReader } from './FileReader'
export { default as HTMLElement } from './HTMLElement'
export { default as HTMLImageElement } from './HTMLImageElement'
export { default as HTMLCanvasElement } from './HTMLCanvasElement'
export { default as HTMLMediaElement } from './HTMLMediaElement'
export { default as HTMLAudioElement } from './HTMLAudioElement'
export { default as HTMLVideoElement } from './HTMLVideoElement'
export { default as WebGLRenderingContext } from './WebGLRenderingContext'
export { TouchEvent, PointerEvent, MouseEvent } from './EventIniter/index.js'
export { default as localStorage } from './localStorage'
export { default as location } from './location'
export * from './WindowProperties'


const { platform } = tbplay.getSystemInfoSync()

// 暴露全局的 canvas
global.screencanvas = global.screencanvas || new Canvas()
const canvas = global.screencanvas;

function getComputedStyle(dom) {
    const tagName = dom.tagName;

    if (tagName === "CANVAS") {
        return getCanvasComputedStyle(dom);
    } else if (tagName === "IMG") {
        return getImageComputedStyle(dom);
    }

    return CommonComputedStyle;
}

function scrollTo(x, y) {
    // x = Math.min(window.innerWidth, Math.max(0, x));
    // y = Math.min(window.innerHeight, Math.max(0, y));
    // We can't scroll the page of WeChatTinyGame, so it'll always be 0.

    // window.scrollX = 0;
    // window.scrollY = 0;
}

function scrollBy(dx, dy) {
    window.scrollTo(window.scrollX + dx, window.scrollY + dy);
}

function alert(msg) {
    console.log(msg);
}

function focus() {}

function blur() {}

if (platform !== 'devtools') {
    const consoleTimers = {};
    console.time = function(name) {
        consoleTimers[name] = tbplay.getPerformanceNow();
    };

    console.timeEnd = function(name) {
        const timeStart = consoleTimers[name];
        if(!timeStart) {
            return;
        }

        const timeElapsed = tbplay.getPerformanceNow() - timeStart;
        console.log(name + ": " + timeElapsed / 1000 + "ms");
        delete consoleTimers[name];
    };
}

function eventHandlerFactory() {
    return (res) => {
        const event = new Event('resize')

        event.target = window;
        event.timeStamp = Date.now();
        event.res = res;
        event.windowWidth = res.windowWidth;
        event.windowHeight = res.windowHeight;
        document.dispatchEvent(event);
    }
}

// tbplay.onWindowResize(eventHandlerFactory())

const _setTimeout = setTimeout;
const _clearTimeout = clearTimeout;
const _setInterval = setInterval;
const _clearInterval = clearInterval;
const _requestAnimationFrame = requestAnimationFrame;
const _cancelAnimationFrame = requestAnimationFrame;

const document = null;
const addEventListener = null;
const removeEventListener = null;
const dispatchEvent = null;

export {
    canvas,
    alert,
    focus,
    blur,
    getComputedStyle,
    scrollTo,
    scrollBy,

    _setTimeout as setTimeout,
    _clearTimeout as clearTimeout,
    _setInterval as setInterval,
    _clearInterval as clearInterval,
    _requestAnimationFrame as requestAnimationFrame,
    _cancelAnimationFrame as cancelAnimationFrame,

    document,
    addEventListener,
    removeEventListener,
    dispatchEvent,
}