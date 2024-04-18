"use client"
// Components
import React, { useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

// Icon
import {
  ChevronRight,
  Send
} from "lucide-react"

export default function Home() { 
  const [command, setCommand] = React.useState('');
  const [disableInput, setDisbleInput] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const send = async () => {
    const response = await fetch(`https://api.imnyang.xyz/website/send?message=${command}`, { method: "POST" });

    setDisbleInput(true);
  }
  return (
    <>
    <main className={`dark flex flex-col items-center justify-center w-[100vw] h-[100vh]`}>
      <div className="flex h-[75%] flex-col items-center justify-center z-100">
        <h1 className="font-extrabold text-3xl">imnyang</h1>
        <br/>
        <p>Made with 💕 / Full-Stack Dev</p>
      </div>
      <p className="text-gray-500 font-light text-sm">전송시 악용 방지를 위해 일부 정보가 제공 됨</p>
      <div className="flex w-full h-[5%] max-w-sm items-center space-x-2 pb-10 pt-5">
        <Label htmlFor="email">fedora</Label><ChevronRight className="w-4 h-4"/>
        <Input placeholder="Type and Send some message" value={command} onChange={handleChange} disabled={disableInput} />
        <Button type="submit" onClick={send}><Send className="w-4 h-4"/></Button>
      </div>
    </main>
    </>
  );
}
