<template>
    <NuxtLayout :name="layout">
        <div class="home">
            <NuxtLink :to="{ path: '/login' }">
                <ElButton type="primary"> 去登录 </ElButton>
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import { useStore } from '@/store';
const store = useStore();
const layout = 'custom';

const a: Test1 = { a: '1' };

console.log(a, store.state.user.id);
</script>
<style lang="less" scoped>
@import './index.less';
</style>
