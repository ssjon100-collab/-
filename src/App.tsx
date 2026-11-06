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

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="inline-block bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
              안성공도 센트럴카운티
            </div>
            <h1 className="text-2xl font-black text-white mb-2">
              일시적인 로딩 지연이 발생했습니다
            </h1>
            <p className="text-slate-400 text-sm mb-6">
              아래 새로고침 버튼을 누르시거나 대표번호(1688-8768)로 문의해 주시기 바랍니다.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-4 rounded-xl text-sm transition-all cursor-pointer"
              >
                페이지 새로고침
              </button>
              <a
                href="tel:1688-8768"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all"
              >
                대표상담 문의: 1688-8768
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainApp() {
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

export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}

