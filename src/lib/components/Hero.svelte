<script lang="ts">
    import { MapPin, Linkedin, Github, PhoneCall } from "lucide-svelte";
    import { fade } from "svelte/transition";
    import profileImage from "$lib/assets/profile.png?enhanced";
</script>

<section
    class="flex flex-col sm:flex-row items-center sm:justify-between gap-8 p-6 md:p-8"
    in:fade={{ duration: 1000 }}
>
    <!-- Left: Identity -->
    <div
        class="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full sm:w-auto"
    >
        <figure
            class="w-24 h-24 md:w-26 md:h-26 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 ease-studio"
        >
            <enhanced:img
                src={profileImage}
                alt="Vince Clave D. Igot"
                fetchpriority="high"
                loading="eager"
                class="w-full h-full object-cover object-top rounded-md border border-black/5 p-1 bg-black/5"
            />
        </figure>

        <div
            class="flex flex-col items-center sm:items-start space-y-3 text-center sm:text-left"
        >
            <h1
                class="text-2xl md:text-3xl font-bold tracking-tightest text-black"
            >
                Vince Clave D. Igot
            </h1>

            <div class="flex flex-col items-center sm:items-start gap-3">
                <div
                    class="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium text-black/40"
                >
                    <address
                        class="flex items-center gap-1.5 not-italic whitespace-nowrap"
                    >
                        <MapPin size="11" class="opacity-50" />
                        Cebu City, PH
                    </address>
                    <span class="hidden sm:block w-px h-3 bg-black/5"></span>
                    <p class="whitespace-nowrap">Software Developer</p>
                </div>

                <div
                    class="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 w-fit"
                >
                    <span
                        class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                    ></span>
                    <span
                        class="text-[9px] font-bold uppercase tracking-widest text-green-600/80"
                    >
                        Open to work
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Right: Actions -->
    <div
        class="flex flex-col items-center sm:items-end gap-6 w-full sm:w-auto sm:pl-8 sm:border-l border-black/5"
    >
        <div class="flex items-center gap-6">
            <a
                href="https://www.linkedin.com/in/vince-clave-igot-725a44365/"
                target="_blank"
                class="text-black/30 hover:text-black transition-colors"
                aria-label="LinkedIn"
            >
                <Linkedin size="20" />
            </a>
            <a
                href="https://github.com/Vinceclave/"
                target="_blank"
                class="text-black/30 hover:text-black transition-colors"
                aria-label="GitHub"
            >
                <Github size="20" />
            </a>
        </div>

        <div
            class="grid grid-cols-2 sm:flex sm:flex-col gap-3 w-full sm:w-auto"
        >
            <a
                href="https://calendly.com/datanaganvince351/30min"
                target="_blank"
                class="flex items-center justify-center gap-2 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest bg-black text-white rounded-full hover:bg-black/90 transition-all whitespace-nowrap"
            >
                Meeting
                <PhoneCall size="12" />
            </a>
            <a
                href="mailto:datanaganvince351@gmail.com"
                class="flex items-center justify-center px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-black border border-black/10 rounded-full hover:bg-black/5 transition-all whitespace-nowrap"
            >
                Contact
            </a>
        </div>
    </div>
</section>
