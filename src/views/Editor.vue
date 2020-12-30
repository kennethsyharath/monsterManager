<template>
  <div class="editor">
    <v-container class="editor-container">
        <v-row no-gutters>
            <v-col
                v-for="n in 6"
                :key="n"
                cols="12"
                sm="6"
            >
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    One of three columns
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        
    }
})

export default class Editor extends Vue {}
</script>