<script>
	import { abbreviateNumber } from '../utils/stringFormatter';
  import { incrementAmount, money } from '../stores/gameLogic'

  let progressTimerValue = 0
  
  setInterval(() => {
    if (progressTimerValue >= 99) {
      progressTimerValue = 0
      return
    }
    progressTimerValue++
  }, 10)

  /** @type {number} */
  let incrementAmountValue
  incrementAmount.subscribe(incrementAmount => {
    incrementAmountValue = incrementAmount
  })

   /** @type {string} */
  let moneyValue;
	money.subscribe(value => {
		moneyValue = abbreviateNumber(value);
	});
</script>

<div class="flex flex-col items-center gap-2 mt-4 bg-neutral w-fit mx-auto p-4 rounded-lg">
  <h2 class="font-exo font-black text-primary text-4xl">$ {moneyValue}</h2>
  <progress class="progress progress-primary w-56" value={progressTimerValue} max="100"></progress>
  <span class="font-exo text-primary"> $ {incrementAmountValue} /sec</span>
</div>