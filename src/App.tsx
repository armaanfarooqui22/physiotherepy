/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConditionsSection } from './components/ConditionsSection';
import { ApproachSection } from './components/ApproachSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedCondition, setSelectedCondition] = useState<string>('');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAFAF7] text-[#1C2422] flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-[#1F6F5C] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        {/* 1. Navbar */}
        <Navbar />

        <main id="main-content" className="flex-1">
          {/* 2. Hero */}
          <Hero />

          {/* 3. Conditions We Treat */}
          <ConditionsSection onSelectConditionForBooking={setSelectedCondition} />

          {/* 4. Our Approach */}
          <ApproachSection />

          {/* 5. Services */}
          <ServicesSection onEnquireService={setSelectedCondition} />

          {/* 6. About the Clinic & Therapist */}
          <AboutSection />

          {/* 7. Testimonials */}
          <TestimonialsSection />

          {/* 8. Booking Section */}
          <BookingSection preselectedCondition={selectedCondition} />

          {/* 9. FAQ Accordion */}
          <FaqSection />

          {/* 10. Contact & Footer */}
          <ContactFooter />
        </main>

        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}
