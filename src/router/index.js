import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Create from '../views/Create.vue';
import Workout from '../views/Workout.vue';

const routes = [
  {
    // TODO: change path to /vue3-workouts when deploying
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/workout/:workoutId',
    name: 'Workout',
    component: Workout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
