export function StatsSection() {
  const stats = [
    { label: "Detections", value: "45,000+", prefix: "🎯" },
    { label: "Coverage Area", value: "1.2M km²", prefix: "🌍" },
    { label: "Detection Accuracy", value: "98.5%", prefix: "✓" },
    { label: "Active Users", value: "450+", prefix: "👥" },
  ]

  return (
    <section className="py-20 border-y border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-sm lg:text-base text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
