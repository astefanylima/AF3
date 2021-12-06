<template>
    <v-row>
      <v-col cols="12">
        <h1 style="color:#32CD32">Desktop</h1>
        <v-parallax src="https://image.winudf.com/v2/image1/ZXUuYmx1ZW5ldHdlYi5iZ2ltYWdlX3ZhbG9yYW50X3NjcmVlbl8wXzE1OTY0MDI0MTZfMDc1/screen-0.jpg?fakeurl=1&type=.jpg"></v-parallax>
        
        <v-row>
          <v-col v-for="Pokemon in this.$store.getters.getItems" :key="Pokemon.id" cols="4">
            <Modelcard :Pokemon="Pokemon"></Modelcard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import Modelcard from "../components/Modelcard.vue";

export default {
    name: 'Desktop',
  components: {
  Modelcard,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  mounted() {
    this.$store.dispatch("getItems");
  },
  };
</script>