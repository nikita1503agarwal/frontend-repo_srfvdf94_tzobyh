import { motion } from 'framer-motion'

const videos = [
  {
    title: 'Cosmic Journey',
    url: 'https://www.youtube.com/embed/1w7OgIMMRc4?si=space_dev_1',
  },
  {
    title: 'Nebula Timelapse',
    url: 'https://www.youtube.com/embed/GO5FwsblpT8?si=space_dev_2',
  },
  {
    title: 'Galactic Flight',
    url: 'https://www.youtube.com/embed/2H5yMI9Z6GQ?si=space_dev_3',
  },
  {
    title: 'Stellar Clouds',
    url: 'https://www.youtube.com/embed/_frqzP0xS0E?si=space_dev_4',
  },
]

function Videos() {
  return (
    <section id="videos" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Video reels</h2>
          <p className="mt-3 text-violet-200/80">A curated set of motion pieces and space visuals to showcase interactive storytelling.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {videos.map((v) => (
            <motion.div
              key={v.title}
              className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={v.url}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4 border-t border-white/10">
                <p className="text-sm text-white/90">{v.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Videos
