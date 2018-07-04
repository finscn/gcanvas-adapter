import { noop } from '../util/index.js'
import Event from '../Event'

export default class TouchEvent extends Event {

    constructor(type) {
        super(type)

        this.touches = []
        this.targetTouches = []
        this.changedTouches = []

        this.target = window.canvas
        this.currentTarget = window.canvas
    }
}

function eventHandlerFactory(type) {
    return (rawEvent) => {
        const event = new TouchEvent(type)

        event.changedTouches = rawEvent.changedTouches
        event.touches = rawEvent.touches
        event.targetTouches = Array.prototype.slice.call(rawEvent.touches)
        event.timeStamp = rawEvent.timeStamp

        document.dispatchEvent(event)
    }
}

tbplay.onTouchStart(eventHandlerFactory('touchstart'))
tbplay.onTouchMove(eventHandlerFactory('touchmove'))
tbplay.onTouchEnd(eventHandlerFactory('touchend'))
tbplay.onTouchCancel(eventHandlerFactory('touchcancel'))
