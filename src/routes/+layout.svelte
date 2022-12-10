<script>
    import Overlay from "$lib/overlay.svelte";
  import "../app.css"
</script>

<Overlay />
<main class="md:mx-20 mx-5 flex flex-col max-w-screen min-h-screen mb-5">
  <slot />
</main>