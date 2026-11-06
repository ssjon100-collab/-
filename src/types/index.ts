export interface UnitType {
  id: string;
  name: string;
  pyeong: string;
  exclusiveArea: number; // 전용면적
  supplyArea: number;    // 공급면적
  contractArea: number;  // 계약면적
  totalUnits: number;    // 세대수
  description: string;
  features: string[];
  structure: string;
  aspect: string;
  imagePath: string;     // 평형별 3D 투시도 이미지 경로
}

export interface PremiumItem {
  number: string;
  title: string;
  subTitle: string;
  description: string;
  tag: string;
  iconName: string;
  points: string[];
}

export interface ReservationFormData {
  name: string;
  phone: string;
  inquiry: string;
  agreePrivacy: boolean;
  agreeMarketing: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: '임대자격' | '세제혜택' | '보증금안전' | '단지특화';
}
