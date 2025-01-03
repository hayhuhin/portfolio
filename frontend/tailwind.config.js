/** @type {import('tailwindcss').Config} */


const colors = {
  primary:{
      100:"#282C30", //MAIN BG
      200:"#2F333A", //CONTENT BG CENTER
      300:"#F7F7F7", //TEXT
      400:"#2E2E2E", //input fields
  },
  borders:{
      green:"#86c232",
      purple:"#C778DD",
      grey:"#D9D9D9"
  },
  sections:{
      about_me:"#C778DD", //3% OPACITY NEEDED,
      skills:"",
      what_i_do:"#46005C", //3% OPACITY NEEDED,
      achievements:"#1A1A1A",
      projects:"#1A1A1A",
      contact_me:"#1A1A1A"
  },
  buttons:{
      success:"#407C0A"
  },
  text:{
      purple:"#ce7fe4",
      green: "#48894A",
      yellow:"#C0B321",
      red: "#BE1C1C",
      blue:"#0A84FF"
  },
  table:{
    dark:"#1A1A1A",
    medium:"#2A2A2A",
    light:""
  },
  messages:{
    error:"#A34343",
    success:"#43A348"
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        pixelify: ['Pixelify', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}

