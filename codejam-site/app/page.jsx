"use client";
import styles from './page.module.css'
import Head from "next/head";
import {useState} from "react";
import PinkStrong from "@/app/_components/pinkStrong";
import UlC from "@/app/_components/ulC";
import {FaTwitch, FaDiscord, FaTwitter, FaInstagram} from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  const [page, setPage] = useState('goal');
  return (
      <>
      <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Code Jam</title>
      </Head>

      {/* Container for everything (PARENT CONTAINER) */}
      <div className={styles.container}>

          {/* Header Container */}
          <div className={styles.header}>
              <div className={styles.headerLogo}>
                  <span className={styles.teHeader}>TimeEnjoyed's</span>
                  <span className={`${styles.cjHeader} ${styles.rainbowText}`}>&lt;codejam/&gt;</span>
              </div>
          </div>

          {/* Container for all NavBar and Content */}
          <div className={styles.innerContainer}>

              {/* MAIN NAVBAR CONTAINER E.G NavBar <- (Left of Content) */}
              <nav className={styles.navContainer}>
                  <button className={`${styles.navButton} ${page === 'goal' ? styles.navActive : ''}`} onClick={() => setPage('goal')}>Goal</button>
                  <button className={`${styles.navButton} ${page === 'timeline' ? styles.navActive: ''}`} onClick={() => setPage('timeline')}>Timeline</button>
                  <button className={`${styles.navButton} ${page === 'rules' ? styles.navActive: ''}`} onClick={() => setPage('rules')}>Rules</button>
                  <button className={`${styles.navButton} ${page === 'prizes' ? styles.navActive: ''}`} onClick={() => setPage('prizes')}>Prizes</button>
                  {/*<button className={`${styles.navButton} ${page === 'participants' ? styles.navActive: ''}`} onClick={() => setPage('participants')}>Participants</button>*/}
                  {/*<button className={`${styles.navButton} ${page === 'entries' ? styles.navActive: ''}`} onClick={() => setPage('entries')}>Entries</button>*/}
                  <button className={`${styles.navButton} ${page === 'credits' ? styles.navActive: ''}`} onClick={() => setPage('credits')}>Credits</button>
              </nav>

              {/* MAIN CONTENT CONTAINER E.G -> Content (Right of NavBar) */}
              <div className={styles.contentContainer}>

                  {/* GOAL PAGE */}

                  <div className={page === 'goal' ? styles.contentDiv: styles.hide}>
                      <div className={styles.innerContentDiv}>
                          <h1>Goal</h1>
                          <p>
                          The goal of this CodeJam is to challenge ourselves to build something engaging to share with others, ideally with others, and… to make it as fun as possible. 😀 It’s an opportunity to exercise skills in collaboration, creativity, and learning. How does it feel to work in a team? I don’t know - let’s find out! </p>

                          <p>Can we learn from each other? Can we improve each other’s resourcefulness? If one person improves as a developer, or if a new friendship is made, we would be so happy and consider this event a success. As a bonus, maybe we can add a new project to our resume and gain a new network that lasts beyond this event. :)</p>
                      </div>
                  </div>

                  {/* TIMELINE PAGE */}

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


                  {/* RULES PAGE */}

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

                  {/* PRIZES PAGE */}

                  <div className={page === 'prizes' ? styles.contentDiv: styles.hide}>
                      <div className={styles.innerContentDiv}>
                          <h1>Prizes</h1>
                          <p>Everyone who participates will get a hoisted discord badge! Everyone also will get CodeJam 2023 stickers, as long as they provide a shipping address and the cost isn't over 10USD. We are still brainstorming other prizes that are digital or otherwise.</p>
                      </div>
                  </div>

                   {/*PARTICIPANTS PAGE*/}

                  <div className={page === 'participants' ? styles.contentDiv: styles.hide}>
                      <div className={styles.innerContentDiv}>
                          <h1>Participants</h1>
                          <p>Registered people will show up here soon.</p>
                      </div>
                  </div>


                  {/* ENTRIES PAGE */}

                  {/*<div className={page === 'entries' ? styles.contentDiv: styles.hide}>*/}
                  {/*    <div className={styles.innerContentDiv}>*/}
                  {/*        <h1>Entries</h1>*/}
                  {/*        <p>This is where people submitted entries can be admired</p>*/}
                  {/*    </div>*/}
                  {/*</div>*/}


                  {/* CREDITS PAGE */}

                  <div className={page === 'credits' ? styles.contentDiv: styles.hide}>
                      <div className={styles.innerContentDiv}>
                          <h1>Credits</h1>
                          <p>First off, thanks Mysty for making this whole thing happen. Thanks to everyone who volunteered to test and contribute ideas. More credits will be given as the codejam continues.</p>
                      </div>
                  </div>

              </div>
              {/* OUTSIDE CONTENT CONTAINER */}

              {/* FOOTER SOCIALS */}
              <div className={styles.footerSocialsContainer}>
                  <Link href={'https://discord.gg/timeenjoyed'} target={"_blank"} className={styles.footerSocials}>
                      <FaDiscord style={{color: "#faa5b4", width: "2.5rem"}} />
                      <div className={styles.socialsPopover}>
                          Discord
                      </div>
                  </Link>

                  <Link href={'https://twitch.tv/timeenjoyed'} target={"_blank"} className={styles.footerSocials}>
                      <FaTwitch style={{color: "#faa5b4", width: "2.5rem"}}/>
                      <div className={styles.socialsPopover}>
                          Twitch
                      </div>
                  </Link>

                  <Link href={'https://twitter.com/TimeEnjoyed_'} target={"_blank"} className={styles.footerSocials}>
                      <FaTwitter style={{color: "#faa5b4", width: "2.5rem"}}/>
                      <div className={styles.socialsPopover}>
                          Twitter
                      </div>
                  </Link>

                  <Link href={'https://www.instagram.com/time.enjoyed/'} target={"_blank"} className={styles.footerSocials}>
                      <FaInstagram style={{color: "#faa5b4", width: "2.5rem"}}/>
                      <div className={styles.socialsPopover}>
                          Instagram
                      </div>
                  </Link>
              </div>

          </div>
          {/* OUTSIDE INNER CONTAINER */}
      </div>
      </>
  )
}
