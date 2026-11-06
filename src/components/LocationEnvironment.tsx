import React, { useState } from 'react';
import { 
  Car, 
  GraduationCap, 
  ShoppingBag, 
  Sparkles, 
  MapPin, 
  Check, 
  Compass, 
  Navigation,
  ArrowRight
} from 'lucide-react';
import { LOCATION_TABS, SITE_INFO } from '../data/siteData';

export const LocationEnvironment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'education' | 'life' | 'vision'>('traffic');

  const tabConfig = [
    { key: 'traffic' as const, label: '교통환경', icon: Car, en: 'TRAFFIC' },
    { key: 'education' as const, label: '교육환경', icon: GraduationCap, en: 'EDUCATION' },
    { key: 'life' as const, label: '생활환경', icon: ShoppingBag, en: 'LIFE' },
    { key: 'vision' as const, label: '미래비전', icon: Sparkles, en: 'VISION' },
  ];

  const currentTabData = LOCATION_TABS[activeTab];

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-100/70 px-3.5 py-1.5 rounded-full">
            LOCATION & INFRASTRUCTURE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            입지환경
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            안성과 평택의 더블 프리미엄 인프라를 한걸음에!
            <br />
            사통팔달 교통망과 도보 1분 안심 학군, 스타필드 몰세권의 압도적인 입지를 경험하세요.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl max-w-full overflow-x-auto">
            {tabConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-blue-950 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                  {tabConfig.find((t) => t.key === activeTab)?.en}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-2">
                  {currentTabData.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  {currentTabData.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                {currentTabData.items.map((item, idx) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-900/40 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-blue-950 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {item.label}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Map Representation */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-6 text-white shadow-inner flex flex-col justify-between min-h-[380px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-amber-400" />
                    <span className="font-bold text-sm tracking-wide">입지 하이라이트</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-bold bg-amber-400/20 px-2 py-0.5 rounded">
                    안성·평택 핵심축
                  </span>
                </div>

                <div className="space-y-3 mt-4 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <div className="text-amber-400 font-bold mb-0.5">교육 특구</div>
                    <div className="text-slate-200 font-medium">용머리초 도보 1분 (단지 앞 횡단보도 없이 통학)</div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <div className="text-blue-400 font-bold mb-0.5">몰세권 인프라</div>
                    <div className="text-slate-200 font-medium">스타필드 안성 차량 5분 (쇼핑, 메가박스, 아쿠아필드)</div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <div className="text-emerald-400 font-bold mb-0.5">광역 고속교통</div>
                    <div className="text-slate-200 font-medium">경부고속도로 안성IC 5분, 38번 국도 서동대로 인접</div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80">
                    <div className="text-purple-400 font-bold mb-0.5">첨단 배후수요</div>
                    <div className="text-slate-200 font-medium">삼성전자 평택캠퍼스 및 브레인시티 직주근접</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">현장: 경기도 안성시 공도읍 용두리 522-1</span>
                <span className="text-amber-400 font-bold">1688-8768</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
