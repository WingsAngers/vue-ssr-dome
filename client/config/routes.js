import todo from '../views/todo/todo.vue'
import load from '../views/load/load.vue'
export default [
  {
    path: '/',
    component: todo
  },
  {
    path: '/app',
    component: todo,
    meta: {
      title: 'appHome'
    }
  },
  {
    path: '/load',
    component: load,
    meta: {
      title: 'appTest'
    }
  },
  {
    path: '/',
    redirect: '/app'
    }
]