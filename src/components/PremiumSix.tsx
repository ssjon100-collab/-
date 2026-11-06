import React from 'react';
import { 
  GraduationCap, 
  ShoppingBag, 
  Car, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  CheckCircle,
  Phone
} from 'lucide-react';
import { PREMIUM_ITEMS, SITE_INFO } from '../data/siteData';

interface PremiumSixProps {
  onOpenReservation: () => void;
}

export const PremiumSix: React.FC<PremiumSixProps> = ({ onOpenReservation }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-amber-500" />;
      case 'ShoppingBag': return <ShoppingBag className="w-8 h-8 text-blue-500" />;
      case 'Car': return <Car className="w-8 h-8 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-indigo-500" />;
      case 'Layers': return <Layers className="w-8 h-8 text-purple-500" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-rose-500" />;
      default: return <ShieldCheck className="w-8 h-8 text-amber-500" />;
    }
  };

  return (
    <section id="premium" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold text-xs sm:text-sm tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            PREMIUM BIG 6
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            안성공도 센트럴카운티 6대 특권
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            교육, 생활, 교통, 비전까지 모두 갖춘 완성형 프리미엄 라이프!
            <br />
            당신의 일상을 품격으로 채우는 6가지 가치를 확인해 보세요.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PREMIUM_ITEMS.map((item) => (
            <div
              key={item.number}
              className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-blue-900/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-blue-900 transition-colors">
                    {item.number}
                  </span>
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-blue-900 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-600 mb-3">
                  {item.subTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bullet checklist */}
              <div className="space-y-2 pt-4 border-t border-slate-200/70">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Section */}
        <div className="mt-14 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
              EXCLUSIVE BENEFITS FOR VISITORS
            </span>
            <h4 className="text-xl sm:text-2xl font-black mt-1">
              지금 관심고객 등록 시 로얄 동·호수 우선 상담 및 특별 혜택 제공!
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              전문 상담사가 즉시입주 잔여세대 및 80% 전세대출 1:1 맞춤 상담을 도와드립니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
            >
              관심고객 등록하기
            </button>
            <a
              href={SITE_INFO.phoneTel}
              className="hidden sm:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              1688-8768
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
