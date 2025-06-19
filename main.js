const { createApp, ref, onMounted, onBeforeUnmount } = Vue;

const app = createApp({
  setup() {
    const name = '이충현';
    const role = 'Web(Fe/Be) Developer';
    const location = '서울 송파구 석촌동';
    const email = 'a8207637@naver.com';
    const phone = '010-2492-2980';
    const github = 'https://github.com/chungchung234';
    const summary = '3년 차 백엔드 개발자로, 대규모 커머스 플랫폼의 MSA 운영 경험과 실시간 재고 시스템 개발, 대규모 트래픽 처리 경험을 보유하고 있습니다. Java, Spring Boot, AWS 환경에서 고가용성 시스템 설계 및 운영 역량을 갖추고 있으며, 글로벌 파트너사(Ocado)와의 협업을 통해 문제를 선제적으로 진단하고 해결한 경험이 있습니다.';
    const techStack = [
      {
        category: 'Backend',
        skills: [
          { name: 'Java 17', icon: 'fa-brands fa-java' },
          { name: 'Spring Boot 3', icon: 'fa-solid fa-leaf' },
          { name: 'Spring Batch', icon: 'fa-solid fa-clock-rotate-left' },
          { name: 'JPA', icon: 'fa-solid fa-database' },
          { name: 'MyBatis', icon: 'fa-solid fa-database' }
        ]
      },
      {
        category: 'Cloud/Infra',
        skills: [
          { name: 'AWS', icon: 'fa-brands fa-aws' },
          { name: 'Docker', icon: 'fa-brands fa-docker' },
          { name: 'Kubernetes', icon: 'fa-solid fa-cubes' },
          { name: 'ArgoCD', icon: 'fa-solid fa-code-branch' },
          { name: 'Jenkins', icon: 'fa-solid fa-gear' }
        ]
      },
      {
        category: 'Database',
        skills: [
          { name: 'MySQL', icon: 'fa-solid fa-database' },
          { name: 'Oracle', icon: 'fa-solid fa-database' },
          { name: 'MongoDB', icon: 'fa-solid fa-database' }
        ]
      },
      {
        category: 'Architecture',
        skills: [
          { name: 'MSA', icon: 'fa-solid fa-diagram-project' },
          { name: 'DDD 설계', icon: 'fa-solid fa-layer-group' },
          { name: 'RESTful API', icon: 'fa-solid fa-link' },
          { name: 'OAuth2', icon: 'fa-solid fa-key' }
        ]
      },
      {
        category: 'Messaging/Cache',
        skills: [
          { name: 'Redis', icon: 'fa-solid fa-bolt' },
          { name: 'Kafka', icon: 'fa-solid fa-stream' }
        ]
      },
      {
        category: 'Tools',
        skills: [
          { name: 'Git', icon: 'fa-brands fa-git-alt' },
          { name: 'GitLab CI', icon: 'fa-brands fa-gitlab' },
          { name: 'Jira', icon: 'fa-brands fa-jira' },
          { name: 'Confluence', icon: 'fa-brands fa-confluence' },
          { name: 'Datadog', icon: 'fa-solid fa-dog' },
          { name: 'ELK Stack', icon: 'fa-solid fa-chart-area' }
        ]
      },
      {
        category: 'Frontend/ETC',
        skills: [
          { name: 'Nexacro', icon: 'fa-solid fa-desktop' },
          { name: 'WebSquare', icon: 'fa-solid fa-desktop' },
          { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
          { name: 'JavaScript', icon: 'fa-brands fa-js' }
        ]
      }
    ];
    const experiences = [
        {
          company: '롯데e커머스',
          role: 'Web(Fe/Be) Developer',
          dates: '2022.12 – 2025.01 | 정규직',
          details: [
            '롯데마트 제타 프로젝트: 상품 및 재고 시스템 핵심 설계·개발, 메시징 시스템 도입 분석 및 적용',
            '1일 단위 재고 배치 → 1분 단위 실시간 배치로 리팩토링',
            '약 8.8만 건 상품 API 연동 자동화 및 테스트 서버 구축',
            'Google OCR 도입 제안으로 비용 절감',
            'Ocado와 협업하며 API 사전 이슈 도출 및 해결 주도',
            'DDD 설계 방식 도입, 플랫폼 철수 프로젝트에서 Zero Downtime 종료',
            '주문 클레임 영역 내재화 및 장애 발생률 40% 감소'
          ]
        },
        {
          company: '블루스카이',
          role: '웹/백엔드 개발자',
          dates: '2021.09 – 2022.03 | 계약직',
          details: [
            'GIST 학부/외국인 입시 시스템 고도화 단독 풀스택 개발',
            '로딩 속도 3분 → 1분 미만으로 개선',
            '프로젝트 성공 후 추가 수주 유도',
            'GBSA 홈페이지 유지보수 및 야간 배포 진행'
          ]
        },
        {
          company: '크리에이티브힐',
          role: '인턴',
          dates: '2021.01 – 2021.03',
          details: [
            '웹 취약점 검사(Arachni, OWASP ZAP) 및 보고서 작성',
            '챗앱 MVP 개발 및 타사 솔루션 분석',
            '블록체인 기반 기부 플랫폼 기획 및 기술 리서치'
          ]
        }
      ];
    const education = '경기대학교 컴퓨터과학과 졸업 (2016.03 – 2022.06)';
    const certificates = [
      'SQLD 개발자 자격증 (2022.04)',
      '비트컴퓨터 Java 전문가 과정 수료 (2022.06 – 2022.12, 960시간)',
      'NIA 공공 빅데이터 분석 청년인재 과정 수료 (2021.07 – 2021.08)'
    ];
    const projects = [
        {
          title: '부동산 중개 앱 \u2018꿀방\u2019',
          link: '#',
          description: '기획부터 개발까지 진행한 부동산 중개 애플리케이션',
          screenshot: null
        },
        {
          title: 'NIA 빅데이터 해커톤',
          link: '#',
          description: '데이터 분석 아이디어 공모전에 참가하여 팀 프로젝트 진행',
          screenshot: null
        },
        {
          title: '학부 동아리 활동',
          link: '#',
          description: '동아리 회장으로 기획과 발표를 다수 경험',
          screenshot: null
        }
      ];
    const philosophy = '반복되는 비효율을 줄이는 설계가 최고의 협업이다.';
    const intro = [
        '안녕하세요, 웹 개발자 이충현입니다. 지난 3년간의 실무 경험을 바탕으로 안정적이고 효율적인 시스템 구축과 운영에 대한 깊은 이해와 역량을 쌓아왔습니다.',
        'Java/Spring 프레임워크 기반 웹 서비스 개발을 중심으로 다양한 프로젝트에 참여하며 성장해왔습니다. 특히 롯데e커머스에서 대규모 트래픽을 처리하는 상품 재고 시스템 개발을 담당하면서, 실시간 데이터 처리의 중요성과 시스템 안정성 확보 노하우를 직접 체험했습니다.',
        '예상치 못한 외부 API의 기술적 제약에 직면했을 때, 관련 기술을 깊이 있게 학습하고 분석하여 혁신적인 해결책을 도출하는 과정에서 제 문제 해결 능력을 크게 발전시켰습니다.',
        'AWS 클라우드 환경에서 Kubernetes를 활용한 MSA 기반 시스템을 1년 이상 운영하며, 서비스 배포, 관리, 모니터링에 대한 풍부한 경험을 쌓았습니다. GIST 입시 시스템 고도화 프로젝트에서는 풀스택 개발자로서 시스템 성능 최적화를 통해 사용자 경험을 눈에 띄게 개선했습니다. 이러한 경험들은 다양한 기술 환경에서 유연하게 대응하고 시스템의 품질을 높이는 제 핵심 강점이 되었습니다.',
        '주어진 문제의 본질을 정확히 파악하고 해결하기 위해 끊임없이 학습하고 도전하는 것을 즐깁니다. 새로운 기술 트렌드를 적극적으로 탐색하고 업무에 적용하며, 세심한 실행력을 바탕으로 신뢰할 수 있는 고품질 코드 작성에 최선을 다합니다.',
        '앞으로도 지속적인 학습과 성장을 통해 제가 가진 기술 역량과 문제 해결 능력으로 사용자에게 진정한 가치를 제공하는 서비스 개발에 기여하고 싶습니다. 협력적이고 긍정적인 팀 환경에서 동료들과 함께 성장하는 개발자로 나아가겠습니다.'
    ];
    const isDark = ref(false);
    const showContact = ref(false);
    const navOpen = ref(false);
    const scrollTopVisible = ref(false);

    const toggleDarkMode = () => {
      isDark.value = !isDark.value;
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    };
    const toggleContact = () => {
      showContact.value = !showContact.value;
    };
    const toggleNav = () => {
      navOpen.value = !navOpen.value;
    };
    const closeNav = () => {
      navOpen.value = false;
    };
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
      closeNav();
      scrollTopVisible.value = window.pageYOffset > 300;
    };

    let schemeHandler = null;
   onMounted(() => {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        isDark.value = stored === 'dark';
      } else {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        isDark.value = mql.matches;
        const handler = (e) => {
          isDark.value = e.matches;
        };
        if (mql.addEventListener) {
          mql.addEventListener('change', handler);
        } else if (mql.addListener) {
          mql.addListener(handler);
        }
        schemeHandler = { mql, handler };
      }
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      if (schemeHandler) {
        const { mql, handler } = schemeHandler;
        if (mql.removeEventListener) {
          mql.removeEventListener('change', handler);
        } else if (mql.removeListener) {
          mql.removeListener(handler);
        }
      }

      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      name,
      role,
      location,
      email,
      phone,
      github,
      summary,
      techStack,
      experiences,
      education,
      certificates,
      projects,
      philosophy,
      intro,
      isDark,
      showContact,
      navOpen,
      scrollTopVisible,
      toggleDarkMode,
      toggleContact,
      toggleNav,
      closeNav,
      scrollToTop
    };
  }
});

