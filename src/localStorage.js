const localStorage = {
    get length() {
        const { keys } = tbplay.getStorageInfoSync()
        return keys.length
    },

    key(n) {
        const { keys } = tbplay.getStorageInfoSync()

        return keys[n]
    },

    getItem(key) {
        const value = tbplay.getStorageSync(key);
        return value === "" ? null : value;
    },

    setItem(key, value) {
        return tbplay.setStorageSync(key, value)
    },

    removeItem(key) {
        tbplay.removeStorageSync(key)
    },

    clear() {
        tbplay.clearStorageSync()
    }
}

export default localStorage
