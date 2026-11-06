import React from 'react';
import { Phone, Building2, Shield, Info, Zap, Award } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 sm:py-16 border-t border-slate-800 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-slate-800 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-900/60 border border-blue-700/50 flex items-center justify-center text-amber-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-white tracking-tight">
                  안성공도 <span className="text-amber-400">센트럴카운티</span>
                </span>
                <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded">
                  즉시입주 가능
                </span>
                <span className="bg-emerald-500 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded">
                  80% 대출 가능
                </span>
              </div>
              <p className="text-[11px] text-slate-400">10년 안심 민간임대아파트 공식 홍보관</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">분양·임대 대표문의</span>
            <a
              href={SITE_INFO.phoneTel}
              className="text-2xl font-black text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-5 h-5" />
              {SITE_INFO.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Middle Project Details */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-400 text-[11px] leading-relaxed">
          <div>
            <h5 className="font-bold text-slate-300 text-xs mb-2">사업 및 시공 안내</h5>
            <p>• 사업지: {SITE_INFO.siteAddress}</p>
            <p>• 시행사: {SITE_INFO.developer} | 시공사: {SITE_INFO.constructor}</p>
            <p>• 보증기관: {SITE_INFO.trustCompany}</p>
            <p>• 단지규모: {SITE_INFO.scale} (총 {SITE_INFO.totalUnits})</p>
          </div>

          <div>
            <h5 className="font-bold text-slate-300 text-xs mb-2">입주 및 상담 안내</h5>
            <p>• 입주시점: <strong className="text-amber-300">즉시입주 가능</strong> (준공 완료 단지)</p>
            <p>• 금융혜택: <strong className="text-emerald-400">임대보증금 최대 80% 대출 가능</strong></p>
            <p>• 대표전화: <strong className="text-white">1688-8768</strong> (연중무휴 전문 상담)</p>
            <p>• 선착순 동·호지정 상담 진행 중</p>
          </div>

          <div>
            <h5 className="font-bold text-slate-300 text-xs mb-2">소비자 유의사항</h5>
            <p>
              본 웹사이트에 사용된 CG, 일러스트, 사진 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제 현장 및 인허가 과정에 따라 다소 변경될 수 있습니다.
            </p>
            <p className="mt-1">
              자세한 분양 조건 및 계약 안내는 공식 상담센터(1688-8768)를 통해 반드시 확인하시기 바랍니다.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2026 안성공도 센트럴카운티 공식 홍보관. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">개인정보처리방침</span>
            <span>|</span>
            <span className="hover:text-slate-300 cursor-pointer">이용약관</span>
            <span>|</span>
            <a href={SITE_INFO.phoneTel} className="text-amber-400 hover:underline font-bold">
              대표번호: 1688-8768
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
