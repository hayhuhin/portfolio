<script setup>
import { ref } from 'vue'

// Data for the "projects" section
const projects = ref([
  {
    image: 'valar_crm',
    title: 'valar CRM',
    text: 'A free Customer Relationship Management (CRM) portal tailored for small businesses. Designed for simplicity, security, and speed, it features an intuitive user interface and visually appealing graphical insights.',
    buttons : [
      {
        button_text:"read more",
        url:"/documentation/valar_crm"
      },
      {
        button_text:"see demo",
        url:"https://crm.valerilevinson.com",
      }
    ]
  },
  {
    image: 'weather_api',
    title: 'weather API comparison',
    text: 'A Weather API Comparison application that highlights discrepancies between two forecasting APIs, demonstrating how online data can sometimes be inaccurate. This tool emphasizes the importance of verifying data sources.',
    buttons : [
    {
      button_text:"read more",
      url:"/documentation/weather_api",
    },
    {
      button_text:"view on GIT",
      url:"https://github.com/valeri-l/weather_representation",
    }
    ]
},
  {
    image: 'top_down',
    title: 'top down fighter',
    text: 'A top-down fighter game featuring smooth FPS handling, intense battles against monsters and bosses, all brought to life with beautifully crafted free pixel art assets.',
    buttons: 
    [
      {
        button_text:"read more",
        url:"/documentation/top_down",
      },
      {
        button_text:"view on GIT",
        url:"https://github.com/valeri-l/fighter",
      }  
    ]
},
]);

</script>

<template>
    <!-- <h3 class="capitalize">skills</h3> -->
  
    <section class="projects py-10">
    <h2 class="text-3xl text-start mb-8 ml-10">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl border p-4 border-borders-green bg-sections-projects rounded-lg">
      <!-- Single Column -->
      <div v-for="(item, index) in projects" :key="index" >
        
        <!-- <div class=""> -->
        <!-- <a
          class="text-primary-300 font-pixelify underline capitalize text-xs hover:text-text-green"
          :href="item.documentation"
          >
          Read Documentation
        </a> -->
        <!-- </div> -->
        
        <div  :class="['flex h-full flex-col items-center justify-between  xl:border-r lg:border-r sm:border-r-none border-borders-green border-opacity-30',{ 'border-none': index === projects.length - 1 }]" >
                  <!-- documentation href-->
          
          <!-- Image -->
          <img 
            :src="`/projects/${item.image}.png`" 
            :alt="item.title" 
            class="h-60 object-contain mb-4"
            />
          <div>
            <!-- Title -->
            <h3 class="font-semibold text-primary-300 mb-2 text-center">{{ item.title }}</h3>
          
            <!-- Description -->
            <p class="text-primary-300 text-center mx-4 max-w-xl leading-relaxed">{{ item.text }}</p>
            <!-- item button -->
          </div>

          <div class="-center pt-5">
            <div class="flex ">
              <div v-for="(button,index) in item.buttons" :key="index">
                <a class="m-1" :href="button.url" >
                  <button class="bg-buttons-success font-pixelify  text-primary-300 capitalize py-1 focus:outline-none focus:ring-0">{{ button.button_text }}</button>
                </a>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>

</style>
