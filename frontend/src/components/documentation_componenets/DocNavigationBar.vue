<script setup>
import { ref } from 'vue';
import colors from '../../assets/styles/main';
import { useRouter } from 'vue-router';

const activeButton = ref(null);

const scrollTo = (section) => {
  const element = document.getElementById(section);
  if (element) {
    // Use scrollIntoView to bring the section into view
    // element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Add a small timeout to ensure smooth scrolling completes before adjusting offset
    setTimeout(() => {
      // Adjust the scrolling offset
      const offset = -90; // Adjust this value as needed (e.g., for fixed navbar height)
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 200);

    // Set the active button
    activeButton.value = section;
  }
};

const button_sx = `bg-transparent text-primary-300 hover:text-borders-grey underline border-none hover:no-underline underline-offset-8 decoration-text-purple focus:outline-none focus:ring-0`;




const router = useRouter();
const goBack = () => {
  router.go(-1); 
};

</script>

<template>

  <nav class="fixed w-full top-0 left-0 z-50 font-pixelify border-b border-text-red border-opacity-30 bg-primary-100 bg-opacity-80">
    <div class="flex items-center justify-between px-6 py-4">
        
      <div class="flex items-center gap-8">
      <!-- logo -->
        <div class="text-xl">
            <!-- <a href="/" onclick="return false;" class=""> -->
              <button @click="goBack" :class="button_sx">go back</button><!-- logo on the top left side -->
            <!-- </a> -->
            </div>

        </div>
            
        </div>
  </nav>

</template>

<style scoped>

</style>
