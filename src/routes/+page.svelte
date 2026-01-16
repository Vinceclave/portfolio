<script lang="ts">
  import { fade } from "svelte/transition";
  import BackgroundAccents from "$lib/components/BackgroundAccents.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import ProjectDetail from "$lib/components/ProjectDetail.svelte";

  let selectedProject: any = null;

  function handleSelect(event: CustomEvent) {
    selectedProject = event.detail;
  }
</script>

<svelte:head>
  <title>Vince Clave Igot | Software Developer in Cebu City</title>
  <meta
    name="description"
    content="Professional portfolio of Vince Clave Igot, a Software Developer based in Cebu City. Specializing in Full-Stack Development, React, Node.js, and AI-integrated solutions."
  />
</svelte:head>

<main class="min-h-[100dvh] flex flex-col items-center justify-center bg-grid">
  <div class="w-full max-w-4xl relative">
    <BackgroundAccents />
    <div
      class="border border-black/5 divide-y divide-black/5 bg-white/50 backdrop-blur-sm"
    >
      <Hero />
      <About />
      <Skills />

      <section class="p-6 md:p-8" in:fade={{ duration: 1000, delay: 600 }}>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <!-- Experiences (3/5 columns) -->
          <div class="md:col-span-3">
            <Experience />
          </div>

          <!-- Projects (2/5 columns) -->
          <div class="md:col-span-2 md:border-l md:border-black/5 md:pl-8">
            <Projects on:select={handleSelect} />
          </div>
        </div>
      </section>
    </div>
  </div>

  <ProjectDetail
    project={selectedProject}
    on:close={() => (selectedProject = null)}
  />
</main>
