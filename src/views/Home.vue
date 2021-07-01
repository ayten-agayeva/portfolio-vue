<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
            <div class="flex animate__animated animate__fadeInLeft">
              <CustomText tag="h1">Front-end Developer</CustomText>
              <CustomText  size="normal">Producing high quality responsive websites and exceptional user experience</CustomText>
          </div>
        </div>
        <div class="col-xl-6">
          <Item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '../components/Item'
import CustomText from '../components/CustomText'

export default {
  name: "Home",
  components: { Item, CustomText }
};
</script>

<style lang="scss">
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 600px;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 12px;
  }
</style>