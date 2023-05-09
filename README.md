# 디렉터리 구조

```
yommy/
│
├── components/             # 컴포넌트 저장 디렉터리
│   ├── common/             # 공통 컴포넌트 저장 디렉터리 (헤더, 푸터 등)
│   └── ...                 # 기타 컴포넌트 디렉터리
│
├── pages/                  # 페이지 컴포넌트 저장 디렉터리
│   ├── api/                # API 라우터 저장 디렉터리
│   ├── index.js            # 메인 페이지 컴포넌트
│   └── ...                 # 기타 페이지 컴포넌트
│
├── public/                 # 정적 파일 (이미지, 폰트 등) 저장 디렉터리
│
├── styles/                 # 전역 스타일 및 styled-components 테마 저장 디렉터리
│   ├── globalStyles.js     # 전역 스타일 정의
│   └── theme.js            # styled-components 테마 정의
│
├── store/                  # Redux 관련 디렉터리
│   ├── actions/            # 액션 생성자 저장 디렉터리
│   ├── reducers/           # 리듀서 저장 디렉터리
│   └── sagas/              # 사가 함수 저장 디렉터리
│
├── utils/                  # 공통 유틸리티 함수 저장 디렉터리
│
├── .babelrc                # Babel 설정 파일
│
├── .gitignore              # Git 무시 파일 설정
│
├── package.json            # 패키지 설정 및 의존성 관리 파일
│
├── README.md               # 프로젝트 설명 및 사용법 파일
│
└── ...                     # 기타 설정 파일

```

# import 규칙

```
1. React 관련 함수

2. next컴포넌트

3. antd 컴포넌트

4. 우리가 만든 컴포넌트

5. style 컴포넌트
```
