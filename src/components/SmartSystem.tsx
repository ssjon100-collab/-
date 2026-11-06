import React from 'react';
import { Smartphone, Wind, Zap, Shield, Dumbbell, BookOpen, Baby, Users } from 'lucide-react';

export const SmartSystem: React.FC = () => {
  const smartFeatures = [
    {
      icon: Smartphone,
      title: '스마트 홈 IoT 시스템',
      desc: '스마트폰 앱을 통해 세대 내 조명, 난방, 가스밸브를 외부에서도 편리하게 원격 제어합니다.',
    },
    {
      icon: Wind,
      title: '청정 환기 시스템',
      desc: '고성능 헤파필터를 장착한 열교환 환기장치로 실내 미세먼지와 오염물질을 배출하고 신선한 공기를 공급합니다.',
    },
    {
      icon: Zap,
      title: '에너지 절감 에코 시스템',
      desc: '단지 내 100% 친환경 고효율 LED 조명 적용 및 일괄소등 스위치로 관리비 부담을 대폭 낮춥니다.',
    },
    {
      icon: Shield,
      title: '안심 보안 방범 시스템',
      desc: '단지 주요 거점 200만 화소 고화질 CCTV와 지하주차장 비상호출벨, 무인택배 보관함이 24시간 안전을 지킵니다.',
    },
  ];

  const communityFacilities = [
    { icon: Dumbbell, name: '피트니스 센터 & GX룸', desc: '입주민의 건강과 활력을 위한 최신 운동기구 완비' },
    { icon: Dumbbell, name: '실내 골프연습장', desc: '계절에 상관없이 여유롭게 즐기는 실내 퍼팅 및 타석' },
    { icon: BookOpen, name: '작은도서관 & 독서실', desc: '자녀들의 학습 습관과 쾌적한 독서 분위기 조성' },
    { icon: Baby, name: '단지 내 어린이집', desc: '영유아 자녀를 안심하고 맡길 수 있는 보육 특화 공간' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            SMART SYSTEM & COMMUNITY
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            스마트 시스템 & 커뮤니티
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            첨단 기술로 완성되는 생활의 편리함과 일상의 여유를 더하는 고품격 커뮤니티 라이프를 선사합니다.
          </p>
        </div>

        {/* 4 Smart Tech System Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {smartFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-900/40 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-900/10 text-blue-900 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-950 group-hover:text-amber-400 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Community Center Strip */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">
              EXCLUSIVE COMMUNITY
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold mt-1">
              이웃과 소통하고 활력을 채우는 입주민 전용 커뮤니티
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityFacilities.map((comm) => {
              const Icon = comm.icon;
              return (
                <div
                  key={comm.name}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-amber-400 mb-2" />
                  <div className="font-bold text-sm text-white">{comm.name}</div>
                  <div className="text-xs text-slate-300 mt-1 leading-normal">{comm.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
