import { planetGenerator } from '../utils/planetUtils'
import { writable } from  'svelte/store'
import { shipsInfos } from '../data/ships'

export const planet = planetGenerator()

const incrementalTimeInterval = 1000


export const ships = writable(shipsInfos)
/** @type {Array<{ id: number; baseCost: number; exponent: number; level: number; increment: number; shipImage: string; name: string; }>} */
let shipsAccess
ships.subscribe(ships => {
	shipsAccess = ships
})

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
export function getBuildCost(ship) {
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
 * @param {string} ship.name
 */
export function build(ship) {
	const cost = getBuildCost(ship)
	if (canAfford(cost)) {
		money.update(money => money -= cost)

		ship.level +=1 
		incrementAmount.update(increment => increment += ship.increment)

		const updatedShips = shipsAccess.map((shipOutdated) => {
			if(shipOutdated.id === ship.id) {
				return ship
			}
			return shipOutdated
		})

		ships.update(ships => ships = updatedShips)
	} else {
		console.log("Not enough resources");
	}
}
