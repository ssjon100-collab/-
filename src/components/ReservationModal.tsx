import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle, Shield, User, Sparkles, Send, Loader2 } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';
import { ReservationFormData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    inquiry: '',
    agreePrivacy: true,
    agreeMarketing: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatPhoneNumber = (val: string) => {
    const raw = val.replace(/[^0-9]/g, '').slice(0, 11);
    if (raw.length <= 3) return raw;
    if (raw.length <= 7) return `${raw.slice(0, 3)}-${raw.slice(3)}`;
    return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('성함을 입력해 주세요.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('올바른 휴대폰 번호를 입력해 주세요.');
      return;
    }
    if (!formData.agreePrivacy) {
      setErrorMsg('개인정보 수집 및 이용 동의가 필요합니다.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    const code = 'AC-' + Math.floor(100000 + Math.random() * 900000);

    try {
      // 1. Submit to Formspree endpoint (https://formspree.io/f/xqppjnqd)
      const response = await fetch(SITE_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.inquiry.trim() || '문의사항 없음',
          _subject: `[안성공도 센트럴카운티] 빠른상담 신청 (${formData.name} / ${formData.phone})`,
          '성함': formData.name.trim(),
          '연락처': formData.phone.trim(),
          '문의사항': formData.inquiry.trim() || '없음',
          '접수번호': code,
          '개인정보수집동의': formData.agreePrivacy ? '동의' : '미동의',
          '신청경로': '빠른상담 모달 팝업',
          '단지명': '안성공도 센트럴카운티',
          '대표번호': '1688-8768',
          '신청일시': new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || '접수 전송에 실패했습니다. 다시 시도해 주세요.');
      }

      // 2. Local backup storage
      try {
        const existing = JSON.parse(localStorage.getItem('central_county_reservations') || '[]');
        existing.push({
          ...formData,
          code,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('central_county_reservations', JSON.stringify(existing));
      } catch {
        // ignore
      }

      setReservationCode(code);
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || '접수 전송 중 오류가 발생했습니다. 대표번호(1688-8768)로 문의 바랍니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[11px] font-bold text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full">
              즉시입주 가능
            </span>
            <span className="text-[11px] font-bold text-emerald-300 bg-emerald-400/20 px-2.5 py-0.5 rounded-full">
              80% 대출 가능
            </span>
          </div>

          <h3 className="text-xl font-black text-white">
            관심고객 등록 & 상담신청
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            대표번호 1688-8768 | 전담 상담사 1:1 맞춤 배정
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">
                관심고객 등록이 완료되었습니다!
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                접수번호: <strong className="text-blue-900">{reservationCode}</strong>
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 text-left space-y-1.5 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">성함</span>
                  <span className="font-bold">{formData.name} 님</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">연락처</span>
                  <span className="font-bold">{formData.phone}</span>
                </div>
              </div>

              <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200 mb-5">
                대표번호 <strong>1688-8768</strong>로 담당 상담사가 즉시입주 잔여세대 안내를 드립니다.
              </p>

              <button
                onClick={onClose}
                className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer"
              >
                확인 및 닫기
              </button>
            </div>
          ) : (
            <form action={SITE_INFO.formspreeEndpoint} method="POST" onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="[안성공도 센트럴카운티] 빠른상담 신청" />
              {errorMsg && (
                <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  성함 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:border-blue-900 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  휴대폰 번호 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:border-blue-900 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  문의사항 (선택사항)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="즉시입주 가능 여부, 80% 대출 문의, 동호수 문의 등"
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:border-blue-900 outline-none resize-none"
                ></textarea>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="mt-0.5 rounded text-blue-900"
                  />
                  <span>[필수] 개인정보 수집 및 분양·임대 상담 안내 동의</span>
                </label>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                      <span>신청 정보 전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>관심고객 등록 완료</span>
                    </>
                  )}
                </button>
                <a
                  href={SITE_INFO.phoneTel}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  전화로 빠른 상담하기 (1688-8768)
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
