<script lang="ts">
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const top_l = spring(0, { stiffness: 0.07, damping: 1 });
  const top_m = spring(0, { stiffness: 0.07, damping: 1 });
  const top_r = spring(0, { stiffness: 0.07, damping: 1 });

  onMount(async () => {
    await sleep(1000);
    top_l.set(100);
    await sleep(200);
    top_m.set(100);
    await sleep(200);
    top_r.set(100);

  });
</script>

<div class="z-10 left-0 w-screen top-0 absolute h-screen overflow-hidden">
  <div class="w-1/3 absolute  h-full bg-blue-300" style:top="{$top_l}%" />
  <div class="w-1/3 absolute left-1/3 h-full bg-blue-300" style:top="{$top_m}%" />
  <div class="w-1/3 absolute left-2/3 h-full bg-blue-300" style:top="{$top_r}%" />
</div>

<style></style>
