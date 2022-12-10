<script lang="ts">
  import { goto } from "$app/navigation";
  import p1 from "$lib/assets/p1.jpg";
    import type { PortfolioItem } from "./models/PortfolioItem";

  export let portfolio_items: Array<PortfolioItem> = [];
</script>

<div class="flex mx-5 md:mx-0 justify-center w-full md:w-10/12 flex-wrap">
  {#each portfolio_items as item}
    <div
      class="rounded mt-5 overflow-hidden mx-5 shadow-lg w-full lg:w-1/4 pb-5 flex flex-col"
      on:click={() => goto(item.url ?? "")}
      style:cursor={item.url ? "pointer" : ""}
    >
      <img class="h-52 w-full object-none" src={item.image_src ?? p1} />
      <div class="px-5 pt-3">
        <h2 class="text-3xl font-bold">{item.title}</h2>
        <h3 class="mt-3">{item.description}</h3>
      </div>
    </div>
  {/each}
</div>
