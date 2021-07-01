<template>
  <div class="about">
    <div class="container">
      <div class="row">
      <div class="col-xl-6">
        <div class="flex animate__animated animate__fadeInLeft">
          <CustomText tag="h1">Ayten Agayeva</CustomText>
          <div class="d-flex">
            <CustomText class="a">Education: </CustomText>
            <CustomText class="b">Azerbaijan University, Faculty: Computer Science</CustomText>
          </div>
          <div class="d-flex">
            <CustomText class="a">Experience: </CustomText>
            <CustomText class="b">More than 2 years</CustomText>
          </div>
            <CustomText tag="b">If you need developer with skills that I have, I am ready to work with you.</CustomText>
            <CustomText>Responsive HTML/CSS/SASS/LESS</CustomText>
            <CustomText>JavaScript</CustomText>
            <CustomText>Vue Js</CustomText>
            <CustomText>React Native</CustomText>
            <CustomText>Bootstrap, Material Design</CustomText>
            <CustomText>Adobe XD, Photoshop, Zeplin</CustomText>
            <CustomText>Gulp</CustomText>
            <CustomText>Source Control - Familiarity with source control like Git</CustomText>
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

import Item from '../../components/Item'
import CustomText from '../../components/CustomText'

export default {
  name: "About",
  components: { Item, CustomText }
};
</script>

<style lang="scss" scoped>
.flex {
  justify-content: flex-start;
}
  h1 {
    margin-top: 0;
  }
  .d-flex {
    width: 100%;
    justify-content: space-between;
    .a {
      color: #a5a7a9;
      margin-right: 5px;
      font-weight: 700;
    }
  }
  .flex {
    span, b {
      padding-top: 15px;
    }
    b {
      color: #a5a7a9;
      font-size: 19px;
      text-align: left;
      margin: 45px 0 10px;
    }
  }
</style>