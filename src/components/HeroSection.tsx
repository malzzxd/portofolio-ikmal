import { MouseEvent, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, FileText, Zap } from 'lucide-react';
import { HERO_METRICS, STUDENT_PROFILE } from '../data/portfolioData';
import { EASE_OUT_EXPO, SPRING_GENTLE, SPRING_SNAPPY } from './MotionPrimitives';

interface HeroSectionProps {
  onOpenCv: () => void;
}

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

export function HeroSection({ onOpenCv }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 24 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3.5, 3.5]);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="profil" className="border-b border-slate-200 bg-white overflow-x-clip">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <motion.p variants={heroItem} className="text-xs font-medium tracking-wide text-blue-700">
                {STUDENT_PROFILE.school}{' '}
                <span aria-hidden="true" className="mx-1.5 text-slate-300">
                  ·
                </span>{' '}
                {STUDENT_PROFILE.department}
              </motion.p>

              <motion.h1
                variants={heroItem}
                className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12] text-balance"
              >
                Iqmalul Khoir — Portofolio Kompetensi Teknik Instalasi Tenaga Listrik
              </motion.h1>

              <motion.p
                variants={heroItem}
                className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600"
              >
                {STUDENT_PROFILE.summary}
              </motion.p>

              <motion.div
                variants={heroItem}
                className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500"
              >
                <span>Domisili: {STUDENT_PROFILE.location}</span>
                <span aria-hidden="true">·</span>
                <span>{STUDENT_PROFILE.status}</span>
              </motion.div>
            </div>

            <motion.div variants={heroItem} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                href="#portofolio"
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING_SNAPPY}
                className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-800 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                <span>Lihat Proyek Praktik</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </motion.a>

              <motion.button
                type="button"
                onClick={onOpenCv}
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                transition={SPRING_SNAPPY}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 cursor-pointer"
              >
                <FileText className="h-4 w-4 text-slate-600" aria-hidden="true" />
                <span>Cetak / Pratinjau CV</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: EASE_OUT_EXPO }}
            style={{ perspective: 900 }}
            className="lg:col-span-5"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {!imgError ? (
                <motion.img
                  src={STUDENT_PROFILE.heroImage}
                  alt={STUDENT_PROFILE.heroImageAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  style={{ x: imageX, y: imageY, scale: 1.04 }}
                  className="h-full w-full object-cover object-center lg:h-full will-change-transform"
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-8 text-center">
                  <Zap className="h-10 w-10 text-blue-700" aria-hidden="true" />
                  <p className="mt-3 font-display text-base font-semibold text-slate-900">
                    {STUDENT_PROFILE.fullName}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{STUDENT_PROFILE.department}</p>
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: EASE_OUT_EXPO }}
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent p-5"
              >
                <p className="text-xs font-medium text-white">
                  Pengukuran & Verifikasi Panel Kontrol · Bengkel TITL SMKN 1 Sidayu
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: EASE_OUT_EXPO }}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HERO_METRICS.map((item, idx) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_GENTLE, delay: 0.32 + idx * 0.06 }}
              whileHover={{ backgroundColor: '#f8fafc' }}
              className="bg-white px-5 py-4 transition-colors duration-150"
            >
              <p className="font-mono text-sm font-semibold text-slate-900 tabular-nums">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
