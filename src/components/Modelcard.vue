<template>
    <v-card id="c" outlined color="green garken-2">
        <v-card-title style="color: white" class="justify-center">
            {{Pokemon.name}}
        </v-card-title>
        <br/> <v-img
        contain
        :src="Pokemon.ThumbnailImage"
        height="250px">
        </v-img>
        <br/>
        <br/>
    </v-card>
</template>

<script>
export default {
    props: ["Pokemon"]
}
</script>

<style>
.texto{
 color: white;
 text-align: justify;
 max-width: 90%;
 justify-self: center;
 margin-left: 5%;
 margin-right: 5%;
}

#c{
    text-align: center;
    height: 600px;
}
</style>