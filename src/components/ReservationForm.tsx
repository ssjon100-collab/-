import React, { useState } from 'react';
import { Phone, CheckCircle, Shield, User, AlertCircle, Sparkles, Send, Zap, Loader2 } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';
import { ReservationFormData } from '../types';

export const ReservationForm: React.FC = () => {
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

  const formatPhoneNumber = (val: string) => {
    const raw = val.replace(/[^0-9]/g, '').slice(0, 11);
    if (raw.length <= 3) return raw;
    if (raw.length <= 7) return `${raw.slice(0, 3)}-${raw.slice(3)}`;
    return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) });
    if (errorMsg) setErrorMsg('');
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
      setErrorMsg('개인정보 수집 및 이용에 동의해 주셔야 등록이 가능합니다.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    const code = 'AC-' + Math.floor(100000 + Math.random() * 900000);

    try {
      // 1. Submit to user's Formspree endpoint (https://formspree.io/f/xqppjnqd)
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
          _subject: `[안성공도 센트럴카운티] 관심고객 등록 접수 (${formData.name} / ${formData.phone})`,
          '성함': formData.name.trim(),
          '연락처': formData.phone.trim(),
          '문의사항': formData.inquiry.trim() || '없음',
          '접수번호': code,
          '개인정보수집동의': formData.agreePrivacy ? '동의' : '미동의',
          '마케팅정보수신동의': formData.agreeMarketing ? '동의' : '미동의',
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
        // ignore storage errors
      }

      setReservationCode(code);
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || '접수 전송 중 오류가 발생했습니다. 대표번호(1688-8768)로 문의해 주시기 바랍니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-blue-950 text-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            VIP CUSTOMER REGISTRATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
            관심고객 등록 & 상담 신청
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md">
              즉시입주 가능
            </span>
            <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md">
              80% 대출 가능
            </span>
            <span className="bg-blue-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              선착순 동·호지정 진행중
            </span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            온라인 등록 시 전문 상담사가 배정되어 잔여 동·호수 안내 및 전세자금 대출 맞춤 상담을 신속하게 도와드립니다.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {isSubmitted ? (
            <div className="text-center py-10 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>

              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                등록 완료
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-2">
                관심고객 등록이 완료되었습니다!
              </h3>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto my-6 text-left text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">접수번호</span>
                  <span className="font-extrabold text-blue-900">{reservationCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">성함</span>
                  <span className="font-bold text-slate-800">{formData.name} 님</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">연락처</span>
                  <span className="font-bold text-slate-800">{formData.phone}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-md mx-auto text-xs text-amber-900 mb-6">
                <p className="font-bold mb-1">📢 전문 상담사 안내</p>
                <p>
                  대표번호 <strong className="text-blue-900 font-extrabold">1688-8768</strong>을 통해 전담 상담사가 빠른 시간 내에 연락을 드려 즉시입주 조건 및 잔여 동·호수 상담을 진행해 드립니다.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={SITE_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  대표전화 1688-8768 즉시 통화
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      inquiry: '',
                      agreePrivacy: true,
                      agreeMarketing: true,
                    });
                  }}
                  className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                >
                  새로운 등록 작성하기
                </button>
              </div>
            </div>
          ) : (
            <form action={SITE_INFO.formspreeEndpoint} method="POST" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="[안성공도 센트럴카운티] 관심고객 등록 접수" />
              {errorMsg && (
                <div className="flex items-center gap-2 bg-red-50 text-red-700 text-xs sm:text-sm p-3.5 rounded-xl border border-red-200 font-medium animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    성함 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errorMsg) setErrorMsg('');
                      }}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                    휴대폰 번호 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-sm font-medium text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Inquiry Note */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  문의사항 (선택사항)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="즉시입주 일정 문의, 잔여 동호수 문의, 전세자금 80% 대출 조건 등 궁금하신 점을 자유롭게 남겨주세요."
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 text-xs sm:text-sm font-medium text-slate-900 outline-none resize-none"
                ></textarea>
              </div>

              {/* Agreements */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/90 space-y-2 text-xs text-slate-700">
                <label className="flex items-start gap-2 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="mt-0.5 rounded text-blue-900 focus:ring-blue-900"
                  />
                  <span>
                    [필수] 개인정보 수집 및 이용 동의 (목적: 안성공도 센트럴카운티 분양·임대 상담, 보유기간: 분양 완료 시까지)
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    checked={formData.agreeMarketing}
                    onChange={(e) => setFormData({ ...formData, agreeMarketing: e.target.checked })}
                    className="mt-0.5 rounded text-blue-900 focus:ring-blue-900"
                  />
                  <span>
                    [선택] 분양 일정, 잔여 세대 프로모션 등 유용한 문자(SMS) 정보 수신에 동의합니다.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 hover:from-blue-900 hover:to-indigo-800 text-white font-black text-base py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
                    <span>신청 정보 전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-amber-400" />
                    <span>관심고객 등록 완료하기</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>고객님의 소중한 개인정보는 상담 목적 외에 절대 사용되지 않습니다.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
