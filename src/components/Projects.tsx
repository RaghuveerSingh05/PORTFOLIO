import { useEffect, useRef } from "react";

function Projects(){

const unityProjects = [

{
title:"RATE MY RUN",
engine:"UNITY • 2D PLATFORMER • KENNEY JAM 2026",
description:
"Fast-paced platformer where players race through a handcrafted level, collect coins, grab the key, and reach the exit before their star rating disappears.",
features:
"⭐ Time-based rating system • Coin collection • Platforming mechanics • Speedrun gameplay",
poster:"/posters/ratemyrun.jpg",
video:"/videos/rate-my-run.webm",
link:"https://raghuve3r.itch.io/ratemyrun"
},


{
title:"JUMP TAC TOE",
engine:"UNITY • 3D STRATEGY GAME",
description:
"A unique 3D twist on Tic Tac Toe where players jump across floating platforms to claim their mark against an AI opponent.",
features:
"3D movement • AI opponent • Platform claiming system • Strategic gameplay",
poster:"/posters/jumptactoe.jpg",
video:"/videos/jump-tac-toe.webm",
link:"https://raghuve3r.itch.io/jump-tac-toe"
},


{
title:"4 DOORS",
engine:"UNITY • 2D SPEEDRUN PLATFORMER",
description:
"A fast-paced platformer challenge where players complete four different doors while racing against the clock.",
features:
"Speedrun mechanics • Multiple challenges • Timer system • Platforming",
poster:"/posters/4doors.jpg",
video:"/videos/4-doors.webm",
link:"https://raghuve3r.itch.io/4-doors"
},


{
title:"SEQUENCE OUT",
engine:"UNITY • 3D PUZZLE GAME",
description:
"A memory puzzle game inside a testing chamber. Players memorize cube sequences and recreate them to escape.",
features:
"Memory system • Sequence generation • Puzzle mechanics • Replayability",
poster:"/posters/colormemory.jpg",
video:"/videos/color-memory.webm",
link:"https://raghuve3r.itch.io/sequence-out"
},


{
title:"INTO THE DARK",
engine:"UNITY • 2D ADVENTURE GAME",
description:
"A dark maze adventure where players collect keys, unlock doors, and escape from a mysterious environment.",
features:
"Exploration • Key system • Door unlocking • Atmospheric design",
poster:"/posters/intothedark.jpg",
video:"/videos/into-the-dark.webm",
link:"https://raghuve3r.itch.io/into-the-dark"
},


{
title:"KEYSTRIKE",
engine:"UNITY • ARCADE TYPING SHOOTER",
description:
"An arcade shooter where your keyboard becomes your weapon. Type words appearing above enemies to attack them.",
features:
"Typing mechanics • Enemy waves • Score system • Increasing difficulty",
poster:"/posters/keystrike.jpg",
video:"/videos/keystrike.webm",
link:"https://raghuve3r.itch.io/keystrike"
},


{
title:"COLORDASH",
engine:"UNITY • 3D ARCADE GAME",
description:
"A reaction-based color matching game focused on quick decisions and player responsiveness.",
features:
"Color mechanics • Obstacle navigation • Fast gameplay",
poster:"/posters/colordash.jpg",
video:"/videos/colordash.webm",
link:"https://raghuve3r.itch.io/colordash"
}

];





const pygameProjects = [

{
title:"PAC-MAN PYTHON",
engine:"PYGAME • ARCADE GAME",
description:
"A recreation of the classic Pac-Man experience featuring maze navigation, ghost AI behaviours, power pellets and scoring.",
features:
"Ghost AI • Multiple modes • Power pellets • Difficulty progression",
poster:"/posters/pacman.jpg",
video:"/videos/pacman.webm",
link:"https://github.com/RaghuveerSingh05/PacMan-pygame"
},


{
title:"SNAKE GAME",
engine:"PYGAME • ARCADE GAME",
description:
"A classic Snake game built with smooth controls, visual effects, scoring system and increasing difficulty.",
features:
"Growth system • Score tracking • Speed scaling",
poster:"/posters/snake.jpg",
video:"/videos/snake.webm",
link:"https://github.com/RaghuveerSingh05/snake-game-py"
},


{
title:"BREAKOUT",
engine:"PYGAME • CLASSIC ARCADE",
description:
"A brick-breaking arcade game featuring particle effects, unbreakable blocks, timer system and multiple win conditions.",
features:
"Particle effects • Lives system • Timer mode • Score system",
poster:"/posters/breakout.jpg",
video:"/videos/breakout.webm",
link:"https://github.com/RaghuveerSingh05/Breakout-Pygame"
}

];




const Card = ({ project }: any) => {

const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {

    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(

        ([entry]) => {

            if (entry.isIntersecting) {

                video.play().catch(() => {});

            } else {

                video.pause();

            }

        },

        {

            threshold: 0.4

        }

    );

    observer.observe(video);

    return () => observer.disconnect();

}, []);

return(

<div className="project">

<div
className="project-video"


>

<video

ref={videoRef}
src={project.video}
muted
loop
playsInline
preload="metadata"

>

<source

src={project.video}

type="video/webm"

/>

</video>

</div>

<div className="project-info">

<h3>

{project.engine}

</h3>

<h2>

{project.title}

</h2>

<p>

{project.description}

</p>

<p>

{project.features}

</p>

<a

href={project.link}

target="_blank"

rel="noreferrer"

>

VIEW PROJECT →

</a>

</div>

</div>

);

};





return(

<div className="projects">


<p className="section-tag">
MY WORK
</p>


<h1>
UNITY PROJECTS
</h1>



<div className="project-list">


{

unityProjects.map((project,index)=>(

<Card

key={index}

project={project}

/>

))

}


</div>




<h1 style={{marginTop:"150px"}}>

PYGAME PROJECTS

</h1>




<div className="project-list">


{

pygameProjects.map((project,index)=>(

<Card

key={index}

project={project}

/>

))

}


</div>



</div>


)

}


export default Projects;