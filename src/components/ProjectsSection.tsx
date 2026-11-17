import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, X, Zap } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { EASE_OUT_EXPO, SPRING_GENTLE, SPRING_SNAPPY, VIEWPORT_CONFIG } from './MotionPrimitives';

const CATEGORIES = [
  'Semua Proyek',
  'Panel Kontrol Motor',
  'Otomasi & PLC',
  'Instalasi Bangunan',
] as const;

type FilterCategory = (typeof CATEGORIES)[number];

function ProjectImage({
  src,
  alt,
  title,
  className = '',
}: {
  src: string;
  alt: string;
  title: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6 text-center ${className}`}
      >
        <Zap className="h-8 w-8 text-blue-700" aria-hidden="true" />
        <p className="mt-2 font-display text-sm font-semibold text-slate-800">{title}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] ${className}`}
    />
  );
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('Semua Proyek');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'Semua Proyek'
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    if (!activeProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  return (
    <section id="portofolio" className="border-b border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-blue-700">Portofolio Praktik Bengkel</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-balance">
              Proyek Perakitan Panel, Instalasi & Otomasi Listrik
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Dokumentasi pekerjaan praktik teknik instalasi tenaga listrik meliputi spesifikasi komponen, prosedur kerja standar, dan hasil pengujian kelayakan sistem.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter kategori proyek"
            className="inline-flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative min-h-10 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                    isSelected ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="project-filter-bg"
                      transition={SPRING_SNAPPY}
                      className="absolute inset-0 rounded-lg bg-white shadow-xs"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ ...SPRING_GENTLE, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:border-slate-300 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-200 bg-slate-100 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700"
                >
                  <ProjectImage src={project.image} alt={project.imageAlt} title={project.title} />
                </button>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-medium text-blue-700">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.voltage}</span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="font-mono text-xs text-slate-500">{project.standard}</span>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.96 }}
                      onClick={() => setActiveProject(project)}
                      className="inline-flex min-h-10 items-center gap-1.5 text-xs font-semibold text-blue-700 transition-colors hover:text-blue-800 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-sm px-1"
                    >
                      <span>Detail Spesifikasi</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="project-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs sm:p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-sm">
                <div className="min-w-0">
                  <p className="truncate text-xs text-slate-500">
                    {activeProject.category} <span aria-hidden="true">·</span> {activeProject.context}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mt-0.5 truncate font-display text-lg font-bold text-slate-900"
                  >
                    {activeProject.title}
                  </h3>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Tutup rincian proyek"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                  <ProjectImage
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    title={activeProject.title}
                  />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 border-y border-slate-200 py-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-slate-500">Tegangan & Sistem</p>
                    <p className="mt-1 font-mono text-sm font-semibold text-slate-900 tabular-nums">
                      {activeProject.voltage}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Standar Acuan</p>
                    <p className="mt-1 font-mono text-sm font-semibold text-slate-900">
                      {activeProject.standard}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Tahun Pelaksanaan</p>
                    <p className="mt-1 font-mono text-sm font-semibold text-slate-900 tabular-nums">
                      {activeProject.year}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Komponen Utama
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {activeProject.components.map((comp, i) => (
                        <motion.li
                          key={comp}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.04, duration: 0.2 }}
                          className="flex items-start gap-2.5"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700"
                            aria-hidden="true"
                          />
                          <span>{comp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Prosedur Pengerjaan & Pengujian
                    </h4>
                    <ol className="mt-3 space-y-2 text-sm text-slate-700">
                      {activeProject.procedures.map((step, index) => (
                        <motion.li
                          key={step}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.04, duration: 0.2 }}
                          className="flex items-start gap-2.5"
                        >
                          <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums pt-0.5">
                            0{index + 1}.
                          </span>
                          <span>{step}</span>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.25 }}
                  className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        Hasil Verifikasi & Uji Layak
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{activeProject.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
