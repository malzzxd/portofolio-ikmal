import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { EASE_OUT_EXPO, SPRING_SNAPPY } from './MotionPrimitives';

interface NavbarProps {
  onOpenCv: () => void;
}

const NAV_LINKS = [
  { href: '#profil', label: 'Profil' },
  { href: '#kompetensi', label: 'Kompetensi' },
  { href: '#portofolio', label: 'Portofolio' },
  { href: '#sertifikasi', label: 'Pendidikan' },
];

export function Navbar({ onOpenCv }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isScrolled = latest > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  });

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      className={`sticky top-0 z-40 border-b transition-colors duration-200 no-print ${
        scrolled
          ? 'border-slate-200/90 bg-white/95 shadow-xs backdrop-blur-md'
          : 'border-slate-200 bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <motion.a
          href="#profil"
          whileHover={{ x: 1 }}
          whileTap={{ scale: 0.98 }}
          transition={SPRING_SNAPPY}
          className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 rounded-sm"
        >
          Iqmalul Khoir
        </motion.a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -1 }}
              transition={SPRING_SNAPPY}
              className="relative py-1 transition-colors duration-150 hover:text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-700 after:transition-all after:duration-150 hover:after:w-full whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <motion.a
            href="#kontak"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING_SNAPPY}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-blue-800 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Hubungi Saya
          </motion.a>

          <motion.button
            type="button"
            whileTap={{ scale: 0.94 }}
            transition={SPRING_SNAPPY}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"
          >
            <nav aria-label="Navigasi seluler" className="flex flex-col gap-2">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3 border-t border-slate-100 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenCv();
                  }}
                  className="flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-800"
                >
                  Pratinjau CV
                </button>
                <a
                  href="#kontak"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-4 text-xs font-semibold text-white"
                >
                  Hubungi Saya
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
