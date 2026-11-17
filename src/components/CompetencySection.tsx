import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';
import { COMPETENCY_AREAS, INSTRUMENT_MATRIX } from '../data/portfolioData';
import { EASE_OUT_EXPO, SPRING_SNAPPY, VIEWPORT_CONFIG } from './MotionPrimitives';

export function CompetencySection() {
  const [activeId, setActiveId] = useState<string>(COMPETENCY_AREAS[0].id);
  const current = COMPETENCY_AREAS.find((c) => c.id === activeId) ?? COMPETENCY_AREAS[0];

  return (
    <section id="kompetensi" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium text-blue-700">Bidang Keahlian</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-balance">
            Kompetensi Inti Teknik Instalasi Tenaga Listrik
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Penguasaan materi kejuruan dan praktik bengkel yang terstruktur sesuai standar kelistrikan nasional maupun kebutuhan industri manufaktur di wilayah Gresik dan Jawa Timur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT_EXPO }}
          role="tablist"
          aria-label="Kategori kompetensi kelistrikan"
          className="mt-8 inline-flex max-w-full flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5"
        >
          {COMPETENCY_AREAS.map((area) => {
            const isActive = area.id === activeId;
            return (
              <button
                key={area.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveId(area.id)}
                className={`relative min-h-10 rounded-lg px-4 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="competency-active-tab"
                    transition={SPRING_SNAPPY}
                    className="absolute inset-0 rounded-lg bg-slate-900"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{area.shortLabel}</span>
              </button>
            );
          })}
        </motion.div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
              className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <p className="font-mono text-xs font-medium text-blue-700">{current.standardRef}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{current.summary}</p>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {current.skills.map((skill, idx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.045, duration: 0.25, ease: EASE_OUT_EXPO }}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between border-t border-slate-200 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500">
                    Parameter Teknis & Acuan Kerja
                  </h4>
                  <dl className="mt-4 divide-y divide-slate-100">
                    {current.tools.map((tool, idx) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + idx * 0.05, duration: 0.25, ease: EASE_OUT_EXPO }}
                        className="py-3.5 first:pt-0 last:pb-0"
                      >
                        <dt className="text-xs text-slate-500">{tool.name}</dt>
                        <dd className="mt-1 font-mono text-sm font-semibold text-slate-900 tabular-nums">
                          {tool.spec}
                        </dd>
                      </motion.div>
                    ))}
                  </dl>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs leading-relaxed text-slate-500">
                    Seluruh kegiatan perakitan dan pengujian dilaksanakan di bawah pengawasan guru pembimbing bengkel TITL dengan verifikasi kelayakan sebelum energize.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="border-b border-slate-200 px-6 py-4">
            <h3 className="font-display text-base font-semibold text-slate-900">
              Alat Ukur & Perangkat Lunak Teknik yang Dikuasai
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                  <th className="px-6 py-3">Instrumen / Perangkat</th>
                  <th className="px-6 py-3">Tipe / Contoh Perangkat</th>
                  <th className="px-6 py-3">Fungsi Pengujian & Perancangan</th>
                  <th className="px-6 py-3">Tingkat Penguasaan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {INSTRUMENT_MATRIX.map((row, idx) => (
                  <motion.tr
                    key={row.instrument}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ delay: idx * 0.04, duration: 0.35, ease: EASE_OUT_EXPO }}
                    className="group transition-colors duration-150 hover:bg-slate-50/90"
                  >
                    <td className="px-6 py-3.5 font-medium text-slate-900 transition-transform duration-150 group-hover:translate-x-0.5">
                      {row.instrument}
                    </td>
                    <td className="px-6 py-3.5 font-mono text-xs text-slate-600 tabular-nums">
                      {row.brandExample}
                    </td>
                    <td className="px-6 py-3.5 text-slate-600">{row.measurementScope}</td>
                    <td className="px-6 py-3.5 font-mono text-xs font-semibold text-blue-700">
                      {row.proficiency}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
