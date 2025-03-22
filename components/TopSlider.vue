<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div class="embla__slide" v-for="item in items" :key="item.id">
        <a v-if="item.link" :href="item.link" target="_blank">
          <img :src="item.img" alt="alt" />
        </a>
        <img v-else :src="item.img" alt="alt" />
      </div>
    </div>
  </div>
</template>

<script>
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";

export default {
  setup() {
    const [emblaNode] = emblaCarouselVue({ loop: true }, [
      Autoplay({ delay: 6000 }),
    ]);
    return { emblaNode };
  },
  data() {
    return {
      items: [
        {
          img: "/image/cover-RHNA5ysjAlEwIV0zMRzTQ0HuSj6HwEC4.png",
        },
        {
          img: "/image/PXL_20230827_024022141.jpg",
        },
        {
          img: "/image/防窮サミット_報告07.jpg",
        },
        {
          img: "/image/240917-3.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.embla {
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  background-color: #eee;

  &__container {
    display: flex;
    align-items: flex-start;
  }

  &__slide {
    flex: 0 0 auto;
    min-width: 0;
    max-width: 100%;
    text-align: center;
    justify-content: center;
    height: 24vw;
    max-height: 400px;

    // マウスオン時透過率を変更
    &:hover {
      opacity: 0.8;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
