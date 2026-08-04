import { useState, useRef, useEffect } from "react";

function Projects() {
  const unityProjects = [
    {
      title: "RATE MY RUN",
      engine: "UNITY • 2D PLATFORMER • KENNEY JAM 2026",
      description:
        "Fast-paced platformer where players race through a handcrafted level, collect coins, grab the key, and reach the exit before their star rating disappears.",
      features:
        "⭐ Time-based rating system • Coin collection • Platforming mechanics • Speedrun gameplay",
      poster: "/posters/ratemyrun.jpg",
      video: "/videos/rate-my-run.webm",
      link: "https://raghuve3r.itch.io/ratemyrun",
    },
    {
      title: "JUMP TAC TOE",
      engine: "UNITY • 3D STRATEGY GAME",
      description:
        "A unique 3D twist on Tic Tac Toe where players jump across floating platforms to claim their mark against an AI opponent.",
      features:
        "3D movement • AI opponent • Platform claiming system • Strategic gameplay",
      poster: "/posters/jumptactoe.jpg",
      video: "/videos/jump-tac-toe.webm",
      link: "https://raghuve3r.itch.io/jump-tac-toe",
    },
    {
      title: "4 DOORS",
      engine: "UNITY • 2D SPEEDRUN PLATFORMER",
      description:
        "A fast-paced platformer challenge where players complete four different doors while racing against the clock.",
      features:
        "Speedrun mechanics • Multiple challenges • Timer system • Platforming",
      poster: "/posters/4doors.jpg",
      video: "/videos/4-doors.webm",
      link: "https://raghuve3r.itch.io/4-doors",
    },
    {
      title: "SEQUENCE OUT",
      engine: "UNITY • 3D PUZZLE GAME",
      description:
        "A memory puzzle game inside a testing chamber. Players memorize cube sequences and recreate them to escape.",
      features:
        "Memory system • Sequence generation • Puzzle mechanics • Replayability",
      poster: "/posters/colormemory.jpg",
      video: "/videos/color-memory.webm",
      link: "https://raghuve3r.itch.io/sequence-out",
    },
    {
      title: "INTO THE DARK",
      engine: "UNITY • 2D ADVENTURE GAME",
      description:
        "A dark maze adventure where players collect keys, unlock doors, and escape from a mysterious environment.",
      features:
        "Exploration • Key system • Door unlocking • Atmospheric design",
      poster: "/posters/intothedark.jpg",
      video: "/videos/into-the-dark.webm",
      link: "https://raghuve3r.itch.io/into-the-dark",
    },
    {
      title: "KEYSTRIKE",
      engine: "UNITY • ARCADE TYPING SHOOTER",
      description:
        "An arcade shooter where your keyboard becomes your weapon. Type words appearing above enemies to attack them.",
      features:
        "Typing mechanics • Enemy waves • Score system • Increasing difficulty",
      poster: "/posters/keystrike.jpg",
      video: "/videos/keystrike.webm",
      link: "https://raghuve3r.itch.io/keystrike",
    },
    {
      title: "COLORDASH",
      engine: "UNITY • 3D ARCADE GAME",
      description:
        "A reaction-based color matching game focused on quick decisions and player responsiveness.",
      features:
        "Color mechanics • Obstacle navigation • Fast gameplay",
      poster: "/posters/colordash.jpg",
      video: "/videos/colordash.webm",
      link: "https://raghuve3r.itch.io/colordash",
    },
  ];

  const pygameProjects = [
    {
      title: "PAC-MAN PYTHON",
      engine: "PYGAME • ARCADE GAME",
      description:
        "A recreation of the classic Pac-Man experience featuring maze navigation, ghost AI behaviours, power pellets and scoring.",
      features:
        "Ghost AI • Power pellets • Difficulty progression",
      poster: "/posters/pacman.jpg",
      video: "/videos/pacman.webm",
      link: "https://github.com/RaghuveerSingh05/PacMan-pygame",
    },
    {
      title: "SNAKE GAME",
      engine: "PYGAME • ARCADE GAME",
      description:
        "A classic Snake game built with smooth controls, visual effects, scoring system and increasing difficulty.",
      features:
        "Growth system • Score tracking • Speed scaling",
      poster: "/posters/snake.jpg",
      video: "/videos/snake.webm",
      link: "https://github.com/RaghuveerSingh05/snake-game-py",
    },
    {
      title: "BREAKOUT",
      engine: "PYGAME • CLASSIC ARCADE",
      description:
        "A brick-breaking arcade game featuring particle effects, unbreakable blocks, timer system and multiple win conditions.",
      features:
        "Particle effects • Lives system • Timer mode • Score system",
      poster: "/posters/breakout.jpg",
      video: "/videos/breakout.webm",
      link: "https://github.com/RaghuveerSingh05/Breakout-Pygame",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof unityProjects[0] | typeof pygameProjects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = (project: typeof unityProjects[0] | typeof pygameProjects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const getButtonText = (link: string) => {
    if (link.includes("itch.io")) {
      return "🎮 Play on itch.io";
    } else {
      return "💻 Source Code";
    }
  };

  const Card = ({ project }: any) => {
    return (
      <div className="project">
        <div className="project-video" style={{ position: "relative" }}>
          <img
            src={project.poster}
            alt={`${project.title} poster`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "30px",
              background: "#000",
            }}
          />
        </div>
        <div className="project-info">
          <h3>{project.engine}</h3>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.features}</p>
          <div style={{ display: "flex", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
            <button
              onClick={() => openModal(project)}
              style={{
                padding: "12px 24px",
                borderRadius: "12px",
                border: "2px solid #6c5ce7",
                background: "rgba(108,92,231,0.15)",
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "48px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(108,92,231,0.3)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(108,92,231,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(108,92,231,0.15)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              🎥 Preview Gameplay
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "12px 24px",
                borderRadius: "12px",
                border: "2px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "48px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {getButtonText(project.link)}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="projects">
        <p className="section-tag">MY WORK</p>
        <h1>UNITY PROJECTS</h1>
        <div className="project-list">
          {unityProjects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
        <h1 style={{ marginTop: "150px" }}>PYGAME PROJECTS</h1>
        <div className="project-list">
          {pygameProjects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            padding: "20px",
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              borderRadius: "28px",
              maxWidth: "1000px",
              width: "90%",
              maxHeight: "85vh",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(108,92,231,0.1)",
              animation: "scaleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                background: "rgba(255,255,255,0.05)",
                border: "none",
                color: "white",
                fontSize: "28px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "rotate(0)";
              }}
            >
              ✕
            </button>
            
            <div style={{ padding: "24px 28px 16px 28px" }}>
              <h2 style={{ color: "white", fontSize: "28px", margin: "0 0 4px 0" }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: "#a78bfa", fontSize: "13px", letterSpacing: "2px", margin: 0 }}>
                {selectedProject.engine}
              </p>
            </div>
            
            <div style={{ padding: "0 28px" }}>
              <video
                ref={videoRef}
                src={selectedProject.video}
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  background: "#000",
                  display: "block",
                  aspectRatio: "16/9",
                }}
              >
                <source src={selectedProject.video} type="video/webm" />
              </video>
            </div>
            
            <div style={{ padding: "24px 28px 28px 28px", color: "white" }}>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#cccccc", margin: "0 0 12px 0" }}>
                {selectedProject.description}
              </p>
              <p style={{ fontSize: "14px", color: "#999", margin: 0, lineHeight: "1.6" }}>
                {selectedProject.features}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default Projects;