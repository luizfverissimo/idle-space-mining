/**
 * @param {object} window
 * @param {object} data
 */
export function saveToLocalStorage (window, data) {
  window.localStorage.setItem('gameConfigs', JSON.stringify(data))
}

/**
 * @param {object} window
 */
export function loadFromLocalStorage (window) {
  return JSON.parse(window.localStorage.getItem('gameConfigs'))
}

/**
 * @param {number} lastDate
 * @param {number} incrementAmount
 */
export function calculateOfflineMoney (lastDate, incrementAmount) {
  const dateNow = Math.floor(Date.now() / 1000)
  const dateDifference = dateNow - lastDate
  return dateDifference * incrementAmount
}