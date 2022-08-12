<template>
    <NuxtLayout :name="layout">
        <div class="home">
            <NuxtLink :to="{ path: '/login' }">
                <ElButton type="primary"> 去登录{{ id }} </ElButton>
            </NuxtLink>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import { useStore, useMapState } from '@/store';
const store = useStore();
const mapState = useMapState();
const layout = 'custom';
const id = computed(() => store.state.user.id);

console.log('23232', id.value);
setTimeout(() => {
    store.commit('SET_ID', '123123123');
}, 2000);

const a: Test1 = { a: '1' };

console.log(a, store.state.user.id);
</script>
<style lang="less" scoped>
@import './index.less';
</style>
