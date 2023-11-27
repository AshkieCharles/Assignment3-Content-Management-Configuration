<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
  export let data;
  let { League } = data;
</script>

<ul>
  {#each data.League as League}
    <li>{League.name_champion}
      Does this champion do true damage?({League.true_damage})
    </li>
  {/each}
</ul>

