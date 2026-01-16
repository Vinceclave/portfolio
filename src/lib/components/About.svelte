<script lang="ts">
    import { BriefcaseBusiness } from "lucide-svelte";
    import { fade } from "svelte/transition";
</script>

<section class="p-6 md:p-8" in:fade={{ duration: 1000, delay: 200 }}>
    <div class="space-y-3 text-center sm:text-left">
        <h2
            class="flex items-center justify-center sm:justify-start gap-2 text-[9px] font-bold tracking-[0.25em] uppercase text-black/20"
        >
            <BriefcaseBusiness size="11" strokeWidth={2.5} class="opacity-40" />
            About
        </h2>

        <p
            class="text-[11px] md:text-xs leading-relaxed text-black/50 max-w-2xl font-medium"
        >
            I am a passionate <span class="text-black/80"
                >Software Developer</span
            >
            based in Cebu City, committed to building efficient and innovative
            digital experiences. I thrive on solving complex problems, embracing
            new technologies, and continuously refining my craft. I am currently
            <span class="text-black/80">actively seeking new opportunities</span
            >
            where I can contribute my skills and grow professionally.
        </p>
    </div>
</section>
