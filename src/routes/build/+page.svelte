<script>
	import { abbreviateNumber } from "../../utils/stringFormatter";
	import { build, getBuildCost, ships, notBoughtShipId } from "../../stores/gameLogic";

</script>
<div class="-w-full h-full flex flex-col items-center gap-4 mt-6">
  {#each $ships as ship (ship.id)}
    <button
      class={`${$notBoughtShipId === ship.id ? 'animate-shake active:border-red-600 active:text-red-600' : 'active:border-primary active:text-primary'} w-[340px] bg-neutral justify-between items-center py-4 px-4 rounded-lg flex gap-2 hover:brightness-90 active:brightness-90 active:scale-95 border-solid active:border-2 transition-all`}
      on:click={() => build(ship)}
    >
      <img class="w-[32px] h-[32px]" src={ship.shipImage} alt={ship.shipImage + ' Image'}>
      <div class="w-full flex flex-col items-start font-exo">
        <h3 class="font-bold text-lg">Buy {ship.name}</h3>
        <span>{ship.level} in use</span>
      </div>
      <div class="min-w-fit flex flex-col items-end font-exo">
        <span class="text-primary font-black">$ {abbreviateNumber(getBuildCost(ship))}</span>
        <span class="text-primary text-sm">+ $ {abbreviateNumber(ship.increment)}/sec </span>
      </div>
    </button>    
  {/each}

</div>