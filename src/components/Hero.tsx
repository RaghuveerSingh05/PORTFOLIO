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
        GAME DEVELOPER • CSE STUDENT
      </p>



      <h1>
        RAGHUVEER
      </h1>



      <p className="hero-description">

        I create interactive experiences,
        games and digital products using
        Unity, C# and modern technologies.

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