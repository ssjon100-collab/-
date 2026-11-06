import React, { useState } from 'react';
import { Trees, Sun, Building, ShieldCheck, Phone, ZoomIn, CheckCircle2, X, Maximize2, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface ComplexLayoutProps {
  onOpenReservation: () => void;
}

export const ComplexLayout: React.FC<ComplexLayoutProps> = ({ onOpenReservation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="complex" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-blue-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            MASTER PLAN & COMPLEX LAYOUT
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            단지배치도
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            전 세대 남향 위주 판상형 배치와 넓은 동간 거리, 단지 바로 앞 용머리초등학교!
            <br />
            <strong className="text-amber-600 font-bold">즉시입주 가능</strong> · <strong className="text-blue-900 font-bold">전세대출 80% 가능</strong> 잔여세대 선착순 동·호수 상담 접수 중입니다.
          </p>
        </div>

        {/* Master Complex Layout Image Container (Full width, detail panel removed as requested) */}
        <div className="bg-slate-950 rounded-3xl p-4 sm:p-7 text-white shadow-2xl relative overflow-hidden border border-slate-800 mb-12">
          {/* Top Control Bar with Legend */}
          <div className="flex flex-col lg:flex-row items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-4">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <Trees className="w-5 h-5 text-emerald-400" />
                <span className="font-extrabold text-base sm:text-lg">안성공도 센트럴카운티 단지배치도</span>
              </div>
              <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full">
                즉시입주 가능
              </span>
              <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-full">
                80% 대출 가능
              </span>
            </div>

            {/* Type Color Legend */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-300 border border-orange-500/40 px-2.5 py-1 rounded-md">
                <span className="w-3 h-3 rounded-sm bg-[#f59e0b] shadow-sm"></span>
                78㎡ (97세대)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2.5 py-1 rounded-md">
                <span className="w-3 h-3 rounded-sm bg-[#3b82f6] shadow-sm"></span>
                84㎡ A (320세대)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2.5 py-1 rounded-md">
                <span className="w-3 h-3 rounded-sm bg-[#c084fc] shadow-sm"></span>
                84㎡ B (116세대)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 transition-all cursor-pointer shadow-sm hover:border-slate-600"
                title="배치도 전체화면 보기"
              >
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span>전체화면 확대</span>
              </button>
              <a
                href={SITE_INFO.phoneTel}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1 shadow-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                1688-8768
              </a>
            </div>
          </div>

          {/* Real Masterplan Image */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center border border-slate-800 group cursor-pointer"
               onClick={() => setIsModalOpen(true)}>
            <img
              src={SITE_INFO.complexImage}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = SITE_INFO.complexImageRaw;
              }}
              alt="안성공도 센트럴카운티 단지배치도"
              className="w-full object-contain max-h-[720px] transition-transform duration-300 group-hover:scale-[1.01]"
            />
            {/* Hover overlay hint */}
            <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-400/30 flex items-center gap-1.5 shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
              <span>클릭하여 고화질 확대보기</span>
            </div>
          </div>

          {/* Key Facilities Badges */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-1 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 용머리초등학교 단지 바로 앞 (도보 1분)
              </span>
              <span className="flex items-center gap-1 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> 101동 ~ 108동 남향 위주 판상형
              </span>
              <span className="flex items-center gap-1 text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 중앙 어린이놀이터 & 잔디광장 & 맘스스테이션
              </span>
            </div>
            <span className="text-amber-300 font-bold">
              ※ 잔여 로얄 동·호수 상담: 1688-8768
            </span>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal for High-Res Inspection */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[94vh] bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Trees className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-bold text-sm sm:text-base">안성공도 센트럴카운티 단지배치도 (고화질)</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={SITE_INFO.phoneTel}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-3 py-1.5 rounded-lg flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    1688-8768
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image View */}
              <div className="flex-1 overflow-auto p-2 bg-slate-950 flex items-center justify-center">
                <img
                  src={SITE_INFO.complexImage}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = SITE_INFO.complexImageRaw;
                  }}
                  alt="안성공도 센트럴카운티 단지배치도 원본"
                  className="max-w-full max-h-[82vh] object-contain rounded-lg"
                />
              </div>

              {/* Modal Bottom Guide */}
              <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="text-orange-400 font-semibold">■ 78㎡</span>
                  <span className="text-blue-400 font-semibold">■ 84㎡ A</span>
                  <span className="text-purple-400 font-semibold">■ 84㎡ B</span>
                  <span className="text-emerald-400">용머리초등학교 바로 앞</span>
                </div>
                <span className="text-amber-300 font-bold">즉시입주 가능 · 80% 대출 가능</span>
              </div>
            </div>
          </div>
        )}

        {/* 4 Complex Features Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <Sun className="w-6 h-6 text-amber-500 mb-2" />
            <h4 className="font-bold text-slate-900 text-sm mb-1">남향 위주 판상형 단지</h4>
            <p className="text-xs text-slate-600">사계절 풍부한 채광과 맞통풍을 고려하여 남동·남서향으로 전 세대를 배치했습니다.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <Trees className="w-6 h-6 text-emerald-500 mb-2" />
            <h4 className="font-bold text-slate-900 text-sm mb-1">에코 힐링 공원형 단지</h4>
            <p className="text-xs text-slate-600">중앙 잔디광장, 시니어정원, 건강정원, 테마 산책로가 어우러진 쾌적한 친환경 단지입니다.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <Building className="w-6 h-6 text-blue-500 mb-2" />
            <h4 className="font-bold text-slate-900 text-sm mb-1">즉시입주 가능 단지</h4>
            <p className="text-xs text-slate-600">준공 완료 단지로 오랜 기다림 없이 계약 즉시 원하시는 일정에 입주하실 수 있습니다.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <ShieldCheck className="w-6 h-6 text-indigo-500 mb-2" />
            <h4 className="font-bold text-slate-900 text-sm mb-1">80% 안심 대출 가능</h4>
            <p className="text-xs text-slate-600">HUG 주택도시보증공사 전액 보증으로 1금융권 시중은행 전세대출 최대 80% 지원됩니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
