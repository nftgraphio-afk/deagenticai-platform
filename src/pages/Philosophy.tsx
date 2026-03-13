export function Philosophy() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <h1 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">Philosophy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
          At Aura, we believe in the harmonious integration of technology and human potential. 
          Our philosophy is rooted in the idea that digital experiences should be intuitive, 
          beautiful, and empowering. We strive to create tools that amplify creativity and 
          streamline workflows, allowing you to focus on what truly matters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-medium text-white mb-3">Simplicity</h3>
            <p className="text-white/60">
              We distill complex problems into elegant solutions. Unnecessary complexity is removed, 
              leaving only what is essential and impactful.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-medium text-white mb-3">Performance</h3>
            <p className="text-white/60">
              Speed is a feature. We obsess over performance metrics to ensure that every interaction 
              feels instantaneous and fluid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
