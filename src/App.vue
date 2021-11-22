<template>
  <div v-if="isApplicationReady" class="min-h-full font-Poppins box-border">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import store from './store/index';
import { ref } from 'vue';
import { supabase } from './supabase/init';

export default {
  components: {
    Navigation,
  },

  setup() {
    const isApplicationReady = ref(null);

    const user = supabase.auth.user();

    if (!user) {
      isApplicationReady.value = true;
    }

    supabase.auth.onAuthStateChange((_, session) => {
      console.log('hello');
      store.methods.setUser(session);
      isApplicationReady.value = true;
    });

    return { isApplicationReady };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
</style>
