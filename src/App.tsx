import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RentalBenefits } from './components/RentalBenefits';
import { ProjectOverview } from './components/ProjectOverview';
import { PremiumSix } from './components/PremiumSix';
import { LocationEnvironment } from './components/LocationEnvironment';
import { ComplexLayout } from './components/ComplexLayout';
import { FloorPlans } from './components/FloorPlans';
import { SmartSystem } from './components/SmartSystem';
import { ReservationForm } from './components/ReservationForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuickBar } from './components/QuickBar';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Global Navigation Header */}
      <Header onOpenReservation={handleOpenReservation} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 10-Year Rental Advantages & Comparison */}
        <RentalBenefits onOpenReservation={handleOpenReservation} />

        {/* Project Overview (사업개요) */}
        <ProjectOverview onOpenReservation={handleOpenReservation} />

        {/* Premium BIG 6 */}
        <PremiumSix onOpenReservation={handleOpenReservation} />

        {/* Location & Infrastructure (입지환경) */}
        <LocationEnvironment />

        {/* Complex Layout (단지배치도) with uploaded image and without detail panel */}
        <ComplexLayout onOpenReservation={handleOpenReservation} />

        {/* Floor Plans (평면안내 - 78㎡, 84㎡A, 84㎡B) with uploaded isometric images */}
        <FloorPlans onOpenReservation={handleOpenReservation} />

        {/* Smart System & Community (스마트시스템 & 커뮤니티) */}
        <SmartSystem />

        {/* Customer Registration (관심고객등록) */}
        <ReservationForm />

        {/* FAQ Section (자주 묻는 질문) */}
        <FaqSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating Quick Bar (Desktop) & Sticky Bottom Bar (Mobile) */}
      <QuickBar onOpenReservation={handleOpenReservation} />

      {/* Interactive Customer Registration Modal Popup */}
      <ReservationModal isOpen={isModalOpen} onClose={handleCloseReservation} />
    </div>
  );
}
