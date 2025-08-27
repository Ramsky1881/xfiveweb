// components/Banner.js
export default function Banner() {
  return (
    <section className="relative h-96 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/cyberpunk-banner.jpg)',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-900 opacity-80 z-1"></div>
      
      <div className="relative z-2 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch-effect" data-text="XFive Community">
          XFive Community
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl neon-text">
          Welcome to the future of community. Where technology and humans merge.
        </p>
        
        <div className="mt-8">
          <button className="cyber-button cyber-button-lg">
            Join Us Now
            <span className="glow"></span>
          </button>
        </div>
      </div>
    </section>
  )
}