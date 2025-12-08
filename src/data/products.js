export const products = [
  {
    id: 1,
    name: "어쿠스틱 기타",
    price: 250000,
    description: "입문용부터 공연용까지",
    image: "https://images.pexels.com/photos/625788/pexels-photo-625788.jpeg",
  },
  {
    id: 2,
    name: "일렉기타",
    price: 450000,
    description: "락/메탈 전용 일렉기타",
    image: "https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg",
  },
  {
    id: 3,
    name: "베이스",
    price: 400000,
    description: "밴드 사운드를 책임지는 베이스",
    image: "https://images.pexels.com/photos/8198070/pexels-photo-8198070.jpeg",
  },
  {
    id: 4,
    name: "디지털 피아노",
    price: 800000,
    description: "88건반 디지털 피아노",
    image: "https://images.pexels.com/photos/8722689/pexels-photo-8722689.jpeg",
  },
  {
    id: 5,
    name: "신디사이저",
    price: 650000,
    description: "다양한 사운드 메이킹",
    image: "https://images.pexels.com/photos/10148872/pexels-photo-10148872.jpeg",
  },
  {
    id: 6,
    name: "전자 드럼",
    price: 1200000,
    description: "조용한 연습용 전자드럼",
    image: "https://images.pexels.com/photos/7715572/pexels-photo-7715572.jpeg",
  },
  {
    id: 7,
    name: "퍼커션 세트",
    price: 180000,
    description: "카혼·젬베 등 리듬 악기",
    image: "https://images.pexels.com/photos/7285476/pexels-photo-7285476.jpeg",
  },
  {
    id: 8,
    name: "색소폰",
    price: 900000,
    description: "재즈에 어울리는 색소폰",
    image: "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg",
  },
  {
    id: 9,
    name: "바이올린",
    price: 300000,
    description: "클래식용 바이올린",
    image: "https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg",
  },
  {
    id: 10,
    name: "레코딩 패키지",
    price: 550000,
    description: "마이크·오디오 인터페이스 세트",
    image: "https://images.pexels.com/photos/10681799/pexels-photo-10681799.jpeg",
  },
];
export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
