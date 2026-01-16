<script lang="ts">
    import {
        X,
        ExternalLink,
        Layers,
        Cpu,
        Globe,
        Newspaper,
    } from "lucide-svelte";
    import { fade, fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    export let project: {
        title: string;
        description: string;
        tags: string;
        url: string;
        longDescription?: string;
        technicalSpecs?: string[];
        press?: { source: string; title: string; url: string }[];
        image?: string;
    } | null = null;

    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }
</script>

{#if project}
    <!-- Backdrop -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 200 }}
        on:click={close}
    >
        <!-- Modal Content -->
        <div
            class="bg-white border border-black/5 w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative flex flex-col"
            in:fly={{ y: 20, duration: 400, delay: 100 }}
            on:click|stopPropagation
        >
            <!-- Header -->
            <div
                class="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-black/5 p-6 flex justify-between items-center z-10"
            >
                <div class="space-y-1">
                    <h2 class="text-xl font-bold tracking-tightest uppercase">
                        {project.title}
                    </h2>
                    <p
                        class="text-[10px] font-mono text-black/40 uppercase tracking-widest"
                    >
                        {project.tags}
                    </p>
                </div>
                <button
                    on:click={close}
                    class="p-2 hover:bg-black/5 rounded-full transition-colors text-black/40 hover:text-black"
                >
                    <X size={20} />
                </button>
            </div>

            <div class="p-6 md:p-8 space-y-8">
                <!-- Description Section -->
                <div class="space-y-4">
                    <h3
                        class="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20 flex items-center gap-2"
                    >
                        <Layers size={12} /> Overview
                    </h3>
                    <p
                        class="text-xs md:text-sm text-black/60 leading-relaxed max-w-xl"
                    >
                        {project.longDescription || project.description}
                    </p>
                </div>

                <!-- Technical Specs -->
                <div class="space-y-4">
                    <h3
                        class="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20 flex items-center gap-2"
                    >
                        <Cpu size={12} /> Technical Architecture
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {#each project.technicalSpecs || ["Microservices Architecture", "High-Availability DB", "Responsive UI/UX", "Cloud Deployment"] as spec}
                            <div
                                class="flex items-center gap-2 text-[10px] font-medium text-black/40 bg-black/[0.02] p-2 rounded border border-black/[0.03]"
                            >
                                <div
                                    class="w-1 h-1 rounded-full bg-black/20"
                                ></div>
                                {spec}
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Actions -->
                <div class="pt-4 flex flex-wrap gap-4">
                    <a
                        href={project.url}
                        target="_blank"
                        class="flex items-center gap-2 bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-black/80 transition-colors"
                    >
                        <Globe size={14} /> View Live Demo
                    </a>
                </div>

                <!-- Press Section -->
                {#if project.press && project.press.length > 0}
                    <div class="space-y-4 pt-4 border-t border-black/5">
                        <h3
                            class="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20 flex items-center gap-2"
                        >
                            <Newspaper size={12} /> Press & Media
                        </h3>
                        <div class="space-y-3">
                            {#each project.press as article}
                                <a
                                    href={article.url}
                                    target="_blank"
                                    class="group/press block p-3 bg-black/[0.02] border border-black/[0.03] hover:border-black/10 transition-all"
                                >
                                    <div
                                        class="flex items-center justify-between mb-1"
                                    >
                                        <span
                                            class="text-[8px] font-bold uppercase tracking-widest text-black/30 group-hover/press:text-black/50 transition-colors"
                                        >
                                            {article.source}
                                        </span>
                                        <ExternalLink
                                            size={10}
                                            class="text-black/20"
                                        />
                                    </div>
                                    <p
                                        class="text-[10px] font-medium text-black/60 group-hover/press:text-black transition-colors"
                                    >
                                        {article.title}
                                    </p>
                                </a>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>

            {#if project.image}
                <div
                    class="absolute bottom-0 right-0 w-1/2 h-1/2 overflow-hidden pointer-events-none opacity-10 grayscale mix-blend-multiply"
                >
                    <img
                        src={project.image}
                        alt="{project.title} - Software Development Project"
                        loading="lazy"
                        class="absolute -bottom-10 -right-10 w-full h-auto object-contain"
                        onerror="this.style.display='none'"
                    />
                </div>
            {/if}
        </div>
    </div>
{/if}
