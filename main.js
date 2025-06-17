const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'My Cover Letter',
      intro: '안녕하세요! 개발자 홍길동입니다.',
      email: 'example@example.com',
      isDark: false,
      showContact: false
    };
  },
  mounted() {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDark = mql.matches;
    const handler = (e) => {
      this.isDark = e.matches;
    };
    if (mql.addEventListener) {
      mql.addEventListener('change', handler);
    } else if (mql.addListener) {
      mql.addListener(handler);
    }
    this._schemeHandler = { mql, handler };
  },
  beforeUnmount() {
    const data = this._schemeHandler;
    if (data) {
      const { mql, handler } = data;
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handler);
      } else if (mql.removeListener) {
        mql.removeListener(handler);
      }
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
    toggleContact() {
      this.showContact = !this.showContact;
    }
  }
}).mount('#app');
