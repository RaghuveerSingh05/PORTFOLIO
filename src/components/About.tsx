function About() {

  return (

    <section className="about">


      <div className="about-card">


        <div className="profile-label">
          PLAYER PROFILE
        </div>



        <div className="about-content">


          <img
            src="/profile.png"
            alt="Raghuveer"
          />



          <div className="about-text">


            <h1>
              Raghuveer Singh
            </h1>


            <h3>
              Game Developer
            </h3>



            <p>
              I create interactive experiences, games, and digital products using Unity, 
              C#, and modern development tools. Passionate about gameplay programming, 
              I enjoy designing engaging mechanics, intuitive user experiences, and polished 
              systems that bring ideas to life. From fast-paced arcade games and platformers to puzzle adventures and desktop applications, 
              I focus on writing clean, efficient code while continuously exploring new technologies and improving my craft as a developer.
            </p>



            <div className="skills">


              <span>
                UNITY
              </span>


              <span>
                C#
              </span>


              <span>
                REACT
              </span>


              <span>
                BLENDER
              </span>


            </div>



            <a
              href="/resume.pdf"
              download
            >

              <button>
                DOWNLOAD RESUME
              </button>


            </a>


          </div>


        </div>


      </div>


    </section>

  )

}


export default About;