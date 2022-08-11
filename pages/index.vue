<template>
    <NuxtLayout :name="layout">
        <div class="home">
            <NuxtLink :to="{ path: '/login' }">
                <ElButton type="primary"> 去登录 </ElButton>
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>
<script setup>
import { useStore } from '~/store/index';

const store = useStore();
const layout = 'custom';

console.log(store);
</script>
<style lang="less" scoped>
@import './index.less';
</style>
