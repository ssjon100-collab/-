import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, ChevronRight, Sparkles, Building2, CheckCircle2, Zap } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '사업개요', href: '#overview' },
    { label: '임대혜택', href: '#benefits' },
    { label: '프리미엄6', href: '#premium' },
    { label: '입지환경', href: '#location' },
    { label: '단지배치도', href: '#complex' },
    { label: '평면안내', href: '#floorplan' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Banner Alert with instant move-in & 80% loan */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 text-white text-xs sm:text-sm py-2.5 px-4 shadow-inner relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-2.5 py-0.5 rounded-md text-xs shrink-0 tracking-wide shadow-sm animate-pulse">
              ★ 즉시입주 가능
            </span>
            <span className="bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded-md text-xs shrink-0 shadow-sm">
              80% 대출 가능
            </span>
            <span className="text-slate-200 truncate font-medium">
              안성공도 센트럴카운티 10년 안심 민간임대아파트 | 청약통장 無 · 세금부담 ZERO · HUG 100% 보증
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 font-medium">
            <span className="text-amber-300 flex items-center gap-1 font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> 선착순 동·호지정 중
            </span>
            <a
              href={SITE_INFO.phoneTel}
              className="text-white hover:text-amber-300 transition-colors font-extrabold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {SITE_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
                    안성공도 <span className="text-blue-900">센트럴카운티</span>
                  </span>
                  <span className="hidden sm:inline-block bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    즉시입주
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 tracking-wider font-medium">
                  ANSEONG GONGDO CENTRAL COUNTY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA & Phone Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-1.5 bg-blue-950 hover:bg-blue-900 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>관심고객 등록</span>
              </button>

              <a
                href={SITE_INFO.phoneTel}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all animate-pulse hover:animate-none"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping absolute -top-1 -right-1"></span>
                <Phone className="w-4 h-4 text-slate-950" />
                <span className="text-base tracking-tight">{SITE_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={SITE_INFO.phoneTel}
                className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 font-extrabold text-xs px-2.5 py-2 rounded-lg shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>1688-8768</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer"
                aria-label="메뉴 열기"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl px-4 py-5 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="flex items-center justify-center gap-1.5 bg-blue-950 text-white font-bold py-2.5 px-3 rounded-xl text-sm"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                관심고객 등록
              </button>
              <a
                href={SITE_INFO.phoneTel}
                className="flex items-center justify-center gap-1.5 bg-amber-500 text-slate-950 font-extrabold py-2.5 px-3 rounded-xl text-sm"
              >
                <Phone className="w-4 h-4" />
                1688-8768 전화
              </a>
            </div>

            <div className="divide-y divide-slate-100">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full py-3 flex items-center justify-between text-slate-800 font-semibold text-sm hover:text-blue-900 transition-colors text-left"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 bg-amber-50/70 p-3.5 rounded-xl text-xs text-amber-950 border border-amber-200">
              <p className="font-extrabold text-sm mb-1 text-slate-900">✨ 즉시입주 가능 & 80% 대출 가능</p>
              <p className="text-slate-700">전세자금 대출 최대 80% 지원 및 잔여세대 선착순 상담 진행 중</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
