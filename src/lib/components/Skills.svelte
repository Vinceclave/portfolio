<script lang="ts">
    import { Code2 } from "lucide-svelte";
    import { fade } from "svelte/transition";

    const skillGroups = [
        {
            label: "Front-End",
            skills: "React.js, React Native, Next.js, UI Libraries, Tailwind, JavaScript",
        },
        {
            label: "Back-End",
            skills: "C# MVC, Node.js, Express.js, MongoDB, REST APIs",
        },
        {
            label: "Tools",
            skills: "ServiceNow, Workflow Automation, UX Design, GitHub, Figma",
        },
        {
            label: "Soft Skills",
            skills: "Critical Thinking, Adaptability, Teamwork, Management",
        },
    ];
</script>

<section class="p-6 md:p-8" in:fade={{ duration: 1000, delay: 400 }}>
    <div class="space-y-4 text-center sm:text-left">
        <h2
            class="flex items-center justify-center sm:justify-start gap-2 text-[9px] font-bold tracking-[0.25em] uppercase text-black/20"
        >
            <Code2 size="11" strokeWidth={2.5} class="opacity-40" />
            Technical Skills
        </h2>

        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
            {#each skillGroups as group}
                <div class="space-y-1 group">
                    <h3
                        class="text-[9px] font-bold uppercase tracking-widest text-black/20 group-hover:text-black/40 transition-colors"
                    >
                        {group.label}
                    </h3>
                    <p
                        class="text-[11px] md:text-xs leading-relaxed text-black/40 font-medium"
                    >
                        {group.skills}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
