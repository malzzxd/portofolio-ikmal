import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import { EASE_OUT_EXPO, SPRING_SNAPPY, VIEWPORT_CONFIG } from './MotionPrimitives';

export function ContactSection() {
  const [senderName, setSenderName] = useState('');
  const [organization, setOrganization] = useState('');
  const [purpose, setPurpose] = useState('Penawaran Praktik Kerja Lapangan (PKL)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!senderName.trim() || !message.trim()) {
      setErrorMsg('Mohon lengkapi nama pengirim dan isi pesan terlebih dahulu.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const mailtoSubject = encodeURIComponent(
    `[Portofolio TITL] ${purpose} — ${senderName || 'Korespondensi'}`
  );
  const mailtoBody = encodeURIComponent(
    `Yth. Iqmalul Khoir,\n\nNama: ${senderName}\nInstansi/Perusahaan: ${organization || '-'}\nKeperluan: ${purpose}\n\nPesan:\n${message}`
  );

  return (
    <section id="kontak" className="bg-white py-16 lg:py-20 overflow-x-clip">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-medium text-blue-700">Korespondensi Resmi</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-balance">
              Hubungi untuk Penempatan PKL, Magang & Rekrutmen
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Terbuka untuk kesempatan Praktik Kerja Lapangan (PKL), kunjungan industri, maupun rekrutmen calon teknisi instalasi listrik dan pemeliharaan panel.
            </p>

            <dl className="mt-8 space-y-5 border-t border-slate-200 pt-6">
              <motion.div
                whileHover={{ x: 3 }}
                transition={SPRING_SNAPPY}
                className="flex items-start gap-3.5"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-medium text-slate-500">Sekolah & Domisili</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-slate-900">
                    {STUDENT_PROFILE.school}
                  </dd>
                  <dd className="text-xs text-slate-600">{STUDENT_PROFILE.location}</dd>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                transition={SPRING_SNAPPY}
                className="flex items-start gap-3.5"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-medium text-slate-500">Surat Elektronik</dt>
                  <dd className="mt-0.5 font-mono text-sm font-medium text-slate-900">
                    {STUDENT_PROFILE.email}
                  </dd>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                transition={SPRING_SNAPPY}
                className="flex items-start gap-3.5"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-medium text-slate-500">Telepon / WhatsApp</dt>
                  <dd className="mt-0.5 font-mono text-sm font-medium text-slate-900 tabular-nums">
                    {STUDENT_PROFILE.phoneDisplay}
                  </dd>
                </div>
              </motion.div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                    className="py-6"
                  >
                    <div className="flex items-start gap-3.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-0.5 h-6 w-6 shrink-0 text-blue-700"
                        aria-hidden="true"
                      >
                        <motion.circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                        />
                        <motion.path
                          d="M8.5 12.5L10.8 14.8L15.5 9.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.35, delay: 0.2, ease: EASE_OUT_EXPO }}
                        />
                      </svg>
                      <div>
                        <h3 className="font-display text-lg font-bold text-slate-900">
                          Draf Pesan Siap Dikirim
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          Terima kasih, <strong className="text-slate-900">{senderName}</strong>. Pesan Anda terkait <strong className="text-slate-900">{purpose}</strong> telah dicatat. Anda juga dapat langsung meneruskannya melalui aplikasi email bawaan Anda.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <motion.a
                            whileHover={{ y: -1, scale: 1.015 }}
                            whileTap={{ scale: 0.97 }}
                            transition={SPRING_SNAPPY}
                            href={`mailto:${STUDENT_PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
                            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                          >
                            <Mail className="h-4 w-4" aria-hidden="true" />
                            <span>Kirim via Email</span>
                          </motion.a>
                          <motion.button
                            type="button"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={SPRING_SNAPPY}
                            onClick={() => {
                              setSubmitted(false);
                              setSenderName('');
                              setOrganization('');
                              setMessage('');
                            }}
                            className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 cursor-pointer"
                          >
                            Tulis Pesan Lain
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="sender-name" className="block text-xs font-semibold text-slate-700">
                          Nama Lengkap Pengirim
                        </label>
                        <input
                          id="sender-name"
                          type="text"
                          required
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          placeholder="Contoh: Bapak Ahmad Santoso"
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-shadow focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="sender-org" className="block text-xs font-semibold text-slate-700">
                          Perusahaan / Instansi
                        </label>
                        <input
                          id="sender-org"
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="Contoh: PT Petrokimia / Kawasan Industri Gresik"
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-shadow focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-purpose" className="block text-xs font-semibold text-slate-700">
                        Perihal Korespondensi
                      </label>
                      <select
                        id="contact-purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 transition-shadow focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
                      >
                        <option value="Penawaran Praktik Kerja Lapangan (PKL)">
                          Penawaran Praktik Kerja Lapangan (PKL)
                        </option>
                        <option value="Rekrutmen Teknisi Listrik">Rekrutmen Teknisi Listrik</option>
                        <option value="Evaluasi Akademik / Guru Pembimbing">
                          Evaluasi Akademik / Guru Pembimbing
                        </option>
                        <option value="Korespondensi Umum">Korespondensi Umum</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700">
                        Isi Pesan
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tuliskan informasi posisi, jadwal wawancara, atau keperluan korespondensi Anda..."
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-shadow focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
                      />
                    </div>

                    <AnimatePresence>
                      {errorMsg && (
                        <motion.p
                          role="alert"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="text-xs font-medium text-red-700"
                        >
                          {errorMsg}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <p className="text-xs text-slate-500">
                        Seluruh data korespondensi dijaga kerahasiaannya.
                      </p>
                      <motion.button
                        type="submit"
                        whileHover={{ y: -1, scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        transition={SPRING_SNAPPY}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-800 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                      >
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>Kirim Pesan</span>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
