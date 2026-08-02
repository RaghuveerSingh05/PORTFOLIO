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
              Game Developer & CSE Student
            </h3>



            <p>
              I create interactive experiences,
              games and digital products using
              Unity, C#, React and modern
              development tools.
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