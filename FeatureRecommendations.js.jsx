// components/FeatureRecommendations.js
export default function FeatureRecommendations() {
  const features = [
    {
      title: "Event Terbaru",
      description: "Lihat event-event komunitas yang akan datang",
      icon: "🎉"
    },
    {
      title: "Forum Diskusi",
      description: "Bergabung dalam diskusi seru dengan member lainnya",
      icon: "💬"
    },
    {
      title: "Galeri Projek",
      description: "Lihat projek-projek keren yang dibuat oleh member",
      icon: "🖼️"
    },
    {
      title: "Resources",
      description: "Akses resource eksklusif untuk member komunitas",
      icon: "📚"
    }
  ]

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400 neon-title">Fitur Rekomendasi</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="cyber-feature-card">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">{feature.title}</h3>
            <p className="text-cyan-100">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}