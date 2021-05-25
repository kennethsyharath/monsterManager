<template>
  <v-container>
    <v-navigation-drawer left clipped permanent app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Load Directory</v-list-item-title>
          <v-list-item-subtitle>{{targetDirectory}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list flat dense nav>
        <v-list-item> Create Sheet </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="i in 25" :key="i"> Sheet {{ i }} </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn v-on:click="onNewDirectory()" block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer right permanent app clipped>
      test nav drawer
    </v-navigation-drawer>

    <v-form v-model="valid">
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6">
          <v-text-field
            v-model="characterName"
            :rules="charNameRules"
            placeholder="Character Name"
          >
          </v-text-field>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="5">
          <stat-card statName="Strength"> </stat-card>
          <stat-card statName="Dexterity"> </stat-card>
          <stat-card statName="Constitution"> </stat-card>
        </v-col>
        <v-col cols="5">
          <stat-card statName="Intelligence"> </stat-card>
          <stat-card statName="Wisdom"> </stat-card>
          <stat-card statName="Charisma"> </stat-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatCard from "@/components/StatCard.vue";

@Component({
  components: { StatCard },
})
export default class Editor extends Vue {
  message = "hello";
  valid = false;
  targetDirectory = "";
  characterName = "";
  charNameRules = [
    (v: any): boolean | string => {
      return !!v || "Name is required";
    },
  ];
  fileList: Array<string> = [];

  mounted() {
    this.message = "mounted event";

    window.IPCRendererHandle.on("asynchronous-reply", (event, arg) => {
      this.targetDirectory = arg;
      console.log(arg); // prints "pong"
    });
  }

  onNewDirectory() {
    window.IPCRendererHandle.send("asynchronous-message", "ping");
  }

  onStatChange(statID: string, data: any) {
    console.log(`statchange to ${statID} of value ${data}`);
  }
}
</script>