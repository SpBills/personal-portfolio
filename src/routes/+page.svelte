<script lang="ts">
  import Overlay from "$lib/overlay.svelte";

  import resume from "$lib/assets/resume.pdf";
  import me from "$lib/assets/me.png";
  import Portfolio from "$lib/portfolio.svelte";

  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";

  import { page } from "$app/stores";
</script>

<div class="flex flex-col h-screen justify-between">
  <div
    class="flex flex-col md:flex-row flex-1 justify-center md:justify-between items-center"
  >
    <div class="flex flex-col order-2 md:order-first">
      <h1 class="text-5xl mt-5 md:mt-0">Spencer Bills</h1>
      <h2 class="mt-5">Full Stack Software Developer</h2>
      <a class="mt-5 underline" href={resume}>Download My Resume</a>
      <a href="https://github.com/SpBills" class="mt-5">
        <Fa icon={faGithub} size="2x" />
      </a>
    </div>
    <div
      class="flex items-center justify-center rounded-full w-72 h-72 bg-blue-50"
    >
      <img src={me} class="order-1 md:order-last w-64 h-64" alt="My face." />
    </div>
  </div>
  <div class="flex pb-5 opacity-50 flex-col items-center" />
</div>
<div class="flex flex-col mt-20">
  <h1 class="text-5xl md:mt-0">Freelancing Experience</h1>
  <p class="opacity-50">Note that many of these are proprietary, and thus may not have a link.</p>
  <div class="mb-10 flex justify-center">
    <Portfolio portfolio_items={$page.data.freelancing_experience} />
  </div>
  <h1 class="text-5xl md:mt-0">Open Source Experience</h1>
  <div class="flex justify-center">
    <Portfolio portfolio_items={$page.data.open_source_experience} />
  </div>
</div>
