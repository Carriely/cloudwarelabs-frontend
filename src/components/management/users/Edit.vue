<template>
  <div class="row" style="margin-left: 50px">
    <form class="form-horizontal">
      <fieldset >
        <legend>修改用户权限</legend>
        <div class="form-group">
          <label  class="col-lg-2 col-log-offset-2 control-label"><b>用户名</b></label>
          <div class="col-lg-6" >
            <label  class="col-lg-6 control-label" style="text-align: left">{{user.username}}</label>
          </div>
        </div>
        <div class="form-group">
          <label  class="col-lg-2 control-label"><b>权&nbsp&nbsp&nbsp&nbsp限</b></label>
          <div class="col-lg-6">
            <div v-for="role in roles" style="display: inline-block;margin:9px 30px 10px 10px">
              <input type="radio"
                     :id="role"
                     :value="role"
                     name="role"
                     v-model="user.role" >
              <label :for="role">{{ role }}</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-6 col-lg-offset-2">
            <router-link class="btn btn-success" exact to="/management/users">取消</router-link>
            <button type="button" class="btn btn-primary" @click="changeRole()" style="margin-left: 20px">提交</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
export default{
  data(){
    return{
      roles:['user','teacher','admin'],
      user:{
        username: '',
        role: ''
      },

    }
  },
  mounted(){
    console.log(this.$route.params.id)
    this.$http.get('users/'+this.$route.params.id).then(resp => {
      this.user.username=resp.body.username
      this.user.role=resp.body.role
    })
  },
  methods:{
    changeRole(){
      this.$http.put('users/'+this.$route.params.id, this.user).then(() => {
        alert('修改成功')
        this.$router.push('/management/users')
      },() => {
        alert('修改失败')
      })
    }
  }
}
</script>
<style scoped>
  label {
    font-size: 16px;
  }
</style>
