<template>
  <v-card outlined shaped elevation="1">
    <v-row align="center" justify="center">
      <!-- <v-spacer></v-spacer> -->
      <v-col cols="4.1">
        <v-select
          v-model="statValue"
          :items="statValues"
          attach
          chips
          :label="statName"
        ></v-select>
      </v-col>
      <v-col cols="4" align="center" justify="center">
        <v-card outlined tiled elevation="4">
          <v-card-text>
            {{ bonus(statValue) }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
          <v-checkbox v-model="statProficiency">
          </v-checkbox>
      </v-col>
      <!-- <v-spacer></v-spacer> -->
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StatCard extends Vue {
  @Prop({ type: String, required: true, default: "UninitializedStat" })
  statName!: string;

  @Prop({ type: Number, default: 30 })
  maxStatValue!: number;

  statValue = 0;
  statValues: Array<number> = [];
  statProficiency = false;

  created() {
    for (let i = 0; i <= this.maxStatValue; i++) {
      this.statValues.push(i);
    }
  }

  bonus(stat: number): string {
    const value = Math.floor(stat / 2) - 5;
    return value <= 0 ? `${value.toString()}` : `+${value.toString()}`;
  }
}
</script>