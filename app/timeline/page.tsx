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
                <button onClick={() => setOpen(true)}><h1 className={"text-3xl font-black"}>Timeline</h1></button>
                    <br/>
                    <p className="pl-2 text-muted-foreground">2024-08-01 <Link className="text-blue-400"
                                                                               href="http://ncf.or.kr">글로벌 스타트업 학교 베트남 해외 연수 데모데이 대상 (1위)</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-05-16 <Link className="text-blue-400"
                                                                               href="http://ncf.or.kr">글로벌 스타트업 학교 2기 합격</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-05-11 <Link className="text-blue-400"
                                                                               href="https://lgaiyouthcamp.or.kr/">LG AI 청소년 캠프 1기 LG 탐색상 수상</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-05-11 <Link className="text-blue-400"
                                                                               href="https://lgaiyouthcamp.or.kr/">LG AI 청소년 캠프 1기 수료</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-04-22 <Link className="text-blue-400"
                                                                               href="https://www.instagram.com/isangjeong.today/">@isangjeong.today (인천상정중학교의 오늘 급식)</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-04-06 <Link className="text-blue-400"
                                                                               href="https://timeline.imnyang.xyz">TimeTable
                        (Sekai 개조판 배포) [API 유실]</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-03-24 <Link className="text-blue-400"
                                                                               href="https://dreamhack.io/users/40116/wargame">Dreamhack
                        #133</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-03-24 <Link className="text-blue-400"
                                                                               href="https://launchpad.net/ubuntu/+mirror/mirror.imnyang.xyz-release">Ubuntu
                        Mirror</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-03-24 <Link className="text-blue-400"
                                                                               href="https://colab.research.google.com/drive/1a4G4hD9huBeGRZhEL2HNDMpqSuf4y61k?usp=sharing">내
                        목소리로 AI Cover 만들기</Link></p>

                    <p className="pl-2 text-muted-foreground">2024-01-26 <Link className="text-blue-400"
                                                                            href="https://github.com/imnyang/api">Fastapi를
                        통해 API 제작</Link></p>

                    <p className="pl-2 text-muted-foreground">2023-12-20 <span className="text-white">LG AI 청소년 캠프 1기 합격</span></p>

                    <p className="pl-2 text-muted-foreground">2023-11-14 <span className="text-white">인천상정중학교 2023학년도 SW 문제
                        해결 활동 우수상(2위) 수여</span></p>

                    <p className="pl-2 text-muted-foreground">2023-11-01 <Link className="text-blue-400" href="https://blog.imnyang.xyz">블로그 시작</Link></p>

                    <p className="pl-2 text-muted-foreground">2023-10-12 <Link className="text-blue-400"
                                                                            href="https://time.imnyang.xyz/">나는 로컬 시간을
                        알고 싶다</Link></p>

                    <p className="pl-2 text-muted-foreground">2023-09-24 <Link className="text-blue-400"
                                                                            href="https://github.com/sqlare/sqlr.kr/tree/main">sqlr.kr
                        기획 및 초기 개발</Link></p>

                    <p className="pl-2 text-muted-foreground">2023-09-02 <span className="text-white">선린인터넷고등학교 제6회
                        소프트웨어나늠축제 Layer7 부서 과정 이수</span></p>

                    <p className="pl-2 text-muted-foreground">2023-08-26 <Link className="text-blue-400"
                                                                            href="https://github.com/imnyang/Sekai">컴시간
                        시간표를 더 나아보이게 Sekai</Link></p>

                    <p className="pl-2 text-muted-foreground">2023-08-23 <Link className="text-blue-400"
                                                                            href="https://github.com/imnyang/discord-voice-rec">디스코드
                        통화방 녹음</Link></p>

                    <p className="pl-2 text-muted-foreground">2023-07-24 <span className="text-white">한국정보기술연구원이 주도하는 사이버 가디언즈 보안캠프 수료</span>
                    </p>

                    <p className="pl-2 text-muted-foreground">2023-03-20 <Link className="text-blue-400"
                                                                            href="https://github.com/imnyang/siru">디스코드에서
                        대화형 인공지능 Siru 제작</Link></p>

                    <p className="pl-2 text-muted-foreground">2023-05-15 <span className="text-white">한국 코드페어 예선 진출</span></p>

                    <p className="pl-2 text-muted-foreground">2023-03-14 <Link className="text-blue-400"
                                                                            href="https://github.com/imnyang/imnyang-timer">타이머</Link>
                    </p>

                    <p className="pl-2 text-muted-foreground">2022-12-20 <span className="text-white">2022 SW영재 창작대회 은상 수상</span>
                    </p>

                    <p className="pl-2 text-muted-foreground">2022-09-27 <span className="text-white">2022 삼성 주니어 SW 창작대회 본선 진출</span>
                    </p>

                    <p className="pl-2 text-muted-foreground">2022-05-23 <span className="text-white">2022학년도 석정초SW영재학급 첫 수업</span>
                    </p>

                    <p className="pl-2 text-muted-foreground">2022-07-26 <span className="text-white">제 14회 맑은하늘 맑은웃음 공모전에서 맑은웃음상 수여</span></p>

                    <p className="pl-2 text-muted-foreground">2021-11-14 <span className="text-white">Become a ZEPETO Creator 이수</span>
                    </p>

                    <p className="pl-2 text-muted-foreground">2021-05-19 <span className="text-white">소프트웨어와 전자신문이 주관한 소프트웨어재단 꿈찾기 캠프 이수</span>
                    </p>

                    <p className="pl-2 text-muted-foreground">2018-01-27 <span className="text-white">제4회 맑은하늘 맑은웃음 어린이 문예공모전에서 위닉스상(2위) 수여</span></p>

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
