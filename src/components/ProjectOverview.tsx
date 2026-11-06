import React from 'react';
import { Building2, Layers, Users, Car, Shield, Phone, Zap, Award } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface ProjectOverviewProps {
  onOpenReservation: () => void;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ onOpenReservation }) => {
  const specs = [
    { label: '사업명', value: '안성공도 센트럴카운티 (10년 안심 민간임대아파트)' },
    { label: '대지위치', value: '경기도 안성시 공도읍 용두리 522-1번지 일원' },
    { label: '지역지구', value: '제2종 일반주거지역' },
    { label: '건축규모', value: '지하 1층 ~ 지상 최고 25층, 아파트 7개 동' },
    { label: '공급세대수', value: '총 533세대 (전용 78㎡ 97세대, 전용 84㎡ 436세대)' },
    { label: '주차대수', value: '총 650대 (세대당 약 1.22대 / 광폭 주차면 적용)' },
    { label: '입주시점', value: '즉시입주 가능 (준공 완료 단지)' },
    { label: '금융지원', value: '임대보증금 최대 80% 전세자금 대출 가능' },
    { label: '공급형태', value: '10년 장기 일반민간임대주택 (전세형)' },
    { label: '시행사', value: '라송산업(주)' },
    { label: '시공사', value: '(주)한토건설' },
    { label: '보증기관', value: 'HUG 주택도시보증공사 (임대보증금 100% 보증)' },
    { label: '분양문의', value: '1688-8768 (선착순 동·호지정 상담)' },
  ];

  return (
    <section id="overview" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-100/70 px-3.5 py-1.5 rounded-full">
            PROJECT OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            사업개요
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            안성과 평택을 잇는 공도 주거의 새로운 중심!
            <br />
            <strong className="text-amber-600 font-bold">즉시입주 가능</strong> · <strong className="text-emerald-700 font-bold">80% 대출 가능</strong> 총 533세대 대단지 랜드마크 아파트입니다.
          </p>
        </div>

        {/* Grid: Visual Card & Specs Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  즉시입주 가능
                </span>
                <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  80% 대출 가능
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                안성공도 <br />
                <span className="text-amber-400">센트럴카운티</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                남향 위주 4Bay 판상형 특화 단지로 일조권과 조망권을 극대화하였으며,
                아이들의 안전한 통학이 보장되는 도보 1분 초품아 단지입니다.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
                  <div className="text-slate-400 text-xs">총 세대수</div>
                  <div className="text-xl font-bold text-white mt-0.5">533세대</div>
                </div>
                <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
                  <div className="text-slate-400 text-xs">최고 층수</div>
                  <div className="text-xl font-bold text-white mt-0.5">지상 25층</div>
                </div>
                <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
                  <div className="text-slate-400 text-xs">주차 대수</div>
                  <div className="text-xl font-bold text-white mt-0.5">650대</div>
                </div>
                <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
                  <div className="text-slate-400 text-xs">단지 규모</div>
                  <div className="text-xl font-bold text-white mt-0.5">7개 동</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={SITE_INFO.phoneTel}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                분양 상담: 1688-8768
              </a>
              <button
                onClick={onOpenReservation}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-4 rounded-xl text-center text-sm transition-all cursor-pointer"
              >
                관심고객 등록하기
              </button>
            </div>
          </div>

          {/* Specs Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-blue-900 rounded-full"></span>
              세부 사업내역
            </h3>

            <div className="divide-y divide-slate-100 flex-1">
              {specs.map((item, idx) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-1 sm:grid-cols-12 py-3 px-2 ${
                    idx % 2 === 0 ? 'bg-slate-50/50 rounded-lg' : ''
                  }`}
                >
                  <dt className="sm:col-span-4 text-xs sm:text-sm font-bold text-slate-500 flex items-center">
                    {item.label}
                  </dt>
                  <dd className="sm:col-span-8 text-xs sm:text-sm font-semibold text-slate-900 mt-1 sm:mt-0">
                    {item.label === '분양문의' ? (
                      <a href={SITE_INFO.phoneTel} className="text-blue-900 font-extrabold hover:underline">
                        {item.value}
                      </a>
                    ) : item.label === '보증기관' ? (
                      <span className="text-emerald-700 font-bold">{item.value}</span>
                    ) : item.label === '입주시점' ? (
                      <span className="text-amber-600 font-extrabold">{item.value}</span>
                    ) : item.label === '금융지원' ? (
                      <span className="text-emerald-700 font-extrabold">{item.value}</span>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[11px] text-slate-400">
                ※ 상기 사업개요는 인허가 및 현장 상황에 따라 다소 변경될 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
