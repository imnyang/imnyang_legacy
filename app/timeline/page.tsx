import Link from "next/link";

export default function timeline() {
    return (
        <>
            <main id="Root" className="flex flex-col items-center justify-center w-full h-[100vh]">
                <div className="items-start">
                    <h1 className={"text-3xl font-black"}>Timeline</h1>
                    <br/>
                    <p className="pl-2 text-muted-foreground">2024-04-06 <Link className="text-blue-400"
                                                                               href="https://timeline.imnyang.xyz">TimeTable
                        (Sekai 개조판 배포) [API 유실]</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-03-24 <Link className="text-blue-400"
                                                                               href="https://dreamhack.io/users/40116/wargame">Dreamhack
                        #133</Link></p>
                    <p className="pl-2 text-muted-foreground">2024-03-24 <Link className="text-blue-400"
                                                                               href="https://launchpad.net/ubuntu/+mirror/ubuntu.imnyang.xyz-release">Ubuntu
                        Mirror [Broken]</Link></p>
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

        </>
    )
}