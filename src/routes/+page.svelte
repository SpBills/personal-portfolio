<script lang="ts">
  import Overlay from "$lib/overlay.svelte";

  import resume from "$lib/assets/resume.pdf";
  import me from "$lib/assets/me.png";
  import Portfolio from "$lib/portfolio.svelte";

  import Fa from "svelte-fa";
  import { faGithub } from "@fortawesome/free-brands-svg-icons"
</script>

<div class="flex flex-col md:mx-20 h-screen justify-between">
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
    <div class="flex items-center justify-center rounded-full w-72 h-72 bg-blue-50">
      <img src={me} class="order-1 md:order-last w-64 h-64" alt="My face." />
    </div>
  </div>
  <div class="flex pb-5 opacity-50 flex-col items-center">
    
  </div>
</div>
<div class="flex justify-center mt-20">
  <Portfolio />
</div>
