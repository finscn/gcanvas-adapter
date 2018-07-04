let performance

if (tbplay.getPerformanceNow) {
    // const { platform } = tbplay.getSystemInfoSync()
    const initTime = tbplay.getPerformanceNow()

    performance = {
        now: function() {
            return (tbplay.getPerformanceNow() - initTime) / 1000
        }
    }
} else {
    const initTime = Date.now()

    performance = {
        now: function() {
            return (Date.now() - initTime) / 1000
        }
    }
}

export default performance
