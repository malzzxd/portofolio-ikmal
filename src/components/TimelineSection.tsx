import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { TIMELINE_ENTRIES } from '../data/portfolioData';
import { EASE_OUT_EXPO, VIEWPORT_CONFIG } from './MotionPrimitives';

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
  });

  return (
    <section id="sertifikasi" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium text-blue-700">Rekam Jejak Akademik</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-balance">
            Pendidikan, Pelatihan Bengkel & Standar Kompetensi
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Latar belakang pendidikan kejuruan dan fokus pembelajaran praktis yang mempersiapkan kesiapan kerja di sektor ketenagalistrikan maupun industri.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-4 bottom-4 left-0 hidden w-0.5 bg-slate-200 lg:block"
          >
            <motion.div
              style={{ scaleY }}
              className="h-full w-full origin-top bg-blue-700"
            />
          </div>

          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white lg:ml-6">
            {TIMELINE_ENTRIES.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                className="grid grid-cols-1 gap-6 p-6 transition-colors duration-150 hover:bg-slate-50/60 sm:p-8 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}. <span className="ml-1">{entry.period}</span>
                  </p>
                  <p className="mt-2 text-xs font-medium text-slate-500">{entry.type}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{entry.institution}</p>
                </div>

                <div className="lg:col-span-8">
                  <h3 className="font-display text-lg font-bold text-slate-900">{entry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{entry.description}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {entry.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
