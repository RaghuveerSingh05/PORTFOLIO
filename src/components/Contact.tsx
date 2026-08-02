function Contact() {

  return (

    <section className="contact">

      {/* Background Controller */}
      <svg
        className="controller-bg"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M146 175c-37 0-68 30-68 68 0 15 4 29 12 41l36 57c8 12 21 19 35 19 14 0 27-7 35-19l33-50h54l33 50c8 12 21 19 35 19 14 0 27-7 35-19l36-57c8-12 12-26 12-41 0-38-31-68-68-68-26 0-48 14-60 35H206c-12-21-34-35-60-35z"
          fill="none"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* D-Pad */}
        <rect x="145" y="232" width="50" height="12" rx="4" fill="white"/>
        <rect x="164" y="213" width="12" height="50" rx="4" fill="white"/>

        {/* Left Stick */}
        <circle cx="165" cy="305" r="20" fill="none" stroke="white" strokeWidth="8"/>

        {/* Right Stick */}
        <circle cx="345" cy="305" r="20" fill="none" stroke="white" strokeWidth="8"/>

        {/* Face Buttons */}
        <circle cx="355" cy="215" r="10" fill="white"/>
        <circle cx="390" cy="245" r="10" fill="white"/>
        <circle cx="355" cy="275" r="10" fill="white"/>
        <circle cx="320" cy="245" r="10" fill="white"/>

      </svg>

      <div className="contact-content">

        <p className="section-tag">
          CONTACT
        </p>

        <h1>
          LET'S WORK
          <br />
          TOGETHER
        </h1>

        <p className="contact-text">
          Have an idea, project or collaboration?
          <br />
          Feel free to reach out.
        </p>

        <div className="contact-links">

          <a
            href="https://github.com/RaghuveerSingh05"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raghuveer-singh-shekhawat-ab589332b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
href="mailto:raghuveersinghshekhawat2005@gmail.com"
className="email-link"
>
raghuveersinghshekhawat2005@gmail.com
</a>

        </div>

      </div>

    </section>

  )

}

export default Contact;