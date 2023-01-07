import { addSvgToRandomLocation } from '../utils/planetUtils'
import { writable } from  'svelte/store'
import { shipsInfos } from '../data/ships'

const incrementalTimeInterval = 1000
export let ships = shipsInfos

export const money = writable(100)
/** @type {number} */
let moneyAccess
money.subscribe(money => {
	moneyAccess = money
})

export const incrementAmount = writable(1)
/** @type {number} */
let incrementAmountAccess
incrementAmount.subscribe(incrementAmount => {
	incrementAmountAccess = incrementAmount
})

/**
 * @param {number} amount - Amount to increment the total money.
 */
export function incrementMoney (amount) {
	money.update(money => money += amount)
}

setInterval(() => {
	incrementMoney(incrementAmountAccess)
}, incrementalTimeInterval)

/**
 * @param {object} ship
 * @param {number} ship.baseCost
 * @param {number} ship.level
 * @param {number} ship.exponent
 */
function getBuildCost(ship) {
	return Math.floor(ship.baseCost * Math.pow(ship.level + 1, ship.exponent))
}

/**
 * @param {number} cost
 */
function canAfford(cost) {
	return moneyAccess >= cost;
}

/**
 * @param {object} ship
 * @param {number} ship.baseCost
 * @param {number} ship.level
 * @param {number} ship.exponent
 * @param {number} ship.increment
 * @param {number} ship.id
 * @param {string} ship.shipImage
 */
export function build(ship) {
	const cost = getBuildCost(ship)
	if (canAfford(cost)) {
		money.update(money => money -= cost)

		ship.level +=1 
		incrementAmount.update(increment => increment += ship.increment)
		addSvgToRandomLocation(ship.shipImage) 

		const updatedShips = ships.map((shipOutdated) => {
			if(shipOutdated.id === ship.id) {
				return ship
			}
			return shipOutdated
		})

		ships = updatedShips
	} else {
		console.log("Not enough resources");
	}
}
