"use client"
// Components
import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/profile.png";
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

// Icon
import {
  ChevronRight,
  Send
} from "lucide-react"
import {
  AppWindow,
  NotepadText,
  CalendarClock,
  CalendarRange,
    Carrot
} from "lucide-react"
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function Home() {
  const router = useRouter()

  const [command, setCommand] = React.useState('');
  const [disableInput, setDisbleInput] = React.useState(false);
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const send = async () => {
    const response = await fetch(`https://api.imnyang.xyz/website/send?message=${command}`, { method: "POST" });

    setDisbleInput(true);
  }
  return (
      <>
        <div id="Root" className="flex flex-col items-center justify-center w-full h-[100vh]">
          <main className={`dark flex flex-col items-center justify-center w-full h-[90vh]`}>
            <div className="flex h-[92%] flex-col items-center justify-center z-100">
              <Image className="hover:animate-spin avatar mb-5" alt="Profile" src={avatar} width={128} height={128}/>
              
              <button className="flex flex-row items-end pt-3 pb-0"><h1 aria-label="imnyang" className="name font-extrabold text-3xl">아임냥</h1></button>
              <p className={"flex flex-row pt-3"}>Hello World with 💕 /<button className="pl-2 text-muted-foreground" onClick={() => setOpen(true)}>Press{" "}<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"><span className="text-xs">⌘</span>J</kbd></button></p>
            </div>
            <p className="text-gray-500 font-light text-sm">보안을 위해 전송시 일부 정보가 제공됩니다.</p>
            <div className="flex w-full h-[8%] max-w-sm items-center space-x-2 pt-2">
              <Label htmlFor="email">ubuntu</Label><ChevronRight className="w-4 h-4"/>
              <Input placeholder="Type and Send some message" value={command} onChange={handleChange}
                     disabled={disableInput}/>
              <Button type="submit" onClick={send}><Send className="w-4 h-4"/></Button>
            </div>
          </main>
        </div>
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
  );
}
