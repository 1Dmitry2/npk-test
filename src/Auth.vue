<template>
  <div class="container">
    <h2 class="title">Регистрация</h2>
    <form @submit.prevent="register" class="form">
      <div class="form-group">
        <input type="text" v-model="name" placeholder="Имя" required class="input">
      </div>
      <div class="form-group">
        <input type="text" v-model="username" placeholder="Имя пользователя" required class="input">
      </div>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Электронная почта" required class="input">
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Пароль" required class="input">
      </div>
      <div class="buttons">
        <button type="submit" class="button is-primary">Зарегистрироваться</button>
        <button @click="cancel" class="button is-light">Отмена</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      this.$router.push('/');
    },
    cancel() {
      this.$router.push('/auth');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 10px 20px;
  border-radius: 5px;
}

.button.is-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

.button.is-light {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ccc;
}
</style>
