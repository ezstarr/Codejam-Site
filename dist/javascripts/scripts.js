const contentContainer = document.getElementById("content-container");
const btnAbout =document.getElementById("btn-about");
const btnTimeline = document.getElementById("btn-timeline");
const btnRules = document.getElementById("btn-rules");
const scrollableContent = document.getElementById("scrollable-content");
const btnEntries = document.getElementById("btn-entries");
const btnPrizes = document.getElementById("btn-prizes");
const navContainer = document.getElementById('nav-container')
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const menuToggle = document.getElementById('menuToggle')
let navContainerViewstate = false;

function loadpage(page) {
    contentContainer.innerHTML = page.innerHTML
}

menuToggle.addEventListener("click", function(e) {
    if (isMobile) {
        if (navContainerViewstate === false) {
            navContainer.style.visibility = "visible";
            navContainer.style.transform = "translateY(0)";
            navContainer.style.transition = "1s";
            navContainerViewstate = true;
        } else {
            navContainer.style.visibility = "hidden";
            navContainer.style.transform = "translateY(130%)";
            navContainer.style.transition = "1s";
            navContainerViewstate = false;
        }
    } 
})

function btnStyling(theBtn){
    const allNavBtn = document.querySelectorAll(".nav-btn")
    if (isMobile) {
        navContainer.style.visibility = "hidden";
        navContainer.style.transform = "translateY(130%)";
        navContainer.style.transition = "1s";
        console.log("what - does this print")
    } else {
        allNavBtn.forEach(element => element.classList.remove('nav-drop-shadow'))
        theBtn.classList.add('nav-drop-shadow')
        contentContainer.classList.add('col')
    }
}

btnAbout.addEventListener("click", e => {
    btnStyling(e.target)
    contentContainer.innerHTML = `
        <h1>Goal</h1>
            <p>The goal of this CodeJam is to challenge ourselves to build something engaging to share with others, ideally with others, and… to make it as fun as possible. 😀 It’s an opportunity to exercise skills in collaboration, creativity, and learning. How does it feel to work in a team? I don’t know - let’s find out!
            </p>

            <p>Can we learn from each other? Can we improve each other’s resourcefulness? If one person improves as a developer, or if a new friendship is made, we would be so happy and consider this event a success. As a bonus, maybe we can add a new project to our resume and gain a new network that lasts beyond this event. :)</p>
            `
    console.log("clickedddd", e)

})

btnTimeline.addEventListener("click", e => {
    console.log(e)
    btnStyling(e.target)
    contentContainer.innerHTML = `
        <h1>Timeline</h1>
            <div><strong>June 1st </strong> 
                <ul>
                    <li>Signups start
                    <li>Category released
                    <li>Rules provided
                </ul>
            </div>
            
            <div><strong>June 30 - July 7 </strong> 
                <ul>
                    <li>Group matchmaking (if needed)
                </ul>
            </div>
            
            <div><strong>July 7th </strong> 
                <ul>
                    <li>Competition Starts
                    <li>Theme Released
                </ul>
            </div>
            
            <div><strong>July 16th </strong> 
                <ul>
                    <li>Competition Ends</li>
                </ul>
            </div>
            
            <div><strong>July 23rd (maybe) </strong> 
                <ul>
                    <li>Community Stream
                        <ul>
                            <li>Garctic Phone</li>
                            <li>Marbles on Stream</li>
                            <li>Your pick?</li>
                        </ul>
                    </li>
                    <li>Mailing Addresses Collected
                        <ul><li>optional - only if you want stickers</li>
                        </ul></li>
                    
                
                </ul>
            </div>
               `
})

btnRules.addEventListener("click", e => {
    btnStyling(e.target)
    scrollableContent.innerHTML = `
        <h1>Eligibility</h1>        
            <ul>
                <li>Must be in TimeEnjoyed's <a href="https://discord.gg/timeenjoyed">discord</a>
                <li>Ideally sign up before start date (June 1st)
            </ul>
         
        <h1>Team Size Options</h1>
            <ul>
                <li>Solo
                <li>Group
                    <ul>
                        <li>Ideally 3-4. BEST!</li>
                        <li>Ideal combo: Juniors and Seniors</li>
                    </ul>
                </li>
            </ul>
            
        <h1>Github Repo</h1>
            <ul>
                <li>Can have any license
                <li>Add bot as first thing
                    <ul>
                        <li>There will be clear instructions
                    </ul>
                </li>
            </ul>
        <h1>Compatibility: Windows 10+ or Debian-based</h1>
            <ul>
                <li>If code requires high end gpu, or we can't run it, please make a video demo for us to play
                <li>If addt'l software needed, provide very clear instructions
                <li> Mac ok if not x86-64
            </ul>
   
        
            `
    console.log("clickedddd", e)
})

btnPrizes.addEventListener("click", e => {
    btnStyling(e.target)
        scrollableContent.innerHTML = `
        <h1>Prizes</h1>        
            <ul>
                <li>Stickers 
                <li>Discord hoisted badge (has emoji)
                <li>(More TBD)
                
            </ul>
         
        <h1>Team Size Options</h1>
            <ul>
                <li>Solo
                <li>Group
                    <ul>
                        <li>Ideally 3-4. BEST!</li>
                        <li>Ideal combo: Juniors and Seniors</li>
                    </ul>
                </li>
            </ul>
            
        <h1>Github Repo</h1>
            <ul>
                <li>Can have any license
                <li>Add bot as first thing
                    <ul>
                        <li>There will be clear instructions
                    </ul>
                </li>
            </ul>
        <h1>Compatibility: Windows 10+ or Debian-based</h1>
            <ul>
                <li>If code requires high end gpu, or we can't run it, please make a video demo for us to play
                <li>If addt'l software needed, provide very clear instructions
                <li> Mac ok if not x86-64
            </ul>
   
        
            `
    console.log("clickedddd", e)
})