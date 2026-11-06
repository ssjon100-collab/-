import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Layers, ArrowUp, Zap } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface QuickBarProps {
  onOpenReservation: () => void;
}

export const QuickBar: React.FC<QuickBarProps> = ({ onOpenReservation }) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right Bar */}
      <aside aria-label="빠른 메뉴" className="hidden lg:flex fixed right-5 bottom-24 z-40 flex-col gap-2.5 items-center">
        {/* Instant move-in badge */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[11px] px-2 py-1 rounded-lg shadow-lg text-center leading-tight animate-bounce">
          즉시입주<br />가능
        </div>

        {/* Call Badge */}
        <a
          href={SITE_INFO.phoneTel}
          className="w-16 h-20 bg-gradient-to-b from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl shadow-xl flex flex-col items-center justify-center p-2 text-center group transition-all transform hover:scale-105"
          title="대표전화 1688-8768"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="text-[11px] font-black leading-tight mt-1">전화상담</span>
          <span className="text-[9px] font-extrabold text-slate-900 mt-0.5">8768</span>
        </a>

        {/* Customer Registration */}
        <button
          onClick={onOpenReservation}
          className="w-16 h-16 bg-blue-950 hover:bg-blue-900 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-2 text-center transition-all transform hover:scale-105 cursor-pointer border border-blue-800"
          title="관심고객 등록"
        >
          <Calendar className="w-5 h-5 text-amber-400" />
          <span className="text-[11px] font-bold mt-1">관심등록</span>
        </button>

        {/* Complex Layout */}
        <button
          onClick={() => scrollTo('#complex')}
          className="w-16 h-16 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl shadow-lg flex flex-col items-center justify-center p-2 text-center transition-all transform hover:scale-105 cursor-pointer border border-slate-200"
          title="단지배치도"
        >
          <Zap className="w-5 h-5 text-amber-500" />
          <span className="text-[11px] font-bold mt-1">배치도</span>
        </button>

        {/* Floor plans */}
        <button
          onClick={() => scrollTo('#floorplan')}
          className="w-16 h-16 bg-white hover:bg-slate-50 text-slate-800 rounded-2xl shadow-lg flex flex-col items-center justify-center p-2 text-center transition-all transform hover:scale-105 cursor-pointer border border-slate-200"
          title="평면안내"
        >
          <Layers className="w-5 h-5 text-blue-900" />
          <span className="text-[11px] font-bold mt-1">평면안내</span>
        </button>

        {/* Scroll To Top Button */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-slate-800/80 hover:bg-slate-900 text-white rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer mt-1"
            title="맨 위로 가기"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </aside>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex items-center gap-2">
        <a
          href={SITE_INFO.phoneTel}
          className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 text-slate-950 font-black py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-md text-sm"
        >
          <Phone className="w-4 h-4 text-slate-950" />
          <span>전화상담 1688-8768</span>
        </a>

        <button
          onClick={onOpenReservation}
          className="flex-1 bg-blue-950 active:bg-blue-900 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-2 shadow-md text-sm cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>관심고객 등록</span>
        </button>
      </div>
    </>
  );
};
