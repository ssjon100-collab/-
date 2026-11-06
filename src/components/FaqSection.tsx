import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQ_DATA, SITE_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [category, setCategory] = useState<string>('전체');

  const categories = ['전체', '임대자격', '세제혜택', '보증금안전', '단지특화'];

  const filteredFaq = category === '전체'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === category);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-900 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-blue-100/70 px-3.5 py-1.5 rounded-full">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            10년 민간임대아파트 및 계약과 관련하여 고객님들께서 가장 많이 궁금해하시는 사항들입니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setOpenIdx(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                category === cat
                  ? 'bg-blue-950 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-950 text-xs font-black flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-4 leading-relaxed bg-slate-50/40">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        A
                      </span>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question banner */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200 text-slate-700">
          <p className="text-xs sm:text-sm font-medium mb-3">
            더 자세한 상담이나 맞춤 세무·금융 조건이 궁금하신가요?
          </p>
          <a
            href={SITE_INFO.phoneTel}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-2.5 rounded-xl shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            대표문의: {SITE_INFO.phoneFormatted} (전문 상담원 연결)
          </a>
        </div>
      </div>
    </section>
  );
};
