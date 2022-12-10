<script lang="ts">
  import { goto } from "$app/navigation";
  import p1 from "$lib/assets/p1.jpg";

  interface ResumeItem {
    title: string;
    description: string;
    url?: string;
    image_src?: string;
  }

  const resume_items: Array<ResumeItem> = [
    {
      title: "Radical",
      description: "An open source Rust-based headless content management system.",
      image_src: "https://avatars.githubusercontent.com/u/77416525",
      url: "https://github.com/Rust-CMS",
    },
    {
      title: "Creative Solutions Group",
      description: "A team of eight software developers for Cedarville University- of which I am the team lead and tech lead.",
      image_src: "https://github.com/CreativeSolutionsGroup/.github/raw/main/csg-social-logo.jpg",
      url: "https://github.com/CreativeSolutionsGroup",
    },
    {
      title: "Rapit",
      description: "A journey in self education and compiler theory.",
      url: "https://github.com/SpBills/Rapit",
    },
  ];
</script>

<div class="flex mx-5 md:mx-0 justify-center w-full md:w-10/12 flex-wrap">
  {#each resume_items as item}
    <div
      class="rounded mt-5 overflow-hidden mx-5 shadow-lg w-full md:w-1/4 pb-5 flex flex-col"
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
