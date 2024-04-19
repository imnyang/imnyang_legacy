"use client"
// Components
import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/profile.png";

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
    <div id="Root" className="flex flex-col items-center justify-center w-full h-[100vh]">
    <main className={`dark flex flex-col items-center justify-center w-full h-[90vh]`}>
      <div className="flex h-[92%] flex-col items-center justify-center z-100">
        <Image className="hover:animate-spin avatar mb-5" alt="Profile" src={avatar} width={128} height={128} />
        <h1 className="font-extrabold text-3xl">imnyang</h1>
        <br/>
        <p>Made with 💕 / Full-Stack Dev</p>
      </div>
      <p className="text-gray-500 font-light text-sm">보안을 위해 전송시 일부 정보가 제공됩니다.</p>
      <div className="flex w-full h-[8%] max-w-sm items-center space-x-2 pt-2">
        <Label htmlFor="email">fedora</Label><ChevronRight className="w-4 h-4"/>
        <Input placeholder="Type and Send some message" value={command} onChange={handleChange} disabled={disableInput} />
        <Button type="submit" onClick={send}><Send className="w-4 h-4"/></Button>
      </div>
    </main>
    </div>
  );
}
