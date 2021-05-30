<template>
  <div class="login">
    <ul>
      <li class="success" v-if="success">ログイン成功</li>
      <li class="failure" v-if="failure">ユーザーが登録されてません</li>
    </ul>
    <h2>ログインページ</h2>
    <p>name</p>
    <input type="text" v-model="name" />
    <p>password</p>
    <input type="password" v-model="password" /><br />
    <button @click="search()" class="insertbtn">ログイン</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      users: [
        {
          name: "山田",
          password: "0000",
        },
        {
          name: "田中",
          password: "1111",
        },
      ],
      name: "",
      password: "",
      success: false,
      failure: false,
    };
  },
  methods: {
    search() {
      //これは新規登録処理
      //this.users.push({ name: this.name, password: this.password });

      //usersのデータ内をテキストに記載されたデータで検索しBOOL型を返す
      const result = this.users.some(
        (user) => user.name === this.name && user.password === this.password
      );
      if (result) {
        this.success = true;
        this.failure = false;
      } else {
        this.failure = true;
        this.success = false;
      }
    },
  },
};
</script>

<style scoped>
.insertbtn {
  margin: 10px;
}
.success {
  color: blue;
}

.failure {
  color: red;
}
</style>
