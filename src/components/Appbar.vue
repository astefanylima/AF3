<template>
    <v-app-bar
      app
      fixed
      color=#008B8B
      scroll-target="#scrolling-techniques">
      
      <v-icon left>mdi-arrow-up-circle-outline</v-icon>
      <v-toolbar-title>Meus Jogos</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-for="item in draweritens" :key="item.title" >
            <v-btn @click="$router.push(item.url)"
            style = "background-color:#4682B4" 
            class="white--text">
              {{item.title}}
            </v-btn>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Appbar',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Home",
        url:"/",
      },
      {
        title:"Mobile",
        url:"/Mobile",
      },
      {
        title:"Desktop",
        url:"/Desktop",
      },
      {
        title:"Tabuleiro",
        url:"/Tabuleiro",
      },
    ],

  selecteditem: 0,
  }),
};
</script>