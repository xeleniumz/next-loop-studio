import React from 'react'

const HeroSection: React.FC  = () => {
  return (
      <section id="hero" >
          <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
              <nav className="flex items-center justify-between font-bold text-white">
                  <img
                      src="/images/logo.svg"
                      alt="Loop Studio"
                      className="w-32"
                  />
                </nav>
          </div>
    </section>
  )
}

export default HeroSection