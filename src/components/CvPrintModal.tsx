import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Printer, X } from 'lucide-react';
import {
  COMPETENCY_AREAS,
  INSTRUMENT_MATRIX,
  PROJECTS,
  STUDENT_PROFILE,
  TIMELINE_ENTRIES,
} from '../data/portfolioData';
import { EASE_OUT_EXPO, SPRING_SNAPPY } from './MotionPrimitives';

interface CvPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvPrintModal({ isOpen, onClose }: CvPrintModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/75 p-4 backdrop-blur-xs sm:p-8 print-only-cv"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 14 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            className="w-full max-w-4xl rounded-xl border border-slate-200 bg-white shadow-2xl print-only-cv"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 no-print">
              <div>
                <h2 id="cv-modal-title" className="font-display text-base font-bold text-slate-900">
                  Daftar Riwayat Hidup (Curriculum Vitae)
                </h2>
                <p className="text-xs text-slate-500">
                  Format ringkas standar A4 untuk keperluan lamaran PKL & rekrutmen industri
                </p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={SPRING_SNAPPY}
                  onClick={() => window.print()}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-800 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                >
                  <Printer className="h-4 w-4" aria-hidden="true" />
                  <span>Cetak / Simpan PDF</span>
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  transition={SPRING_SNAPPY}
                  aria-label="Tutup pratinjau CV"
                  onClick={onClose}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="border-b-2 border-slate-900 pb-6">
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                  {STUDENT_PROFILE.fullName}
                </h1>
                <p className="mt-1 text-sm font-semibold text-blue-700">
                  {STUDENT_PROFILE.department} · {STUDENT_PROFILE.school}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                  <span>{STUDENT_PROFILE.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{STUDENT_PROFILE.email}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{STUDENT_PROFILE.phoneDisplay}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Ringkasan Profil
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {STUDENT_PROFILE.summary}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Pendidikan & Pelatihan
                  </h3>
                  <div className="mt-3 space-y-4">
                    {TIMELINE_ENTRIES.map((entry) => (
                      <div key={entry.id} className="border-b border-slate-100 pb-3 last:border-b-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-sm font-semibold text-slate-900">{entry.title}</p>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-600">
                          {entry.institution} <span aria-hidden="true">·</span>{' '}
                          <span className="font-mono tabular-nums">{entry.period}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase">
                    Kompetensi Teknis Utama
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                    {COMPETENCY_AREAS.map((area) => (
                      <li key={area.id}>
                        <p className="font-semibold text-slate-900">{area.shortLabel}</p>
                        <p className="text-xs text-slate-600">{area.standardRef}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7">
                <h3 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Proyek Praktik Pilihan
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="rounded-lg border border-slate-200 p-3.5">
                      <p className="text-sm font-semibold text-slate-900">{proj.title}</p>
                      <p className="mt-1 font-mono text-xs text-slate-500 tabular-nums">
                        {proj.category} · {proj.voltage} · {proj.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <h3 className="font-display text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Instrumen Ukur & Perangkat Lunak
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-slate-700">
                  {INSTRUMENT_MATRIX.map((inst) => (
                    <span key={inst.instrument}>
                      <strong className="text-slate-900">{inst.instrument}</strong> ({inst.proficiency})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
