# Geometry Counting — Problem Pool
출처: 학생 워크시트 이미지 (2026-06-15 저장)
대상: Grant Speed Quiz 용 문제풀

---

## 문제 유형 4가지
1. Lines of Different Lengths (수직선, 서로 다른 길이의 선분 개수)
2. Count Squares (정사각형 개수)
3. Count Rectangles (직사각형 개수)
4. Count Triangles (삼각형 개수)

---

## Type 1: Lines of Different Lengths

### 핵심 공식
- n개의 점이 **등간격**이면: 서로 다른 길이 = n-1가지
- n개의 점이 **모두 다른 간격**이면: 서로 다른 선분 = C(n,2) = n(n-1)/2가지
  (단, 어떤 두 구간의 합도 서로 겹치지 않는다는 조건 필요)

### Example 1 (교재 예시)
- 5개 점 A, B, C, D, E (불등간격: AB=1, BC=3, CD=2, DE=1)
- 전체 C(5,2) = 10개 선분 중 같은 길이 확인 필요
- Answer: **10** (모두 다른 길이일 경우)

### Q2 (Practice)
- 5개 점 A, B, C, D, E (불등간격)
- Answer: **10**

### Q5(a) (Practice)
- 6개 점 A, B, C, D, E, F (불등간격)
- Answer: **15** (C(6,2), 모두 다른 길이일 경우)

### Q5(b) (Practice)
- 7개 점 A, B, C, D, E, F, G (불등간격)
- Answer: **21** (C(7,2), 모두 다른 길이일 경우)

---

## Type 2: Count Squares

### 핵심 공식
- m열 × n행 격자 (m≤n): Σ(k=1 to m) (m-k+1)(n-k+1)
- 특수 케이스 n×n 정사각형 격자: Σ(k=1 to n) (n-k+1)² = n(n+1)(2n+1)/6

### Example 2(a) (교재 예시)
- 2×2 격자
- 1×1: 4개, 2×2: 1개
- Answer: **5**

### Example 2(b) (교재 예시)
- 3×2 격자 (3열, 2행)
- 1×1: 6개, 2×2: 2개
- Answer: **8**

### Q1 (Practice - 복합 중첩 사각형 도형)
- 큰 직사각형 안에 중첩된 사각형들
- [도형 정확한 구조 재확인 필요 — 원본 이미지 참조]

### Q6 (Practice - 십자/Plus 형태)
- 가운데 3×3 격자에서 네 모서리 제거한 십자 형태 (5개 단위 셀)
- 1×1 정사각형: 5개
- 더 큰 정사각형: 십자 모양 특성상 없음
- Answer: **5** (확인 필요)

### Q7 (Practice - 2×2 격자 + 대각선)
- 2×2 격자의 각 셀에 X 대각선 추가
- 기본 정사각형: 4 (1×1) + 1 (2×2) = 5
- 대각선으로 생기는 기울어진 정사각형: 별도 계산 필요
- Answer: **계산 필요** (이미지 재확인)

---

## Type 3: Count Rectangles

### 핵심 공식
- m열 × n행 격자: C(m+1,2) × C(n+1,2)
- 1행 m열 (막대형): C(m+1,2) = m(m+1)/2

### Example 4 (교재 예시)
- 3×3 격자
- C(4,2) × C(4,2) = 6 × 6 = **36**

### Q8 (Practice - 계단형 2행 도형)
- 위쪽 행: 3열 좁은 셀, 아래쪽 행: 5열 넓은 셀 (불규칙)
- [도형 정확한 구조 재확인 필요]

### Q10 (Practice - 1×7 막대형)
- 1행 7열
- C(8,2) × C(2,2) = 28 × 1 = **28**

---

## Type 4: Count Triangles

### 핵심 공식 A — 꼭짓점에서 밑변으로 내선(cevian) k개 → (k+1)개 구역
- 삼각형 개수 = (k+1)(k+2)/2
- k=1 (선분 1개, 구역 2개): 3개
- k=2 (선분 2개, 구역 3개): **6개**
- k=3 (선분 3개, 구역 4개): **10개**
- k=4 (선분 4개, 구역 5개): **15개**

### 핵심 공식 B — 정삼각형 n등분 (sierpinski-style)
- n=1 (4개 소삼각형): **5개** (4소+1대 — 확인필요, 일부 자료 8개)
- n=2 (9개 소삼각형): **13개** (확인 필요)
- n=3 (16개 소삼각형): 별도 계산

### Example 3(a) (교재 예시 — 꼭짓점에서 선분 2개)
- 구역 3개 → (3)(4)/2 = **6**

### Example 3(b) (교재 예시 — 중점 연결 삼각형, n=2 Sierpinski)
- Answer: **8** (4소+3중+1대) 확인 필요

### Q3(a) (Practice — 중점 연결 삼각형)
- Answer: **8** (4소+3중+1대) 확인 필요

### Q3(b) (Practice — 3단계 세분 삼각형, 9개 소삼각형)
- Answer: 계산 필요

### Q4 (Practice — 꼭짓점에서 선분 3개)
- 구역 4개 → 4×5/2 = **10**

### Q9(a) (Practice — 수직선 + 수평선이 있는 삼각형)
- [도형 정확한 구조 재확인 필요]

### Q9(b) (Practice — 내부 교차선이 있는 삼각형)
- [도형 정확한 구조 재확인 필요]

---

## SVG 렌더링 방법 (퀴즈 HTML 삽입용)

```javascript
// q 객체의 q 필드에 직접 SVG 삽입
{
  tag: 'Squares',
  q: 'How many squares are there altogether?<br>' +
     '<svg width="140" height="140" viewBox="0 0 140 140" style="display:block;margin:10px auto;">' +
     '<rect x="10" y="10" width="120" height="120" fill="none" stroke="#333" stroke-width="2"/>' +
     '<line x1="70" y1="10" x2="70" y2="130" stroke="#333" stroke-width="1.5"/>' +
     '<line x1="10" y1="70" x2="130" y2="70" stroke="#333" stroke-width="1.5"/>' +
     '</svg>',
  opts: ['4','5','6','9'],
  ci: 1,   // 5
  exp: '1×1: 4개, 2×2: 1개. Total = 5.'
}
```

- SVG는 `innerHTML`로 삽입되므로 CDN 불필요
- stroke 색상 하드코딩 (`#333`, `#555` 등), CSS 변수 사용 금지
- `display:block; margin:auto`로 중앙 정렬
- viewBox로 반응형 크기 조절

---

## 향후 추가 예정
- 정확한 답 검증이 필요한 문제들 (Q1, Q7, Q8, Q9a, Q9b, Q3b, Ex3b)
- 더 많은 도형 유형 (오각형, 사다리꼴 내 삼각형 등)
