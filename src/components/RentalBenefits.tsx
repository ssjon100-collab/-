import React from 'react';
import { 
  ShieldCheck, 
  Coins, 
  UserCheck, 
  FileCheck2, 
  Clock, 
  Repeat, 
  Award, 
  CreditCard,
  Check,
  X,
  PhoneCall,
  Info
} from 'lucide-react';
import { RENTAL_BENEFITS, COMPARISON_DATA, SITE_INFO } from '../data/siteData';

interface RentalBenefitsProps {
  onOpenReservation: () => void;
}

export const RentalBenefits: React.FC<RentalBenefitsProps> = ({ onOpenReservation }) => {
  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0: return <UserCheck className="w-6 h-6 text-amber-500" />;
      case 1: return <Coins className="w-6 h-6 text-amber-500" />;
      case 2: return <FileCheck2 className="w-6 h-6 text-amber-500" />;
      case 3: return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      case 4: return <Clock className="w-6 h-6 text-blue-500" />;
      case 5: return <Repeat className="w-6 h-6 text-indigo-500" />;
      case 6: return <Award className="w-6 h-6 text-amber-500" />;
      case 7: return <CreditCard className="w-6 h-6 text-emerald-500" />;
      default: return <Check className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            10-YEAR PRIVATE RENTAL HOUSING
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            왜 <span className="text-blue-900">안성공도 센트럴카운티</span>인가?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            불안한 전세 시장과 집값 걱정은 이제 그만!
            <br />
            HUG 전액 보증으로 10년 동안 내 집처럼 안전하고 편안하게 누리는 8가지 핵심 혜택입니다.
          </p>
        </div>

        {/* 8 Major Rental Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {RENTAL_BENEFITS.map((b, idx) => (
            <div
              key={b.title}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-900/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                    {getBenefitIcon(idx)}
                  </div>
                  <span className="text-[11px] font-bold text-blue-900 bg-blue-100/60 px-2.5 py-1 rounded-full">
                    {b.badge}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  {b.subtitle}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-900 transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-blue-900">
                <span>자세히 상담받기</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table Section */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              COMPREHENSIVE COMPARISON
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold mt-2 mb-3">
              일반 분양 · 일반 전세 vs 안성공도 센트럴카운티
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              내 집 마련과 전세의 장점만을 모은 대한민국 주거의 새로운 표준
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700/80 text-xs sm:text-sm text-slate-300">
                  <th className="py-4 px-4 w-1/5 font-semibold">구분 항목</th>
                  <th className="py-4 px-4 w-1/4 font-semibold text-slate-400">일반 분양 (매매)</th>
                  <th className="py-4 px-4 w-1/4 font-semibold text-slate-400">일반 전세 (임대)</th>
                  <th className="py-4 px-5 w-1/3 font-bold text-amber-300 bg-blue-900/40 rounded-t-xl">
                    안성공도 센트럴카운티
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row) => (
                  <tr key={row.item} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-200">{row.item}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.generalSale}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.generalRent}</td>
                    <td className="py-3.5 px-5 font-bold text-amber-300 bg-blue-900/30">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.centralCounty}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>정확한 임대보증금 및 잔여세대 확인은 대표번호로 문의하시면 신속히 안내해 드립니다.</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={SITE_INFO.phoneTel}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-5 py-2.5 rounded-xl shadow-md transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                대표전화 1688-8768
              </a>
              <button
                onClick={onOpenReservation}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                관심고객 등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
