<template>
  <div class="home">
    <div id="nav">
        <router-link to="/profile">Post</router-link> |
        <router-link to="/profile/save">Save</router-link> |
        <router-link to="/profile/tag">Tag</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "Profile"
};
</script>

<style lang="scss" scoped>

</style>