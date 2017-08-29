import Vue from 'vue'
import Router from 'vue-router'
import Cloudwares from '@/components/cloudwares/Index.vue'
import Instances from '@/components/instances/Index.vue'
import InstancesView from '@/components/instances/instance/View.vue'
import Instance from '@/components/instances/instance/Index.vue'
import Welcome from '@/components/Welcome.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import UserInfoEdit from '@/components/UserInfoEdit.vue'
import Management from '@/components/management/Index.vue'
import ManagementCloudwares from '@/components/management/cloudwares/Index.vue'
import ManagementCloudwaresList from '@/components/management/cloudwares/List.vue'
import ManagementCloudwaresCreate from '@/components/management/cloudwares/Create.vue'
import ManagementCloudwaresEdit from '@/components/management/cloudwares/Edit.vue'
import ManagementUsers from '@/components/management/users/Index.vue'
import ManagementUsersList from '@/components/management/users/List.vue'
import ManagementUsersCreate from '@/components/management/users/Create.vue'
import ManagementUsersEdit from '@/components/management/users/Edit.vue'
import ManagementInstances from '@/components/management/Instances.vue'
import TeacherManagement from '@/components/TeacherManagement/Index.vue'
import StudentManagement from '@/components/StudentManagement/Index.vue'
import BigdataCourse from '@/components/bigdataCourse/Index.vue'

import BigdataExperiment from '@/components/bigdataExperiment/Index.vue'
import Elanguage from '@/components/bigdataExperiment/language.vue'
import Ebdm from '@/components/bigdataExperiment/bdm.vue'
import EbigdataE from '@/components/bigdataExperiment/bigdataE.vue'
import Edm from '@/components/bigdataExperiment/dm.vue'
import BigdataProject from '@/components/bigdataProject/Index.vue'

import Analysismining from '@/components/analysismining/Index.vue'
import EdataPretreatment from '@/components/analysismining/dataPretreatment.vue'
import Edatamining from '@/components/analysismining/datamining.vue'
import Epythonda from '@/components/analysismining/pythonda.vue'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/cloudwares',
    component: Cloudwares,
    meta: { requiresAuth: true }
  }, {
    path: '/instances',
    component: Instances,
    meta: { requiresAuth: true }
  }, {
    path: '/instances/:id',
    component: Instance,
    meta: { requiresAuth: true },
    children: [{
      path: 'view',
      name: 'instancesView',
      component: InstancesView
    }]
  }, {
    path:'/',

    component: Welcome
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/userinfo',
    component: UserInfoEdit,
    meta: { requiresAuth: true }
  }, {
    path: '/management',
    component: Management,
    meta: { requiresAuth: true },
    children: [{
      path: 'cloudwares',
      component: ManagementCloudwares,
      children: [{
        path: '',
        component: ManagementCloudwaresList
      }, {
        path: 'create',
        component: ManagementCloudwaresCreate
      }, {
        path: ':id/edit',
        component: ManagementCloudwaresEdit
      }]
    }, {
      path: 'users',
      component: ManagementUsers,
      children: [{
        path: '',
        component: ManagementUsersList
      }, {
        path: 'create',
        component: ManagementUsersCreate
      }, {
        path: ':id/edit',
        component:ManagementUsersEdit
      }]
    }, {
      path: 'instances',
      component: ManagementInstances
    }]
  },{
    path: '/teacher',
    component: TeacherManagement,
  },{
    path: '/student',
    component: StudentManagement
  },{
    path: '/bigdatacourse',
    component: BigdataCourse
  },{
    path: '/bigdataexperiment',
    component: BigdataExperiment,
    children: [{
      path: '',
      component: Elanguage
    },{
      path: 'bdm',
      component: Ebdm
    },{
      path: 'dm',
      component: Edm
    },{
      path: 'language',
      component: Elanguage
    },{
      path: 'bigdatae',
      component: EbigdataE
    }]
  },{
    path: '/analysismining',
    component: Analysismining,
    children: [{
      path: '',
      component: EdataPretreatment
    },{
      path: 'datamining',
      component: Edatamining
    },{
      path: 'pythonda',
      component: Epythonda
    },{
      path: 'dataPretreatment',
      component: EdataPretreatment
    }]
  },{
    path: '/bigdataproject',
    component: BigdataProject
  },]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }

  } else {
    next() // make sure to always call next()!
  }
})

export default router
