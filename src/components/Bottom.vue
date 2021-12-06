<template>
    
  <v-bottom-navigation
      app
      background-color=#4682B4
      color=#008B8B
      v-model="selectedBottombarItem"
  >
            <v-btn v-for="item in draweritens" :key="item.title" @click="$router.push(item.url)"
            style = "background-color:#ffffff" 
            class="black--text">
              {{item.title}}
            </v-btn>
  </v-bottom-navigation>

</template>


<script>
export default {
  name: 'Bottom',

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