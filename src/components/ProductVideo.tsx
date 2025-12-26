import { Play } from 'lucide-react';

export default function ProductVideo() {
  return (
    <section
      id="product-video"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-4">
            <Play className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              See It In Action
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ lineHeight: '1.2' }}>
            <span className="text-gray-900 dark:text-slate-100">Watch How </span>
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">Xops360 Works</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Discover how leading enterprises use Xops360 to optimize cloud costs, strengthen security, and maintain compliance.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/Q4HF6d7AhkM?rel=0&modestbranding=1"
                title="Xops360 Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://xops.axiomio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95 text-sm sm:text-base"
            style={{ minHeight: '44px' }}
          >
            Try It Free
          </a>
          <a
            href="https://calendly.com/kishan-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-95 text-sm sm:text-base"
            style={{ minHeight: '44px' }}
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