app.component('experience-item', {
  props: ['exp'],
  template: `
    <div class="experience p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <h3 class="font-semibold">{{ exp.company }} | {{ exp.role }}</h3>
      <p class="dates text-sm text-gray-600 dark:text-gray-400">{{ exp.dates }}</p>
      <ul class="list-disc list-inside ml-4 space-y-1">
        <li v-for="detail in exp.details">{{ detail }}</li>
      </ul>
    </div>
  `
});

app.component('project-card', {
  props: ['project'],
  template: `
    <div class="project-card border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 transition duration-300 hover:shadow-lg">
      <img v-if="project.screenshot" :src="project.screenshot" :alt="project.title + ' screenshot'" class="mb-2 rounded">
      <h3 class="font-semibold"><a :href="project.link" target="_blank" rel="noopener noreferrer" class="hover:underline text-brand">{{ project.title }}</a></h3>
      <p class="text-sm">{{ project.description }}</p>
    </div>
  `
});

const vm = app.mount('#app-root');

const nav = document.querySelector('.page-nav');
const navLinks = document.querySelectorAll('.page-nav a');
const sections = document.querySelectorAll('main section[id]');

// highlight the first navigation link on initial load
if (navLinks.length) {
  navLinks[0].classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    vm.closeNav();
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => observer.observe(section));

