/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GymProvider } from './context/GymContext';
import { TopAnnouncement } from './components/TopAnnouncement';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { SocialProofStrip } from './sections/SocialProofStrip';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Programs } from './sections/Programs';
import { Transformations } from './sections/Transformations';
import { PersonalTraining } from './sections/PersonalTraining';
import { PricingMemberships } from './sections/PricingMemberships';
import { Trainers } from './sections/Trainers';
import { Testimonials } from './sections/Testimonials';
import { Gallery } from './sections/Gallery';
import { FreeTrialForm } from './sections/FreeTrialForm';
import { Faq } from './sections/Faq';
import { LocationMap } from './sections/LocationMap';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';
import { LeadModal } from './components/LeadModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { GalleryLightbox } from './components/GalleryLightbox';
import { DemoCustomizerDrawer } from './components/DemoCustomizerDrawer';
import { Toast } from './components/Toast';
import { MainWebsiteLoader } from './components/MainWebsiteLoader';

export default function App() {
  return (
    <GymProvider>
      <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-[#f4f4f5] selection:bg-[#ccff00] selection:text-black transition-colors duration-200 relative overflow-x-hidden">
        {/* Full-Screen Brand Dumbbell Rep Initial Loader */}
        <MainWebsiteLoader />

        {/* 1. Top Announcement Bar */}
        <TopAnnouncement />

        {/* 2. Sticky Navbar with Theme Switcher */}
        <Navbar />

        {/* 3. Dramatic Full-Screen Hero with Foreground Visual Showcase */}
        <Hero />

        {/* 4. Social Proof Credibility Strip with Gym Snapshots */}
        <SocialProofStrip />

        {/* 5. Why Choose Us Editorial Blocks with Gym Photos */}
        <WhyChooseUs />

        {/* 6. Programs Disciplines */}
        <Programs />

        {/* 7. Real Transformations Stories */}
        <Transformations />

        {/* 8. Personal Training Split-Screen */}
        <PersonalTraining />

        {/* 9. Membership & Pricing with Monthly/Quarterly Toggle */}
        <PricingMemberships />

        {/* 10. Certified Coaches & Trainers */}
        <Trainers />

        {/* 11. Testimonials Slider */}
        <Testimonials />

        {/* 12. Immersive Facility Gallery */}
        <Gallery />

        {/* 13. Free Trial Lead Conversion Form */}
        <FreeTrialForm />

        {/* 14. Frequently Asked Questions Accordion */}
        <Faq />

        {/* 15. Location & Dark Architectural Map */}
        <LocationMap />

        {/* 16. Final Call to Action */}
        <FinalCta />

        {/* 17. Comprehensive Agency-Grade Footer */}
        <Footer />

        {/* Conversion & Presentation Overlays */}
        <LeadModal />
        <WhatsAppFloatingButton />
        <GalleryLightbox />
        <DemoCustomizerDrawer />
        <Toast />
      </div>
    </GymProvider>
  );
}
