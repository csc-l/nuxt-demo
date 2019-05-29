<template>
    <div class="login-wrapper">
        <Form :model="loginForm" :label-width="80" label-position="top">
            <FormItem label="">
                <Input v-model="loginForm.userName" placeholder="userName" style="width: 300px" />
            </FormItem>
            <FormItem label="">
                <Input v-model="loginForm.password" type="password" placeholder="password" style="width: 300px" />
            </FormItem>
            <FormItem>
                <Button type="primary" style="width: 300px" @click="signIn">sign In</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import cookie from 'js-cookie';
import axios from '~/plugins/axios2'
export default {
    name: 'login',
    layout: 'login',
    data() {
        return {
            loginForm: {
                userName: 'caisc',
                password: '123456'
            }
        }
    },
    methods: {
        async signIn() {
            const result = await axios.get('/rest/user/signIn', { params: { ...this.loginForm } })
            const { status, message } = result.data
            if (status !== 200) {
                return this.$Message.error(message);
            }
            cookie.set('token', 'hasLogin')
            this.$Message.success('登录成功');
            this.$router.push('/')
        }
    }
}
</script>
<style lang="less" scoped>
.login-wrapper{
    width: 1200px;
    margin: 120px auto;
    text-align: center;
}
</style>
