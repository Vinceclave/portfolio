<script lang="ts">
    import { Code2, ExternalLink } from "lucide-svelte";
    import { createEventDispatcher } from "svelte";
    import aidvocateImg from "$lib/assets/aidvocate.png";
    import certifaiImg from "$lib/assets/certifai.png";
    import psitsImg from "$lib/assets/psits.png";
    import craftopiaImg from "$lib/assets/craftopia.png";

    const dispatch = createEventDispatcher();

    const projects = [
        {
            title: "AidVocate",
            description:
                "Disaster Preparedness & Real-time emergency response platform for Cebu.",
            longDescription:
                "AidVocate is a comprehensive disaster management system designed to streamline communication between citizens and emergency responders. It features real-time incident reporting, dynamic resource allocation, and a centralized dashboard for coordinate relief efforts.",
            tags: "MERN // Location-Reporting",
            url: "https://cebu-calamity-response.vercel.app/",
            technicalSpecs: [
                "Socket.io Real-time Updates",
                "Leaflet Geo-spatial Tracking",
                "Express middleware security",
                "Atlas Search indexing",
            ],
            press: [
                {
                    source: "GMA News",
                    title: "Cebu students connect calamity victims to help with app, website",
                    url: "https://www.gmanetwork.com/regionaltv/youngminds/110567/cebu-students-connect-calamity-victims-to-help-with-app-website/story/",
                },
                {
                    source: "InsiderPH",
                    title: "Built in 24 hours: UC IT students launch Cebu Earthquake Relief app",
                    url: "https://insiderph.com/built-in-24-hours-uc-it-students-launch-cebu-earthquake-relief-app",
                },
                {
                    source: "Manila Bulletin",
                    title: "Cebu Relief App: Bridging the gap on disaster relief response",
                    url: "https://mb.com.ph/2025/10/20/cebu-relief-app-bridging-the-gap-on-disaster-relief-response",
                },
            ],
            image: aidvocateImg,
        },
        {
            title: "CertifAI",
            description:
                "AI-powered certificate verification system to prevent credential fraud.",
            longDescription:
                "CertifAI leverages the Gemini AI model and Solana blockchain to verify the authenticity of professional certifications. It ensures that credentials once issued cannot be tampered with and are instantly verifiable via a public ledger.",
            tags: "React TS // Gemini // Solana",
            url: "https://certif-ai.vercel.app/",
            technicalSpecs: [
                "Gemini AI Model",
                "Solana Smart Contracts",
                "React & TypeScript Integration",
                "PDF-Lib manipulation",
            ],
            image: certifaiImg,
        },
        {
            title: "PSITS Web App",
            description:
                "Centralized operations platform for merchandise and event management at UC Main.",
            longDescription:
                "A specialized ERP system for the Philippine Society of Information Technology Students. It handles member registrations, merchandise sales tracking, and event attendance using QR code integration.",
            tags: "TypeScript // Amazon S3",
            url: "http://psits-web.vercel.app/",
            technicalSpecs: [
                "AWS S3 Media Storage",
                "PostgreSQL Relationship Mapping",
                "QR Code Generation",
                "Role-based Access Control",
            ],
            image: psitsImg,
        },
        {
            title: "Craftopia",
            description:
                "AI platform transforming recyclable materials into creative craft ideas.",
            longDescription:
                "Craftopia uses the Gemini AI model to identify household waste materials and suggests DIY projects to reduce environmental impact. It fosters a community of makers focused on sustainability.",
            tags: "Gemini AI // Sustainability-Tech",
            url: "https://craftopia-web.vercel.app/",
            technicalSpecs: [
                "Gemini AI Model",
                "React Native Mobile App",
                "Sustainability API Integration",
                "Community Feed System",
            ],
            image: craftopiaImg,
        },
    ];

    function selectProject(project: any) {
        dispatch("select", project);
    }
</script>

<div class="space-y-6">
    <h2
        class="flex items-center gap-2 text-[9px] font-bold tracking-[0.25em] uppercase text-black/20"
    >
        <Code2 size="11" strokeWidth={2.5} class="opacity-40" />
        Selected Work
    </h2>

    <div class="space-y-6">
        {#each projects as project, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                on:click={() => selectProject(project)}
                class="group/link block cursor-pointer relative pl-8"
            >
                <!-- Number indicator restored -->
                <span
                    class="absolute left-0 top-1 text-[7px] font-mono text-black/20 group-hover:text-black/40 transition-colors"
                >
                    {(i + 1).toString().padStart(2, "0")}
                </span>

                <div class="flex items-center justify-between mb-1">
                    <h4
                        class="text-xs font-bold text-black/70 group-hover:text-black transition-colors underline decoration-black/10 underline-offset-4 hover-line"
                    >
                        {project.title}
                    </h4>
                    <ExternalLink
                        size="10"
                        class="text-black/20 group-hover:text-black/40 transition-colors"
                    />
                </div>
                <p
                    class="text-[10px] text-black/40 leading-relaxed font-medium mb-1.5 max-w-lg"
                >
                    {project.description}
                </p>
                <div
                    class="text-[9px] font-mono text-black/20 group-hover:text-black/30 transition-colors"
                >
                    {project.tags}
                </div>
            </div>
        {/each}
    </div>
</div>
