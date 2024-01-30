<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(image, index) in images" :key="index" class="swiper-slide">
        <div>
          <div>
            <img style="border-radius: 38px; height: 600px" :src="image" alt="Slide Image" class="swiper-image" />
          </div>
          <div class="search-icon">
            <img src="/public/zoom.svg" alt="Zoom Icon" />
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination">
      <div class="swiper-pagination-custom">
        <div class="sercle"></div>
        <div class="sercle"></div>
        <div class="sercle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeSwiper();
    });
  },
  methods: {
    initializeSwiper() {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index === 0 ? '1' : '•') + '</span>';
          },
        },
      });
    },
  },
};
</script>

<style scoped>
@import 'swiper/swiper-bundle.css';
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  position: relative;
  padding: 50px;
}

.swiper-image {
  width: 100%;
  height: 100%;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.search-icon img {
  max-width: 100%;
  max-height: 100%;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
}

.swiper-pagination-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  text-align: center;
}

.sercle {
  border: 1px solid black;
  height: 10px;
  width: 10px;
  border-radius: 100%;
}
</style>
