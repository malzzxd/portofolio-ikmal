import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { CompetencySection } from './components/CompetencySection';
import { ContactSection } from './components/ContactSection';
import { CvPrintModal } from './components/CvPrintModal';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ScrollProgressBar } from './components/MotionPrimitives';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <ScrollProgressBar />
        <div className={cvModalOpen ? 'no-print' : undefined}>
          <Navbar onOpenCv={() => setCvModalOpen(true)} />
          <main>
            <HeroSection onOpenCv={() => setCvModalOpen(true)} />
            <CompetencySection />
            <ProjectsSection />
            <TimelineSection />
            <ContactSection />
          </main>
          <Footer />
        </div>

        <CvPrintModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </MotionConfig>
  );
}
