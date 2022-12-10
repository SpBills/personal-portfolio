<script lang="ts">
  import { goto } from "$app/navigation";
  import p1 from "$lib/assets/p1.jpg";

  interface ResumeItem {
    title: string;
    description: string;
    url?: string;
    image_src: string;
  }

  const resume_items: Array<ResumeItem> = [
    {
      title: "Rapit",
      description: "A journey in self-education and compiler theory.",
      image_src: p1,
      url: "https://github.com/SpBills/Rapit",
    },
  ];
</script>

<div class="flex mx-5 md:mx-0 justify-center flex-wrap">
  {#each resume_items as item}
    <div
      class="rounded overflow-hidden shadow-lg w-full md:w-1/3 h-80 flex flex-col"
      on:click={() => goto(item.url ?? "")}
      style:cursor={item.url ? "pointer" : ""}
    >
      <img class="h-52 w-full object-none" src={item.image_src} />
      <div class="px-5 pt-3">
        <h2 class="text-3xl font-bold">{item.title}</h2>
        <h3 class="mt-3">{item.description}</h3>
      </div>
    </div>
  {/each}
</div>
