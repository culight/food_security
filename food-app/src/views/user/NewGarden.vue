<template>
  <div class="new-garden grid-x grid-padding-x">
    <h1>Create New Garden</h1>
    <fieldset class="large-10 cell">
      <label>
        Garden Name
        <input type="text" name="sqft">
      </label>
    </fieldset>
    <fieldset class="large-10 cell">
      <label>
        Location
        <input type="text" name="sqft">
      </label>
    </fieldset>
    <fieldset class="large-10 cell">
      <label>
        Total Square Feet
        <input type="number" name="sqft">
      </label>
    </fieldset>
    <fieldset class="large-10 cell">
      <label>
        Number of Plots
        <input type="number" name="numPlots">
      </label>
    </fieldset>

    <label>What types of plants will you be growing?</label>
    <fieldset class="large-12 cell growing-types">
      <div :key="i" v-for="(n, i) in typeNumber">
        <label>Plant Type {{ n }}</label>
        <basic-select :options="options"
                    :selected-option="item"
                    style="border-radius: 0"
                    placeholder="select plant"
                    @select="onSelect">
        </basic-select>
        <input type="text" placeholder="Sqaure Feet Allocated">
      </div>

      <div class="button add-button" @click="add">Add Another Plant</div>
    </fieldset>

    <div class="button submit-button">Submit</div>
  </div>
</template>

<script>
import { BasicSelect } from 'vue-search-select';

export default {
  data() {
    return {
      options: [
        { value: 'onions', text: 'onions' },
        { value: 'carrots', text: 'carrots' },
        { value: 'tomatoes', text: 'tomatoes' },
        { value: 'bell peppers', text: 'bell peppers' },
        { value: 'cucumbers', text: 'cucumbers' },
        { value: 'beets', text: 'beets' },
        { value: 'grapes', text: 'grapes' },
        { value: 'green onions', text: 'green onions' },
        { value: 'kale', text: 'kale' },
        { value: 'spinach', text: 'spinach' },
        { value: 'leeks', text: 'leeks' },
        { value: 'celery', text: 'celery' },
        { value: 'potatoes', text: 'potatoes' },
        { value: 'sweet potatoes', text: 'sweet potatoes' },
        { value: 'summer squash', text: 'summer squash' },
        { value: 'jalapeños', text: 'jalapeños' },
        { value: 'broccoli', text: 'broccoli' },
        { value: 'brussels sprouts', text: 'brussels sprouts' },
      ],
      searchText: '', // If value is falsy, reset searchText & searchItem
      item: {
        value: '',
        text: '',
      },
      typeNumber: 1
    };
  },
  methods: {
    onSelect(item) {
      this.item = item;
    },
    reset() {
      this.item = {};
    },
    selectOption() {
      // select option from parent component
      this.item = this.options[0];
    },
    remove(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
    add() {
      this.typeNumber++;
    },
  },
  components: {
    BasicSelect,
  },
};
</script>
