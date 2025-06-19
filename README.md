# 커버레터 사이트

## 소개
개인용 커버레터를 빠르게 공개하기 위한 Vue 3 + Tailwind CSS 템플릿입니다. 정적 파일만으로 구성되어 별도의 빌드 과정 없이 GitHub Pages에 바로 올릴 수 있습니다.

## 기능 요약
- 운영체제 테마를 인식하는 라이트/다크 모드 및 수동 토글
- 연락처 카드 표시/숨김 버튼
- 작은 화면에서 자동으로 접히는 내비게이션 메뉴
- 스크롤 시 나타나는 **맨 위로 이동** 버튼
- Tailwind의 `prose` 클래스로 읽기 쉬운 본문 스타일링

## 스크린샷
프로필 예시는 저장소의 `profile.jpg` 파일을 사용합니다.

![screenshot](profile.jpg)

## 설치 방법
```bash
git clone https://github.com/<사용자명>/cover_letter.git
cd cover_letter
```
별도 의존성 없이 `index.html`을 바로 열거나 다음과 같이 간단한 HTTP 서버를 실행할 수 있습니다.
```bash
python -m http.server
```

## 사용 방법
- `main.js`에서 이름, 직무, 연락처 등 개인 정보를 수정합니다.
- 필요하면 `index.html`과 `style.css`를 편집하여 레이아웃이나 색상을 변경합니다.
- 변경 사항을 커밋해 GitHub에 푸시하면 GitHub Pages에서 사이트가 제공됩니다.

## 기술 스택
- ![Vue](https://img.shields.io/badge/Vue-3-brightgreen)
- ![Tailwind](https://img.shields.io/badge/TailwindCSS-CDN-blue)
- GitHub Pages

## 디렉터리 구조
- `index.html` – 기본 마크업과 Tailwind 설정이 포함된 메인 페이지
- `main.js` – Vue 애플리케이션 로직 및 개인 정보, 기술 스택 정의
- `style.css` – 다크 모드 팔레트와 추가 스타일
- `profile.jpg` – 기본 프로필 사진 파일
- `tests/` – 주요 파일의 존재 여부를 검증하는 Python 테스트 스크립트 모음

## 라이선스
이 프로젝트는 [Apache-2.0](LICENSE) 라이선스로 배포됩니다.
