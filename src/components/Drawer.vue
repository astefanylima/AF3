<template>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        left
      >
        <v-list>
          <v-list-item class="px-3">
            <v-list-item-avatar>
              <v-img src="https://media-exp1.licdn.com/dms/image/C5603AQEKgESYnp-czw/profile-displayphoto-shrink_800_800/0/1616703056428?e=1644451200&v=beta&t=vWBXaKWiQ9UO7_G-Yck42MOvjKPqrbQ-BbrCk1pepvY"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h12">
                Stéfany Lima
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
        <v-list-item-group v-model="selecteditem" color="#008B8B">
          <v-list-item v-for="item in draweritens" :key="item.title" link @click="$router.push(item.url)">

            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
        </v-list-item-group>
      </v-list>
        
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Home",
        url:"/",
        icon:"mdi-fleur-de-lis",
      },
      {
        title:"Mobile",
        url:"/Mobile",
        icon:"mdi-fleur-de-lis",
      },
      {
        title:"Desktop",
        url:"/Desktop",
        icon:"mdi-fleur-de-lis",
      },
      {
        title:"Tabuleiro",
        url:"/Tabuleiro",
        icon:"mdi-fleur-de-lis",
      },
    ],

  selecteditem: 0,
  }),
};
</script>