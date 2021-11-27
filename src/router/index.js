import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '../supabase/init';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Create from '../views/Create.vue';
import Workout from '../views/Workout.vue';

const routes = [
  {
    path: '/vue3-workouts',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      auth: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
      auth: false,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register',
      auth: false,
    },
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: {
      title: 'Create',
      auth: true,
    },
  },
  {
    path: '/workout/:workoutId',
    name: 'Workout',
    component: Workout,
    meta: {
      title: 'Workout',
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Workouts`;
  next();
});

router.beforeEach((to, from, next) => {
  const user = supabase.auth.user();
  if (to.matched.some((response) => response.meta.auth)) {
    user ? next() : next({ name: 'Login' });
  }
  next();
});

export default router;
