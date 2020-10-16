<template>
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>
        用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
        <br/>
        <input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
        <br/>
        <button v-on:click="login">登录</button>
        <br/>
        登录验证情况: <textarea cols="30" rows="10" v-model="responseResult"></textarea>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from '@/components/BlogHeader.vue'
import blogFooter from '@/components/BlogFooter.vue'

// vue 名称 数据 方法定义
export default {
  name: 'BlogLogin',
  components:{'blogHeader', 'blogFooter'},
  // 这里的data使用的是方法的形式，所以是return 一个json串
  data() {
    return {
      loginInfoVo : {username: '', password: ''},
      responseResult: []
    }
  },
  methods: {
    // 方法使用 方法名(){} 这种形式定义
    login() {
      // 使用this.$axios.post(url, josn参数) 调用后台方法,then为成功返回的情况处理,catch为异常情况处理
      this.$axios.post('/login',{
        username: this.loginInfoVo.username,
        password: this.loginInfoVo.password
      })
      .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            // 使用路由进行页面切换
              this.$router.replace({path: '/index'})
          }
      })
      .catch(failResponse => {})
    }
  }
}

</script>

<style>
</style>
