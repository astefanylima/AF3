<template>
    <v-row>
      <v-col cols="12">
        <h1 style="color:#32CD32">Home</h1>
        <v-parallax src="https://4.bp.blogspot.com/-jbFi1IVaSF8/XBaneO5a25I/AAAAAAAB37g/lUMrzqlLaX8fRujTHhz6XSZ51R6MWmuHwCLcBGAs/s1600/GRIS%2B-%2BScreen%2B15.png"></v-parallax>
        <v-row>
          <v-col v-for="Pokemon in this.$store.getters.getFullList" :key="Pokemon.id" cols="4">
            <Modelcard :Pokemon="Pokemon"></Modelcard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import Modelcard from "@/components/Modelcard.vue";
export default {
    name: 'Home',
    components: {
      Modelcard
    },
  data(){
    return{
      }
    },
  methods:{
    },
  };
</script>
