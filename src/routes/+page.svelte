<script>
	import { addSvgToRandomLocation } from '../utils/planetUtils';
	import { planet, ships } from '../stores/gameLogic';
	import { onMount } from 'svelte';

	/** @type {Array<{ id: number; baseCost: number; exponent: number; level: number; increment: number; shipImage: string; name: string; }>} */
	let shipsAccess
	ships.subscribe(ships => {
		shipsAccess = ships
	})

	function renderShips () {
		shipsAccess.forEach(ship => {
			if(ship.level === 0) return

			let counter = 1
			do {
				counter++
				addSvgToRandomLocation(ship.shipImage)
			} while (counter <= ship.level)
		})
	}

	onMount(() => {
		renderShips()
	})
</script>

<div
	id="planet-container"
	class="w-full flex flex-col items-center justify-center h-[400px] flex-1 relative"
>
	<div
		class="rounded-full shadow-2xl"
		style={`width: ${planet.size}px; height: ${planet.size}px; background-color: ${planet.color};`}
	/>
</div>
