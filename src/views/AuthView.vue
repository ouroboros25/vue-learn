<template>
  <section class="h-screen">
    <div class="px-6 h-full text-gray-800">
      <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
          />
        </div>
        <component @change-tab="changeTab" :is="dynamicComponent"></component>
      </div>
    </div>
  </section>
</template>

<script>
import LoginComponent from "@/components/auth/LoginComponent";
import RegisterComponent from "@/components/auth/RegisterComponent";

export default {
  name: "AuthView",
  components: {RegisterComponent, LoginComponent},
  data() {
    return {
      dynamicComponent: 'login-component'
    }
  },
  methods: {
    changeTab(enlargeAmount) {
      this.dynamicComponent = enlargeAmount + '-component'
    }
  }
}
</script>

<style scoped>

</style>