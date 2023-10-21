"use client";

import { useTheme } from "next-themes";

export default function HeroHeading() {
    const { theme } = useTheme();

    return (
        <h1 className={`font-heading text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r  bg-clip-text text-transparent ${theme == "light" ? "from-slate-500 to-slate-900" : " from-amber-200 to-orange-400"}`}>
            Open Source Postman Alternative
        </h1>
    );
};