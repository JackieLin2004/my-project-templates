<script setup>

</script>

<template>
  <div>
    <div class="wv-wrapper">
      <div class="left-card">
        <el-image style="width: 100%;height: 100%" fit="cover"
                  src="https://img1.baidu.com/it/u=4097856652,4033702227&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"/>
      </div>
      <div class="welcome-title">
        <div style="font-size: 30px; font-weight: bold">欢迎来到我们的学习平台</div>
        <div style="margin-top: 10px">在这里你可以学习如何使用Java，如何搭建网站，并且与Java之父密切交流</div>
        <div style="margin-top: 5px">在这里你可以同性交友，因为都是男的，没有学Java的女生</div>
      </div>
      <div class="right-card"></div>
    </div>
  </div>
</template>

<style scoped>
.wv-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.wv-wrapper .left-card {
  flex: 1;
  background-color: black;
}

.wv-wrapper .right-card {
  width: 400px;
  z-index: 1;
  background-color: white;
}

.wv-wrapper .welcome-title {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  text-shadow: 0 0 10px black;
}

</style>