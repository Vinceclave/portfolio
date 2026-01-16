<script lang="ts">
    import { BriefcaseBusiness } from "lucide-svelte";

    const experiences = [
        {
            role: "Frontend Developer Trainee",
            period: "Aug — Dec 2025",
            company: "Alliance Software Inc. // Apprenticeship",
            description:
                "Developed UIs with React.js for professor-led industry problems, collaborating with C# MVC backend teams.",
            stack: ["React", "C#", "MVC"],
        },
        {
            role: "Full-Stack Developer",
            period: "Jan — Mar 2025",
            company: "Radtech Students // Freelance",
            description:
                "Built an educational platform with the MERN stack for Radiologic Technology students to track X-rays and study materials.",
            stack: ["MERN", "Tailwind", "Node"],
        },
        {
            role: "Frontend Developer",
            period: "Feb — May 2024",
            company: "El Progreso // Internship",
            description:
                "Resolved UI bugs and developed an email document integration module using Next.js and Material-UI.",
            stack: ["Next.js", "MUI", "REST APIs"],
        },
        {
            role: "ServiceNow Trainee",
            period: "Feb — May 2024",
            company: "Rococo Co., Ltd. // Apprenticeship",
            description:
                "Learned core ServiceNow administration and built a functional ServiceNow website prototype using Angular.",
            stack: ["ServiceNow", "Angular", "CSS"],
        },
    ];
</script>

<div class="space-y-6">
    <h2
        class="flex items-center gap-2 text-[9px] font-bold tracking-[0.25em] uppercase text-black/20"
    >
        <BriefcaseBusiness size="11" strokeWidth={2.5} class="opacity-40" />
        Technical Experience
    </h2>

    <div class="space-y-6">
        {#each experiences as exp, i}
            <div class="group/item">
                <div class="flex justify-between items-baseline gap-4 mb-0.5">
                    <h4 class="text-xs font-bold text-black/80 hover-line">
                        {exp.role}
                    </h4>
                    <span
                        class="text-[9px] font-mono text-black/20 uppercase tracking-widest whitespace-nowrap"
                    >
                        {exp.period}
                    </span>
                </div>
                <div
                    class="text-[9px] text-black/30 font-bold uppercase tracking-tightest mb-1"
                >
                    {exp.company}
                </div>
                <p
                    class="text-[11px] text-black/40 leading-relaxed mb-1.5 max-w-md"
                >
                    {exp.description}
                </p>
                <div
                    class="flex flex-wrap gap-2 text-[10px] text-black/20 font-mono"
                >
                    {#each exp.stack as tech}
                        <span class="hover:text-black/50 transition-colors"
                            >{tech}</span
                        >
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>
