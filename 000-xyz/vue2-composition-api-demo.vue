<!-- 
  Use the composition API when:
  1. The component is too large, and should be organized by logical concerns(feature). 
  2. Code needs to be extracted and reused across multiple components, as an alternative to Mixins/Scoped Slots.
  3. Type safety in TypeScript is important.
-->
<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li 
        v-for="(name, index) in attending"
        :key="index">
        {{ name }}
      </li> 
    </ul>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
// If using Vue 2 with Composition API plugin configured:
// import { ref, computed } from "@vue/composition-api"; 
// Vue 3
import { ref, computed } from "vue";
export default {
  setup() {
    // ref === Reactive Reference, Wraps primitives in an object to track changes
    const capacity = ref(4);
    const attending = ref(["Tim", "Bob", "Joe"]);
    // Computed Property
    const spacesLeft = computed(() => {
      // Access the value of a Reactive Reference by calling `.value`
      return capacity.value - attending.value.length;
    });
    // Methods declared as functions
    function increaseCapacity() {
      capacity.value++;
    }
    // Gives our template access to these objects & functions
    return {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity,
    };
  }
};
</script>