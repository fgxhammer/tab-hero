<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered has-text-centered">
        <div class="column is-half">
          <div class="box">
            <p class="title is-4">Register</p>
            <div class="form">
              <div class="field">
                <label for="Email" class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input v-model="email" class="input is-primary" type="email" placeholder="Email" required/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <!-- <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span> -->
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                  <input v-model="password" class="input is-primary" type="password" placeholder="Password" required/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                  <!-- <span class="icon is-small is-right">
                    <i class="fas fa-times"></i>
                  </span> -->
                </div>
              </div>
              <div class="field">
                <a href="#" @click="register" class="button is-primary">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthService.register({ email: this.email, password: this.password })
      console.log(response)
      return response
    }
  }
}
</script>

<style>
</style>
