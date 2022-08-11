<template>
    <div class="custom-layout">
        <Header></Header>
        <div class="container">
            <div class="menu">
                <LeftMenu></LeftMenu>
            </div>
            <div class="slot-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup></script>

<style lang="less" scoped>
@import './custom.less';
</style>
