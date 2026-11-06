import React from 'react';
import { Phone, Calendar, CheckCircle2, Shield, ArrowRight, School, Sparkles, Zap, Award } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden min-h-[640px]">
      {/* Background Aerial Perspective Rendering */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="./assets/aistudio/hero_perspective_optimized.jpg"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = './assets/aistudio/________2________38da2514.jpg';
          }}
          alt="안성공도 센트럴카운티 단지 조감도"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08] scale-100"
        />
        {/* Premium Layered Overlays for High Contrast & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/95"></div>
        <div className="absolute inset-0 bg-blue-950/25 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Top Prominent Badges with 즉시입주 가능 & 80% 대출 가능 */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 text-xs sm:text-sm font-semibold animate-in fade-in duration-500">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 px-4 py-2 rounded-full font-black text-sm sm:text-base shadow-lg ring-2 ring-amber-400/50 animate-bounce">
            <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
            즉시입주 가능
          </span>
          <span className="inline-flex items-center gap-1.5 bg-emerald-500 text-slate-950 px-4 py-2 rounded-full font-black text-sm sm:text-base shadow-lg">
            <Award className="w-4 h-4 text-slate-950" />
            전세대출 최대 80% 가능
          </span>
          <span className="inline-flex items-center gap-1.5 bg-blue-900/90 border border-blue-600 text-blue-200 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <Shield className="w-4 h-4 text-emerald-400" />
            HUG 주택도시보증공사 100% 보증
          </span>
          <span className="inline-flex items-center gap-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 px-3.5 py-1.5 rounded-full">
            <School className="w-4 h-4 text-amber-300" />
            용머리초 도보 1분 초품아
          </span>
        </div>

        {/* Main Catchphrase Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold mb-3">
            ★ 기다림 없는 즉시입주 & 80% 안심 대출 지원 ★
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-tight mb-5">
            안성공도 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">센트럴카운티</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            10년 동안 이사 걱정 없이 내 집처럼 편안하게!
            <br className="hidden sm:inline" />
            <strong className="text-amber-300 font-bold">즉시입주 가능 · 80% 대출 가능</strong> · 청약통장 無 · 세금부담 ZERO
          </p>
        </div>

        {/* Main Call-out Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-amber-500/30 rounded-3xl shadow-2xl p-6 sm:p-8 backdrop-blur-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Phone highlight */}
            <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                분양 및 임대 공식 상담센터
              </div>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-slate-400 text-sm font-medium">대표번호</span>
                <a
                  href={SITE_INFO.phoneTel}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-400 tracking-tight hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
                  {SITE_INFO.phoneFormatted}
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                연중무휴 전문 상담원 대기 | 잔여세대 동호수 및 특별 금융지원 혜택 안내
                <br />
                <span className="text-amber-300 font-semibold">※ 관심고객 등록 시 전담 상담사 1:1 우선 배정 및 즉시 상담 진행</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-center w-full">
              <button
                onClick={onOpenReservation}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-base py-3.5 px-6 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>관심고객 등록 신청</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={SITE_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-900/90 hover:bg-blue-800 border border-blue-600/50 text-white font-bold text-sm py-3 px-4 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>1688-8768 즉시 전화연결</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Key Highlight Stats Banner including 즉시입주 & 80% 대출 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-amber-500/20 to-slate-800/80 border border-amber-400/40 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-xs text-amber-300 font-black mb-1">입주 시기</div>
            <div className="text-xl sm:text-2xl font-black text-amber-400">즉시입주 가능</div>
            <div className="text-[11px] text-slate-300 mt-0.5">기다림 없는 빠른 입주</div>
          </div>

          <div className="bg-gradient-to-b from-emerald-500/20 to-slate-800/80 border border-emerald-400/40 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-xs text-emerald-300 font-black mb-1">금융 혜택</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400">80% 대출 가능</div>
            <div className="text-[11px] text-slate-300 mt-0.5">HUG 안심 보증 대출</div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-xs text-amber-400 font-bold mb-1">단지 규모</div>
            <div className="text-xl sm:text-2xl font-black text-white">533세대 대단지</div>
            <div className="text-[11px] text-slate-400 mt-0.5">78㎡ · 84㎡ 4Bay 혁신평면</div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center backdrop-blur-sm">
            <div className="text-xs text-amber-400 font-bold mb-1">안심 학군</div>
            <div className="text-xl sm:text-2xl font-black text-white">초품아 단지</div>
            <div className="text-[11px] text-slate-400 mt-0.5">용머리초 정문 도보 1분</div>
          </div>
        </div>

        {/* Core Checklist Badges */}
        <div className="mt-10 pt-8 border-t border-slate-800 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>즉시입주 가능</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>임대보증금 80% 대출 가능</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>만 19세 이상 누구나 신청</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>취득세 · 재산세 비과세 0원</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>HUG 100% 안심 보증</span>
          </div>
        </div>
      </div>
    </div>
  );
};
