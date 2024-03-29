import Home from './views/Home.vue';
import CompanyInfo from './views/CompanyInfo.vue';
import ConnectUs from './views/ConnectUs.vue';
import CampusesIntro from './views/CampusesIntro.vue';
import CourseIntro from './views/CourseIntro.vue';
import RbCourseIntro from './views/RbCourseIntro.vue';
import LanguageSchoolIntro from './views/LanguageSchoolIntro.vue';
import RelatedNews from './views/RelatedNews.vue';
import StudentInterview from './views/StudentInterview.vue';
import SuccessfulCase from './views/SuccessfulCase.vue';
export const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/company-info', component: CompanyInfo, name: 'CompanyInfo' },
  { path: '/connect-us', component: ConnectUs, name: 'ConnectUs' },
  { path: '/campuses-intro', component: CampusesIntro, name: 'CampusesIntro' },
  { path: '/course-intro', component: CourseIntro, name: 'CourseIntro' },
  {
    path: '/student-interview',
    component: StudentInterview,
    name: 'StudentInterview',
  },
  { path: '/rb-course-intro', component: RbCourseIntro, name: 'RbCourseIntro' },
  {
    path: '/language-school-intro',
    component: LanguageSchoolIntro,
    name: 'LanguageSchoolIntro',
  },
  { path: '/related-news', component: RelatedNews, name: 'RelatedNews' },

  {
    path: '/successful-case',
    component: SuccessfulCase,
    name: 'SuccessfulCase',
  },
];
