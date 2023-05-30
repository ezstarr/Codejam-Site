"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Head from "next/head";
import {useState} from "react";
import PinkStrong from "@/app/_components/pinkStrong";
import UlC from "@/app/_components/ulC";


export default function Home() {
  const [page, setPage] = useState('goal');
  return (
      <>
      <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Code Jam</title>
      </Head>

      <div className={styles.container}>

          <div className={styles.header}>
              <span className={styles.teHeader}>TimeEnjoyed's</span>
              <span className={styles.cjHeader}>&lt;codejam/&gt;</span>
          </div>

          <div className={styles.innerContainer}>

            <nav className={styles.navContainer}>
                <button className={`${styles.navButton} ${page === 'goal' ? styles.navActive : ''}`} onClick={() => setPage('goal')}>Goal</button>
                <button className={`${styles.navButton} ${page === 'timeline' ? styles.navActive: ''}`} onClick={() => setPage('timeline')}>Timeline</button>
                <button className={`${styles.navButton} ${page === 'rules' ? styles.navActive: ''}`} onClick={() => setPage('rules')}>Rules</button>
                <button className={`${styles.navButton} ${page === 'prizes' ? styles.navActive: ''}`} onClick={() => setPage('prizes')}>Prizes</button>
                <button className={`${styles.navButton} ${page === 'entries' ? styles.navActive: ''}`} onClick={() => setPage('entries')}>Entries</button>
                <button className={`${styles.navButton} ${page === 'credits' ? styles.navActive: ''}`} onClick={() => setPage('credits)')}>Credits</button>
            </nav>
            <div className={styles.contentContainer}>
                <div className={page === 'goal' ? styles.contentDiv: styles.hide}>
                    <div className={styles.innerContentDiv}>
                        <h1>Goal</h1>
                        <p>
                        The goal of this CodeJam is to challenge ourselves to build something engaging to share with others, ideally with others, and… to make it as fun as possible. 😀 It’s an opportunity to exercise skills in collaboration, creativity, and learning. How does it feel to work in a team? I don’t know - let’s find out! </p>

                        <p>Can we learn from each other? Can we improve each other’s resourcefulness? If one person improves as a developer, or if a new friendship is made, we would be so happy and consider this event a success. As a bonus, maybe we can add a new project to our resume and gain a new network that lasts beyond this event. :)</p>
                    </div>
                </div>
                <div className={page === 'timeline' ? styles.contentDiv: styles.hide}>
                    <div className={styles.innerContentDiv}>
                        <h1>Timeline</h1>
                        <div><PinkStrong>June 1st</PinkStrong>
                            <UlC>
                                <li>Category released</li>
                                <li>Signups start</li>
                                <li>Rules provided</li>
                            </UlC>
                        </div>

                        <div><PinkStrong>June 30 - July 7</PinkStrong>
                            <UlC>
                                <li>Group matchmaking (if needed)</li>
                            </UlC>
                        </div>

                        <div><PinkStrong>July 7th </PinkStrong>
                            <UlC>
                                <li>Competition Starts</li>
                                    <li>Theme Released</li>
                            </UlC>
                        </div>

                        <div><PinkStrong>July 16th </PinkStrong>
                            <UlC>
                                <li>Competition Ends</li>
                            </UlC>
                        </div>

                        <div><PinkStrong>July 23rd (maybe) </PinkStrong>
                            <UlC>
                                <li>Community Stream</li>
                                    <UlC>
                                        <li>Garctic Phone</li>
                                        <li>Marbles on Stream</li>
                                        <li>Your pick?</li>
                                    </UlC>
                                <li>Mailing Addresses Collected</li>
                                    <UlC>
                                        <li>optional - only if you want stickers</li>
                                    </UlC>
                            </UlC>
                        </div>
                    </div>
                </div>

                <div className={page === 'rules' ? styles.contentDiv: styles.hide}>
                    <div className={styles.innerContentDiv}>
                        <h1>Rules</h1>
                        <h2><PinkStrong>Eligibility</PinkStrong></h2>
                        <h4>Are there any limits?</h4>
                            <UlC>
                                <li>Must be in our <a href={"https://discord.gg/timeenjoyed"}>discord</a></li>
                                <li>Register before July 7th (highly preferred)</li>
                            </UlC>
                        <h2><PinkStrong>Team Size</PinkStrong></h2>
                        <h4>Teams can be any size. During signup, people can select their preferred team option:</h4>
                            <UlC>
                                <li>Solo</li>
                                <li>Team (auto assigned)</li>
                                <li>Team (self organized)</li>
                                <li>Ideal team size: 3-4 = BEST!</li>
                                    <UlC>
                                        <li>Ideal combination: juniors and seniors</li>
                                    </UlC>
                            </UlC>
                        <h2><PinkStrong>Github Usage</PinkStrong></h2>
                        <UlC>
                            <li>Project directory should be linked to CodeJam Github.</li>
                            <li>Any license is fine.</li>
                            <li>Must add the bot first thing.</li>
                                <UlC>
                                    <li>You'll receive clear instructions.</li>
                                </UlC>
                        </UlC>
                        <h2><PinkStrong>Submission Rules</PinkStrong></h2>
                        <UlC>
                            <li>Please include:</li>
                            <UlC>
                                <li>A readme explaining:</li>
                                    <UlC>
                                        <li>What the project is</li>
                                        <li>What language its written in</li>
                                        <li>How to compile and run the application</li>

                                    </UlC>
                                <li>A file containing all package requirements</li>
                                <li>All assets with necessary license</li>
                            </UlC>
                            <li>Shouldn't be a pain to set up (no more than 15 mins).</li>
                            <li>No tokens/keys that can’t be made for free by ourselves.</li>
                                <UlC>
                                    <li>Example: If making a twitch bot, we should be able to put in our own bot token.</li>
                                </UlC>
                            <li>Please exclude:</li>
                                <UlC>
                                    <li>node modules</li>
                                    <li>build/target files</li>
                                    <li>No executable, we compile it ourselves.</li>
                                </UlC>
                        </UlC>
                        <h4><PinkStrong>Compatibility: Windows 10+/Debian</PinkStrong></h4>
                        <UlC>
                            <li>If code requires high end gpu or we can’t run it, pls make a video demo for us to play.</li>
                            <li>If addt'l software is used, need very clear instructions.</li>
                        </UlC>
                    </div>
                </div>
                <div className={page === 'prizes' ? styles.contentDiv: styles.hide}>
                    <div className={styles.innerContentDiv}>
                        <h1>Prizes</h1>


                    </div>
                </div>
            </div>

            </div>
          </div>

      </>
  )
}
