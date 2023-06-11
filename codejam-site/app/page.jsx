"use client";
import styles from "./page.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import PinkStrong from "@/app/_components/pinkStrong";
import UlC from "@/app/_components/ulC";
import {
  FaTwitch,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";

const pivots = {
  goal: "Goal",
  timeline: "Timeline",
  rules: "Rules",
  links: "Links",
  prizes: "Prizes",
  participants: "Participants",
  entries: "Entries",
  credits: "Credits",
  copyleft: "Copyleft",
};

/**
 * @type {string[]}
 *
 * @description these are the pivots that will be displayed in the navbar
 *              they are displayed in the order they are listed here
 *              if you want to add a new pivot, add it here
 *              the first element is the default pivot
 */
const displayPivots = [
  pivots.goal,
  pivots.timeline,
  pivots.rules,
  // pivots.links,
  pivots.prizes,
  // pivots.participants,
  // pivots.entries,
  pivots.credits,
];

const footerLinks = {
  discord: {
    href: "https://discord.gg/timeenjoyed",
    icon: FaDiscord,
  },
  twitch: {
    href: "https://twitch.tv/timeenjoyed",
    icon: FaTwitch,
  },
  twitter: {
    href: "https://twitter.com/TimeEnjoyed_",
    icon: FaTwitter,
  },
  instagram: {
    href: "https://www.instagram.com/time.enjoyed/",
    icon: FaInstagram,
  },
};


export default function Home() {
  // constant
  const SHOW_MENU_WIDTH = 1024; // don't forget to change this in page.module.css

  // state
  const [page, setPage] = useState(displayPivots[0]);
  const [showMenu, setShowMenu] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      if (newWidth < SHOW_MENU_WIDTH) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  /**
   * @param {pivots} pivot
   * @returns {JSX.Element} the page to be rendered
   */
  const pivotSwitch = (pivot) => {
    switch (pivot) {
      case pivots.goal /* GOAL PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Goal</h1>
              <p>
                The goal of this CodeJam is to challenge ourselves to build
                something engaging to share with others, ideally with others, and…
                to make it as fun as possible. 😀 It’s an opportunity to exercise
                skills in collaboration, creativity, and learning. How does it feel
                to work in a team? I don’t know - let’s find out!{" "}
              </p>

              <p>
            <span title={"The answer is always yes"}>
              Can we learn from each other
            </span>
                ? Can we improve each other’s{" "}
                <span
                    title={
                      "We think so! Everyone's been SUPER DUPER resourceful, like omg"
                    }
                >
              resourcefulness
            </span>
                ? If one person improves as a developer, or if a new friendship is
                made, we would be so happy and consider this event a success. As a
                bonus, maybe we can add a new project to our resume and gain a new
                network that lasts beyond this event. :)
              </p>
              <br />

              <h2>
                <PinkStrong>
                  Category:{" "}
                  <span title={"This was released on June 1st!"}>
                <u>Twitch-Integration</u>
              </span>
                </PinkStrong>
              </h2>
              <p>
                <span title={"Did you guess it? :)"}>Yeeeep</span>. Since this
                community was created on Twitch, we thought it'd be appropriate if
                the CodeJam revolved around Twitch related software! Don't get
                started yet, you still need the{" "}
                <span title={"To be released on July 7th"}>
              <b>THEME</b>
            </span>
                , but we wanted to let you know what you're signing up for.
              </p>
              <p>
                The options are really endless when it comes to Twitch integration.
                Examples:
              </p>
              <UlC>
                <li>Chat bots</li>
                <li>Twitch Extensions</li>
                <li>Game overlays</li>
                <li>Website</li>
                <li>
                  So on and so forth, as long as we can tell it's something that has
                  to do with Twitch. :)
                </li>
              </UlC>
              <h2>
                <PinkStrong>Updates...</PinkStrong>
              </h2>
              <p>
                Please make sure you're in{" "}
                <a href={"https://discord.gg/timeenjoyed"}>TimeEnjoyed's Discord</a>{" "}
                and registered in the codejam to be notified of all related updates
                ^^
              </p>
            </div>
        );

      case pivots.timeline /* TIMELINE PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Timeline</h1>
              <div>
                <PinkStrong>
                  <h4 className={styles.h4C}>June 1st</h4>
                </PinkStrong>
                <UlC>
                  <li>Signups start</li>
                  <UlC>
                    <li>
                      click the <b>signup</b> button in{" "}
                      <a href={"http://discord.gg/timeenjoyed"}>Discord</a> &gt;
                      CodeJam Category &gt; #signups
                    </li>
                  </UlC>
                </UlC>
              </div>

              <div>
                <PinkStrong>
                  <h4 className={styles.h4C}>June 30 - July 6</h4>
                </PinkStrong>
                <UlC>
                  <li>Group matchmaking (if needed)</li>
                  <li>
                    <a href={"http://codejam.timeenjoyed.dev/participants"} target="_blank" rel="noopener noreferrer">
                      Click here to see all participants so you can team up
                    </a>
                  </li>
                  <li>We will try to finalize teams before July 7th.</li>
                </UlC>
              </div>

              <div>
                <PinkStrong>
                  <h4 className={styles.h4C}>July 7</h4>
                </PinkStrong>
                <UlC>
                  <li>Competition Starts</li>
                  <li>Theme Announced in Discord</li>
                  <li>You'll get a Repository for your team in our Github.</li>
                </UlC>
              </div>

              <div>
                <PinkStrong>
                  <h4 className={styles.h4C}>July 16</h4>
                </PinkStrong>
                <UlC>
                  <li>
                    Competition Ends - we collect submissions before midnight UTC
                  </li>
                </UlC>
              </div>

              <div>
                <PinkStrong>
                  <h4 className={styles.h4C}>July 22nd</h4>
                </PinkStrong>
                <UlC>
                  <li>Code Review Stream!!!</li>
                  <li>Chat gets to vote on a bunch of categories.</li>
                  <UlC>
                    <li>
                      Each vote is going to cost 300 channel points, so please save
                      up!
                    </li>
                  </UlC>
                </UlC>
              </div>

              <div>
                <PinkStrong>
                  <h4 className={styles.h4C}>July 23rd (maybe)</h4>
                </PinkStrong>
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
        );

      case pivots.rules /* RULES PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Rules</h1>
              <h2>
                <PinkStrong>Eligibility</PinkStrong>
              </h2>
              <h4>Are there any limits?</h4>
              <UlC>
                <li>
                  Must be in our{" "}
                  <a href={"https://discord.gg/timeenjoyed"}>discord</a>
                </li>
                <UlC>
                  <li>Instructions to signup under CodeJam Category</li>
                </UlC>
                <li>Register before July 7th (highly preferred)</li>
              </UlC>
              <h2>
                <PinkStrong>Team Size</PinkStrong>
              </h2>
              <h4>
                Teams can be any size. During signup, people can select their
                preferred team option:
              </h4>
              <UlC>
                <li>Solo</li>
                <li>Team (self organized)</li>
                <li>Ideal team size: 3-4 = BEST!</li>
                <UlC>
                  <li>Ideal combination: juniors and seniors</li>
                  <li>
                    Let a Team Manager on discord know if you need assistance
                    finding a team
                  </li>
                </UlC>
              </UlC>
              <h2>
                <PinkStrong>Github Usage</PinkStrong>
              </h2>
              <UlC>
                <li>
                  We'll provide a Repository for your team. (tracks commits, etc)
                </li>
                <li>
                  Any open source license is fine. (
                  {/*<Link*/}
                  {/*    href={"#"}*/}
                  {/*    className={`${styles.navButton} ${*/}
                  {/*        pivot === copyleft ? styles.navActive : ""*/}
                  {/*    }`}*/}
                  {/*    onClick={() => setPage(copyleft)}*/}
                  {/*>*/}
                  {/*  copyleft license*/}
                  {/*</Link>*/}
                  <Link href={'#'} onClick={() => setPage(pivots.copyleft)}>
                    <small>copyleft license</small>
                  </Link>
                  )
                </li>
              </UlC>
              <h2>
                <PinkStrong>Submission Rules</PinkStrong>
              </h2>
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
                  <li>
                    Example: If making a twitch bot, we should be able to put in our
                    own bot token.
                  </li>
                </UlC>
                <li>Please exclude:</li>
                <UlC>
                  <li>node modules</li>
                  <li>build/target files</li>
                  <li>No executable, we compile it ourselves.</li>
                </UlC>
              </UlC>
              <h4>
                <PinkStrong>Compatibility: Windows 10+/Debian</PinkStrong>
              </h4>
              <UlC>
                <li>
                  If code requires high end gpu or we can’t run it, pls make a video
                  demo for us to play.
                </li>
                <li>If addt'l software is used, need very clear instructions.</li>
              </UlC>
            </div>
        );
        // case pivots.links /* LINKS PAGE */:
        //   return (
        //     <div className={styles.innerContentDiv}>
        //       <h1>All Links</h1>
        //       <p>Consider this page a site-map for links.</p>
        //       <p>
        //         <a href="#" onClick={() => setPage("copyleft")}>
        //           copyleft license
        //         </a>
        //       </p>
        //       <p>THing3</p>
        //     </div>
        //   );
      case pivots.prizes /* PRIZES PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Prizes</h1>
              <p>
                Everyone who participates will get a hoisted discord badge! Everyone
                also will get CodeJam 2023 stickers, as long as they provide a
                shipping address and the cost isn't over 10USD. We are still
                brainstorming other prizes that are digital or otherwise.
              </p>
            </div>
        );

      case pivots.participants /* PARTICIPANTS PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Participants</h1>
              <p>Registered people will show up here soon.</p>
            </div>
        );

      case pivots.entries /* ENTRIES PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Entries</h1>
              <p>This is where people submitted entries can be admired</p>
            </div>
        );

      case pivots.credits /* CREDITS PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Credits</h1>
              <p>
                First off, thanks Mysty for making this whole thing happen. Thanks
                to everyone who volunteered to test and contribute ideas. More
                credits will be given as the codejam continues.
              </p>
            </div>
        );
      case pivots.copyleft /* CREDITS PAGE */:
        return (
            <div className={styles.innerContentDiv}>
              <h1>Copyleft License</h1>
              <Link href="#" onClick={() => setPage(pivots.rules)}>
                Return
              </Link>
              <p>
                Technically a copyright license, but often referred to as
                'copyleft'.
              </p>
              <p>
                I asked ChatGPT: "can you explain what a copy left license does in
                simple terms, especially when it comes to using it in a code jam"
              </p>
              <p>It replied:</p>
              <UlC>
                <li>
                  Certainly! In simple terms, a copyleft license is a type of
                  software license that ensures that the software and its
                  modifications remain free and open-source. It is designed to
                  protect the freedom of the software and its users.
                </li>
                <li>
                  When you use a copyleft license in a code jam, it means that any
                  code you contribute or modify during the jam must also be made
                  available under the same copyleft license. This requirement
                  ensures that the code and its derivatives stay open-source and
                  freely available to others.
                </li>
                <li>
                  Let's say you participate in a code jam and use a copyleft license
                  for your code. If someone else wants to use or modify your code,
                  they are also required to make their changes available under the
                  same copyleft license. This ensures that the software community
                  continues to benefit from the contributions and encourages
                  collaboration and sharing of code.
                </li>
                <li>
                  Copyleft licenses are often used in code jams and open-source
                  projects to foster a culture of collaboration, sharing, and
                  innovation. They help ensure that the code remains freely
                  accessible, encourages others to contribute improvements, and
                  prevents the code from being turned into proprietary software.
                </li>
              </UlC>
            </div>
        );

      default:
        return pivotSwitch(displayPivots[0]); // default to first pivot
    }
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{page} | Code Jam</title>
      </Head>

      {/* Container for everything (PARENT CONTAINER) */}
      <div className={styles.container}>
        {/* Header Container */}
        <div className={styles.header}>
          <div className={styles.headerLogo} title={"yiiiiiissssss"}>
            <span className={styles.teHeader}>TimeEnjoyed's</span>
            <span className={`${styles.cjHeader} ${styles.rainbowText}`}>
              &lt;codejam/&gt;
            </span>
          </div>
        </div>

        {/* Container for all NavBar and Content */}
        <div className={styles.innerContainer}>
          {/* MAIN NAVBAR CONTAINER E.G NavBar <- (Left of Content) */}
          <nav className={styles.navContainer}>
            {windowWidth < SHOW_MENU_WIDTH && (
              <button
                className={styles.hamburgerIconContainer}
                onClick={() => setShowMenu(!showMenu)}
                aria-label={`${showMenu ? "Hide" : "Show"} navigation menu`}
              >
                <FaBars
                  className={styles.hamburgerIcon}
                  aria-hidden="true"
                  role="presentation"
                  tabIndex="-1"
                />
              </button>
            )}

            {/*
              render pivots generically
              => rendered buttons can be adjusted within displayPivots
            */}
            {Boolean(
              (windowWidth < SHOW_MENU_WIDTH && showMenu) ||
                windowWidth >= SHOW_MENU_WIDTH
            ) &&
              displayPivots.map((pivot) => (
                <Link
                  key={pivot}
                  className={`${styles.navButton} ${page === pivot ? styles.navActive : ''}`}
                  href={"#"}
                  onClick={() => setPage(pivot)}
                >
                  {pivot}
                </Link>
              ))}
          </nav>

          {/* MAIN CONTENT CONTAINER E.G -> Content (Right of NavBar) */}
          <div className={styles.contentContainer}>
            <div className={styles.contentDiv}>{pivotSwitch(page)}</div>
          </div>
          {/* OUTSIDE CONTENT CONTAINER */}

          {/* FOOTER SOCIALS */}
          <footer className={styles.footerSocialsContainer}>
            {/*
              render footer links generically
              => rendered links can be adjusted within footerLinks
            */}
            {[...Object.entries(footerLinks)].map(([key, value]) => {
              const Icon = value.icon;

              return (
                <Link
                  key={key}
                  href={value.href}
                  target={"_blank"}
                  className={styles.footerSocials}
                  rel="noreferrer noopener nofollow"
                  aria-label={key}
                >
                  <Icon
                    style={{ color: "#faa5b4", width: "2.5rem", speak: "none" }}
                    aria-hidden="true"
                    role="presentation"
                    tabIndex="-1"
                  />
                  <div className={styles.socialsPopover}>{key}</div>
                </Link>
              );
            })}
          </footer>
        </div>
        {/* OUTSIDE INNER CONTAINER */}
      </div>
    </div>
  );
}
