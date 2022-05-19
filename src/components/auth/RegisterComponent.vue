<template>
  <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
    <form>
      <div class="flex flex-row items-center justify-center">
        <p class="text-2xl mb-0 mr-4">Registration</p>
      </div>

      <!-- Email input -->
      <div class="mb-6 mt-4">
        <input
            type="text"
            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
        />
      </div>

      <!-- Password input -->
      <div class="mb-6">
        <input
            type="password"
            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
        />
      </div>

      <!-- Confirm Password input -->
      <div class="mb-6">
        <input
            type="password"
            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput3"
            placeholder="Confirm Password"
        />
      </div>

      <div class="text-center lg:text-left">
        <button
            type="button"
            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Sign up
        </button>
        <p class="text-sm font-semibold mt-2 pt-1 mb-0">
          Have an account?
          <a @click="changeTab('login')" href="#!" class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Login</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  methods: {
    changeTab(tab){
      this.$emit('changeTab', tab)
    }
  }
}
</script>

<style scoped>

</style>