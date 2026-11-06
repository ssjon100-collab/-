import React, { useState } from 'react';
import { Layers, CheckCircle2, Phone, Calendar, ZoomIn } from 'lucide-react';
import { UNIT_TYPES, SITE_INFO } from '../data/siteData';

interface FloorPlansProps {
  onOpenReservation: () => void;
}

export const FloorPlans: React.FC<FloorPlansProps> = ({ onOpenReservation }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('84A');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const selectedUnit = UNIT_TYPES.find((u) => u.id === selectedTypeId) || UNIT_TYPES[1];

  return (
    <section id="floorplan" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-100/70 px-3.5 py-1.5 rounded-full">
            UNIT FLOOR PLAN
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            평면안내
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            공간의 품격을 높이는 4Bay 혁신 평면과 넉넉한 수납공간!
            <br />
            <strong className="text-amber-600 font-bold">즉시입주 가능</strong> · <strong className="text-emerald-700 font-bold">80% 대출 가능</strong> 실수요자 선호도 1위 전용 78㎡ 및 84㎡ 특화 설계를 확인하세요.
          </p>
        </div>

        {/* Type Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-200/90 rounded-2xl gap-2">
            {UNIT_TYPES.map((type) => {
              const isActive = selectedTypeId === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => {
                    setSelectedTypeId(type.id);
                    setIsZoomed(false);
                  }}
                  className={`px-5 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-950 text-white shadow-lg'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span>{type.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-300 text-slate-700'}`}>
                    {type.pyeong}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Floor Plan Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Floor Plan Image Container with real isometric image */}
            <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden flex flex-col justify-between border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black text-amber-400">{selectedUnit.name}</span>
                  <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-medium">
                    총 {selectedUnit.totalUnits}세대
                  </span>
                  <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-black px-2 py-0.5 rounded">
                    즉시입주 가능
                  </span>
                </div>
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="inline-flex items-center gap-1 text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md border border-slate-700 cursor-pointer transition-all"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isZoomed ? '기본 크기' : '확대 보기'}</span>
                </button>
              </div>

              {/* Real 3D Isometric Blueprint Image */}
              <div className="w-full aspect-[4/3] bg-white rounded-xl border border-slate-800 relative flex items-center justify-center p-3 overflow-hidden shadow-inner">
                <img
                  src={selectedUnit.imagePath}
                  alt={`안성공도 센트럴카운티 ${selectedUnit.name} 입체 투시도`}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
                <span>구조: {selectedUnit.structure}</span>
                <span className="text-amber-400 font-semibold">{selectedUnit.aspect}</span>
              </div>
            </div>

            {/* Right Specs and Features */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
                    SPECIFICATIONS
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    80% 대출 가능
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {selectedUnit.name} ({selectedUnit.pyeong})
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {selectedUnit.description}
                </p>

                {/* Dimensions Table */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 mb-6">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block font-medium">전용면적</span>
                      <span className="font-bold text-slate-900 text-sm">{selectedUnit.exclusiveArea}㎡</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">공급면적</span>
                      <span className="font-bold text-slate-900 text-sm">{selectedUnit.supplyArea}㎡</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">계약면적</span>
                      <span className="font-bold text-slate-900 text-sm">{selectedUnit.contractArea}㎡</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">공급 세대수</span>
                      <span className="font-bold text-blue-900 text-sm">{selectedUnit.totalUnits}세대</span>
                    </div>
                  </div>
                </div>

                {/* Features checklist */}
                <div className="space-y-2 mb-6">
                  {selectedUnit.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: (유니트관람예약 removed as requested) */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenReservation}
                  className="flex-1 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3.5 px-4 rounded-xl text-center text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  관심고객 등록하기
                </button>
                <a
                  href={SITE_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-5 rounded-xl text-sm shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  1688-8768
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
