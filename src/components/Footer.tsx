import { motion } from 'motion/react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { EASE_OUT_EXPO, VIEWPORT_CONFIG } from './MotionPrimitives';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      className="border-t border-slate-200 bg-slate-50 py-8 no-print"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-slate-900">
            {STUDENT_PROFILE.fullName}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            {STUDENT_PROFILE.department} · {STUDENT_PROFILE.school}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500">
          <a href="#profil" className="hover:text-slate-900 transition-colors">
            Profil
          </a>
          <a href="#kompetensi" className="hover:text-slate-900 transition-colors">
            Kompetensi
          </a>
          <a href="#portofolio" className="hover:text-slate-900 transition-colors">
            Portofolio
          </a>
          <a href="#kontak" className="hover:text-slate-900 transition-colors">
            Kontak
          </a>
          <span aria-hidden="true" className="text-slate-300">|</span>
          <span>© {new Date().getFullYear()} {STUDENT_PROFILE.fullName}</span>
        </div>
      </div>
    </motion.footer>
  );
}
