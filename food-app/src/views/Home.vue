<template>
  <div class="home-container">

    <section class="four-up-feature">
      <div class="row four-up-feature-header align-center">
        <div class="medium-8 columns">
          <h2>
            Ready to get started? It's free!
          </h2>
          <router-link to="/user"><button class="hollow button" href="#">Get Started Now</button></router-link>
          <!-- <h5> Picanha flank cupim short loin, swine biltong kevin meatloaf filet mignon bresaola shankle venison. Leberkas jerky kevin doner pork loin ground round.</h5> -->
        </div>
      </div>
      <div class="row align-spaced">
        <div class="small-10 medium-3 columns">
          <i class="fab fa-wpforms" aria-hidden="true"></i>
          <h4>Input Garden Details</h4>
          <p class="four-up-feature-text">Community garden caretakers & volunteers can input their info.</p>
        </div>
        <div class="small-10 medium-3 columns">
          <i class="fab fa-wpforms" aria-hidden="true"></i>
          <h4>View Garden Info</h4>
          <p class="four-up-feature-text">See information about what plants are growing and when they will be ready.</p>
        </div>
        <div class="small-10 medium-3 columns">
          <i class="fab fa-wpforms" aria-hidden="true"></i>
          <h4>Locate Gardens</h4>
          <p class="four-up-feature-text">View locations of gardens near you where you can get produce.</p>
        </div>
        <div class="small-10 medium-3 columns">
          <i class="fab fa-wpforms" aria-hidden="true"></i>
          <h4>Locate Produce</h4>
          <p class="four-up-feature-text">Locate produce nearby for you and your family.</p>
        </div>
      </div>
    </section>

    <div class="full-width-testimonial">
      <div class="full-width-testimonial-section">
        <div class="full-width-testimonial-icon text-center">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="41px" height="34px" viewBox="-235 240 41 34" style="enable-background:new -235 240 41 34;" xml:space="preserve">
              <path class="quote-path" d="M-231.3,260.4c0-5,1.3-8.8,3.7-11.7c2.4-2.8,6-4.6,10.5-5.5v5c-3.5,1-6,2.8-7.1,5.5c-0.7,1.4-0.9,2.8-0.8,4
                h8.1v12.8h-14.4V260.4z"/>
              <path class="quote-path" d="M-212,260.4c0-5,1.3-8.8,3.7-11.7c2.4-2.8,6-4.6,10.5-5.5v5c-3.5,1-6,2.8-7.1,5.5c-0.7,1.4-0.9,2.8-0.8,4h8.1
                v12.8H-212V260.4z"/>
          </svg>
        </div>
        <div class="full-width-testimonial-content">
          <h5 class="full-width-testimonial-text">
            Community gardens allow families and individuals without land of their own the opportunity to produce food.
          </h5>
          <p class="full-width-testimonial-source">Heather Newman</p>
          <span class="full-width-testimonial-source-context">Head of Indy Community Gardening Club</span>
        </div>
      </div>
    </div>

    <!-- <div class="mobile-app-toggle" data-mobile-app-toggle>
      <button class="button is-active">People</button>
      <button class="button">Tags</button>
    </div>

    <div class="mobile-app-toggle" data-mobile-app-toggle>
      <button class="button is-active">Posts</button>
      <button class="button">Followers</button>
      <button class="button">Following</button>
    </div> -->

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
