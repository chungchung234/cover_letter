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
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
    toggleContact() {
      this.showContact = !this.showContact;
    }
  }
}).mount('#app');
