function FloatingSVG() {

  return (

    <div className="floating-svg">


      {/* Cube */}
      <svg
        className="svg-cube"
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >

        <polygon
          points="60,10 110,35 60,60 10,35"
          fill="#6366f1"
        />

        <polygon
          points="10,35 60,60 60,110 10,85"
          fill="#818cf8"
        />

        <polygon
          points="60,60 110,35 110,85 60,110"
          fill="#4f46e5"
        />

      </svg>



      {/* Circle */}
      <svg
        className="svg-circle"
        width="80"
        height="80"
      >

        <circle
          cx="40"
          cy="40"
          r="35"
          fill="#ec4899"
        />

      </svg>



      {/* Small diamond */}

      <svg
        className="svg-diamond"
        width="50"
        height="50"
      >

        <rect
          x="10"
          y="10"
          width="30"
          height="30"
          rx="5"
          transform="rotate(45 25 25)"
          fill="#14b8a6"
        />

      </svg>


    </div>

  )

}


export default FloatingSVG;