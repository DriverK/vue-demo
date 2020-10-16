<template>
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>这是首页,哈哈哈</div>
    <hr/>
    <blog-footer></blog-footer>
  </div>
</template>

import blogHeader from '@/components/BlogHeader.vue'
import blogFooter from '@/components/BlogFooter.vue'

export default {
  name: 'BlogIndex',
  components: {'blogHeader', 'blogFooter'}
}
