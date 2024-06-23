"use client"
import React, { useState } from "react";
import Link from "next/link";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import {
    AppWindow,
    NotepadText,
    CalendarClock,
    CalendarRange,
    Carrot
} from "lucide-react"
import {useRouter} from "next/navigation";
import Giscus from '@giscus/react';

export default function Timeline() {
    const router = useRouter()

    const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

    return (
        <>
            <main id="Root" className="flex flex-col items-center justify-center w-full h-[100vh]">
                <div className="items-start">
                    <button onClick={() => setOpen(true)}><h1 className={"text-3xl font-black"}>Giscus</h1></button>
                    <Giscus
                        id="comments"
                        repo="imnyang/imnyang"
                        repoId="R_kgDOLv4w4w"
                        category="General"
                        categoryId="DIC_kwDOLv4w484CgTpC"
                        mapping="url"
                        term="Welcome to @giscus/react component!"
                        reactionsEnabled="0"
                        emitMetadata="0"
                        inputPosition="top"
                        theme="transparent_dark"
                        lang="ko"
                        loading="lazy"
                    />
                </div>
            </main>
          <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="in this site">
                <Link href="/">
                <CommandItem onSelect={() => {
                  router.push("/")
                  setOpen(false)
                }}>
                  <AppWindow className="mr-2 h-4 w-4" />
                  <span>Root</span>
                </CommandItem>
              </Link>
              <Link href="https://github.com/imnyang/imnyang/tree/master">
                <CommandItem onSelect={() => {
                  router.push("https://github.com/imnyang/imnyang/tree/master")
                  setOpen(false)
                }}>
                    <NotepadText className="mr-2 h-4 w-4" />
                    <span>About</span>
                </CommandItem>
              </Link>
              <Link href="/timeline">
                <CommandItem onSelect={() => {
                  router.push("/timeline")
                  setOpen(false)
                }}>
                  <CalendarRange className="mr-2 h-4 w-4" />
                  <span>Timeline</span>
                </CommandItem>
              </Link>
              <Link href="/giscus">
                <CommandItem onSelect={() => {
                  router.push("/giscus")
                  setOpen(false)
                }}>
                  <CalendarRange className="mr-2 h-4 w-4" />
                  <span>Giscus</span>
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Project">
              <Link href="https://blog.imnyang.xyz">
                <CommandItem onSelect={() => {
                  router.push("https://blog.imnyang.xyz")
                  setOpen(false)
                }}>
                  <CalendarRange className="mr-2 h-4 w-4" />
                  <span>Blog</span>
                  <CommandShortcut>imnyang</CommandShortcut>
                </CommandItem>
              </Link>
              <Link href="https://timetable.imnyang.xyz">
                <CommandItem onSelect={() => {
                  router.push("https://timetable.imnyang.xyz")
                  setOpen(false)
                }}>
                  <CalendarClock className="mr-2 h-4 w-4" />
                  <span>Timetable (API is gone)</span>
                  <CommandShortcut>imnyang</CommandShortcut>
                </CommandItem>
              </Link>
              <Link href="https://www.instagram.com/isangjeong.today/">
                <CommandItem onSelect={() => {
                  router.push("https://www.instagram.com/isangjeong.today/")
                  setOpen(false)
                }}>
                  <Carrot className="mr-2 h-4 w-4" />
                  <span>isangjeong.today</span>
                  <CommandShortcut>imnyang</CommandShortcut>
                </CommandItem>
              </Link>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        </>
    )
}
