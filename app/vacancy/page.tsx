"use client"
import { useState, useEffect, useRef } from "react";

export default function Vacancy() {
    return(
        <main className="overflow-x-clip" >
            <div id="вакансии" className="relative w-full pt-20 md:pt-0 min-h-[100svh]  text-text1 flex flex-col items-center justify-center text-center p-6 dark:text-text1Dark">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  mt-10">ВАКАНСИИ</h1>
                
            </div>
        </main>
    );
}