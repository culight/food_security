<template>
  <div class="new-garden grid-x grid-padding-x">
    <h1>Create New Garden</h1>
    <fieldset class="large-3 cell">
      <label>
        Garden Name
        <input type="text" name="sqft">
      </label>
    </fieldset>
    <fieldset class="large-3 cell">
      <label>
        Location
        <input type="text" name="sqft">
      </label>
    </fieldset>
    <fieldset class="large-3 cell">
      <label>
        Total Square Feet
        <input type="number" name="sqft">
      </label>
    </fieldset>
    <fieldset class="large-3 cell">
      <label>
        Number of Plots
        <input type="number" name="numPlots">
      </label>
    </fieldset>

    <label>What will you be growing?</label>
    <fieldset class="large-3 cell growing-types">
      <basic-select :options="options"
                  :selected-option="item"
                  placeholder="select item"
                  @select="onSelect">
      </basic-select>
      <!-- <input id="checkbox1" type="text"><label for="checkbox1">Checkbox 1</label> -->
    </fieldset>
  </div>
</template>

<script>
import { BasicSelect } from 'vue-search-select'

export default {
  data () {
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
        { value: 'brussels sprouts', text: 'brussels sprouts' }
      ],
      searchText: '', // If value is falsy, reset searchText & searchItem
      item: {
        value: '',
        text: ''
      }
    }
  },
  methods: {
    onSelect (item) {
      this.item = item
    },
    reset () {
      this.item = {}
    },
    selectOption () {
      // select option from parent component
      this.item = this.options[0]
    },
    remove: function(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
    add: function() {
      this.items.unshift({ message: this.newItem });
      this.newItem = '';
    }
  },
  components: {
    BasicSelect
  }
}
</script>
