function Hero() {


  return (

    <div className="hero">


      <div className="profile-image">


        <img
          src="/profile.png"
          alt="Raghuveer"
        />


      </div>



      <p className="hero-tag">
        GAME DEVELOPER
      </p>



      <h1>
        RAGHUVEER SINGH SHEKHAWAT 
      </h1>



      <p className="hero-description">

       I create interactive experiences, games, and digital products using Unity, 
       C#, and modern development tools. Passionate about gameplay programming, 
       I enjoy designing engaging mechanics, intuitive user experiences, and polished systems 
       that bring ideas to life. From fast-paced arcade games and platformers to puzzle adventures and desktop applications, 
       I focus on writing clean, efficient code while continuously exploring new technologies and improving my craft as a developer.

      </p>



      <div className="hero-buttons">


        <a
          href="/resume.pdf"
          download
        >

          DOWNLOAD RESUME

        </a>



        <a
          href="#projects"
        >

          VIEW PROJECTS

        </a>


      </div>


    </div>

  )

}


export default Hero;