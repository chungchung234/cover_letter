# Agent: VueProfilePageBuilder

## 목적
Vue와 Tailwind CSS를 사용하여 사용자의 자연어 명령이나 JSON 입력을 기반으로 프로필 페이지 컴포넌트를 자동으로 생성합니다.

## 기술 스택
- Frontend Framework: Vue 3 (Composition API)
- Styling: Tailwind CSS
- 출력 형식: Vue SFC (Single File Component) 또는 `<template>` 코드 조각

## 입력 예시

### 자연어 명령
```
Vue로 프로필 페이지 만들어줘. 내 이름은 이충현이고, 백엔드 개발자야. Java, Spring Boot, AWS를 주로 써. GitHub는 https://github.com/chungchung234 여기에 있어.
```

### JSON 입력
```json
{
  "name": "이충현",
  "title": "백엔드 개발자",
  "skills": ["Java", "Spring Boot", "AWS", "Kafka"],
  "github": "https://github.com/chungchung234",
  "layout": "card",
  "theme": "dark"
}
```

---

## 출력 예시 (Vue + Tailwind)

### Vue SFC
```vue
<template>
  <div class="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
    <h1 class="text-3xl font-bold mb-2">이충현</h1>
    <p class="text-lg mb-4">백엔드 개발자</p>
    <ul class="mb-4 list-disc list-inside">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
    <a :href="github" class="text-blue-400 hover:underline">GitHub</a>
  </div>
</template>

<script setup>
const skills = ["Java", "Spring Boot", "AWS", "Kafka"];
const github = "https://github.com/chungchung234";
</script>
```

---

## 스타일 옵션
사용자는 다음과 같은 레이아웃/스타일 옵션을 요구할 수 있습니다:
- `layout`: `card`, `list`, `two-column` 등
- `theme`: `light`, `dark`, `glass`, `gradient` 등

예:
```
두 줄 레이아웃에 글래스모피즘 스타일로 Vue 코드 만들어줘
```

---

## 커밋 메시지 및 PR 작명 규칙

### 커밋 메시지 규칙 (Conventional Commits 기반)
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정 (예: README, agent.md 등)
- `style`: 코드 포맷팅, 세미콜론 누락 등 비기능적 변경
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가 또는 수정
- `chore`: 빌드 업무, 패키지 매니저 설정 등 기타 변경
예시:
'''
feat: 프로필 카드 레이아웃 추가 (Vue + Tailwind)
fix: GitHub 링크에서 target 속성 누락 수정
docs: agent.md에 커밋 작명 규칙 추가
'''

---

### Pull Request 제목 규칙
- `[feat]`, `[fix]`, `[docs]`, `[refactor]`, `[test]`, `[chore]` 접두사 사용
- 간결하고 명확한 작업 설명 포함

예시:
'''
[feat] 다크모드 카드 UI 추가
[docs] agent.md 작성 및 문서화
[fix] 프로필 이름 렌더링 오류 수정
'''
---

### Pull Request 생성 규칙
- PR생성 전엔 main 브렌치를 확인해 최신 상태를 점검 후 생성한다.
---

## 가능한 추가 기능
- SNS 링크 추가 (LinkedIn, Blog 등)
- 프로젝트 섹션 추가 (props 기반)
- 다국어 지원 (입력 언어에 따라 자동 번역)

---

## 제약 사항
- 이미지 업로드 기능은 별도 명시 없이는 placeholder만 삽입됨
- Tailwind CSS 클래스 충돌 여부는 자동 검증되지 않음
- Vue 컴포넌트 외 React/HTML 요청은 별도 agent에 위임

---

## 추천 사용 사례
- 개인 포트폴리오 사이트 자동화
- 개발자 소개 섹션 빠른 생성
- 팀/회사 소개 페이지의 구성 자동화
