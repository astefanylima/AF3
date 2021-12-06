<template>
    <v-row>
      <v-col cols="12">
        <h1 style="color:#32CD32">Tabuleiro</h1>
        <v-parallax src="https://www.iped.com.br/_upload/content/2015/02/19/beneficios-didaticos-jogo-xadrez.jpg"></v-parallax>
        <v-row>
          <v-col v-for="Pokemon in this.$store.getters.getListJuices" :key="Pokemon.id" cols="4">
            <Modelcard :Pokemon="Pokemon"></Modelcard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import Modelcard from "../components/Modelcard.vue";

export default {
    name: 'Tabuleiro',
    components: {
      Modelcard
    },
  };
</script>