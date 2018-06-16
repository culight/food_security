<template>
  <div class="plant-details-container grid-x grid-padding-x">
    <div class="large-8 cell" style="margin: auto">
      <h1>Veggies List by Garden</h1>
      <div class="plant-list">
        <div :key="item.value" v-for="item in produceList" class="card" style="width: 300px;">
          <div class="card-divider">
            <h4>{{ item.text }}</h4>
          </div>
          <img :src="item.url">
          <div class="card-section">
            <p><b>Info:</b> {{ item.description }}</p>
            <p><b>Lot Size:</b> {{ item.size || 12 }} Sq Feet</p>
            <p>Ready to pick in {{ item.ready || 3 }} weeks!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produceList: [
        {
          value: 'onions', text: 'onions', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large', size: 12, ready: 4,
        },
        {
          value: 'carrots', text: 'carrots', url: 'http://www.specialtyproduce.com/sppics/4075.png', description: 'Mixed Rainbow Carrots',
        },
        {
          value: 'tomatoes', text: 'tomatoes', url: 'http://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-Pic.png', description: 'Juicy Ripe Red Tomatoes', size: 3, ready: 2,
        },
        {
          value: 'bell peppers', text: 'bell peppers', url: 'http://www.pngpix.com/wp-content/uploads/2016/03/Bell-Pepper-PNG-Image-500x442.png', description: 'Mixed Bell Peppers - Mostly Green',
        },
        {
          value: 'cucumbers', text: 'cucumbers', url: 'https://www.my7thheaven.com/ae/wp-content/uploads/sites/7/2016/03/cucumber-banner-1.png', description: 'Small Cucumbers',
        },
        {
          value: 'beets', text: 'beets', url: 'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/beets_commodity-page.png', description: 'Dark Purple Beets',
        },
        {
          value: 'grapes', text: 'grapes', url: 'https://toppng.com/public/uploads/preview/grapes-11524347801yn1hrbqlgn.png', description: 'Deep Red Grapes',
        },
        {
          value: 'green onions', text: 'green onions', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large', size: 7, ready: 7,
        },
        {
          value: 'kale', text: 'kale', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'spinach', text: 'spinach', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'leeks', text: 'leeks', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'celery', text: 'celery', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'potatoes', text: 'potatoes', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'sweet potatoes', text: 'sweet potatoes', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'summer squash', text: 'summer squash', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'jalapeños', text: 'jalapeños', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'broccoli', text: 'broccoli', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
        {
          value: 'brussels sprouts', text: 'brussels sprouts', url: 'http://www.pngmart.com/files/1/Red-Onion-PNG-Clipart.png', description: 'White Onions - Large',
        },
      ],
    };
  },
};
// $(function(){
//   $('.card_more_button').on('click',
//     function() {
//       $(this).closest('.card').toggleClass('card_full');
//       $(this).siblings('.card_more_content').slideToggle('fast');
//       $(this).toggleClass('flipY');
//     }
//    )
// }(jQuery));
</script>
