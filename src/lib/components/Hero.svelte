<script lang="ts">
    import { MapPin, Linkedin, Github } from "lucide-svelte";
    import { fade } from "svelte/transition";
    import profileImage from "$lib/assets/profile.png";
</script>

<section
    class="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 text-center sm:text-left"
    in:fade={{ duration: 1000 }}
>
    <!-- Left: Identity -->
    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <figure
            class="w-24 h-24 md:w-26 md:h-26 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 ease-studio"
        >
            <img
                src={profileImage}
                alt="Vince Clave D. Igot"
                class="w-full h-full object-cover object-top rounded-md border border-black/5 p-1"
            />
        </figure>

        <div class="flex flex-col items-center sm:items-start space-y-1">
            <div class="flex items-center gap-2">
                <h1
                    class="text-xl md:text-2xl font-bold tracking-tightest text-black"
                >
                    Vince Clave D. Igot
                </h1>
                <div
                    class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20"
                >
                    <span
                        class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                    ></span>
                    <span
                        class="text-[9px] font-bold uppercase tracking-widest text-green-600/80"
                        >Available</span
                    >
                </div>
            </div>

            <div
                class="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium text-black/30"
            >
                <address
                    class="flex items-center gap-1.5 not-italic whitespace-nowrap text-black/40"
                >
                    <MapPin size="11" class="opacity-50" />
                    Cebu City, PH
                </address>
                <p
                    class="whitespace-nowrap text-black/40 px-2 border-l border-black/5"
                >
                    Software Developer
                </p>
            </div>
        </div>
    </div>

    <!-- Right: Actions -->
    <div
        class="flex md:flex-col items-center lg:items-end gap-4 sm:gap-8 sm:border-l border-black/5 sm:pl-8 w-full sm:w-auto"
    >
        <div class="flex items-center gap-6">
            <a
                href="https://www.linkedin.com/in/vince-clave-igot-725a44365/"
                target="_blank"
                class="text-black/30 hover:text-black transition-colors"
                aria-label="LinkedIn"
            >
                <Linkedin size="18" />
            </a>
            <a
                href="https://github.com/Vinceclave/"
                target="_blank"
                class="text-black/30 hover:text-black transition-colors"
                aria-label="GitHub"
            >
                <Github size="18" />
            </a>
        </div>

        <a
            href="mailto:datanaganvince351@gmail.com"
            class="text-xs font-bold tracking-tight text-black border-b border-black/10 hover:border-black transition-all pb-0.5 whitespace-nowrap"
        >
            Contact Me
        </a>
    </div>
</section>
