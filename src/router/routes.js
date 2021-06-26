import Index from '../pages/Index.vue'
import LessonDraftingTable from '../pages/LessonDraftingTable.vue'
import AdminMembers from '../pages/AdminMembers.vue'
import MemberProfile from '../pages/MemberProfile.vue'
import CourseComposer from '../pages/CourseComposer.vue'
import ArticlesPage from '../pages/ArticleMgmtPage.vue'
import ComingSoon from '../pages/ComingSoon.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Index },
      { path: 'draft', component: LessonDraftingTable },
      { path: 'admin', component: AdminMembers },
      { path: 'profile', component: MemberProfile },
      { path: 'composer', component: CourseComposer },
      { path: 'articles', component: ArticlesPage },
      { path: 'sims', component: ComingSoon },
      { path: 'explore', component: ComingSoon },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
