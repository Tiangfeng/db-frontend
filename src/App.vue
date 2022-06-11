<template>
  <nav>
    <the-header />
  </nav>

  <section>
    <div style="display: flex">
      <the-aside />

      <router-view style="flex: 1"/>
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheAside from '@/components/TheAside';

export default {
  name: 'Layout',
  components: {
    TheHeader,
    TheAside,
  }
}
</script>

<style>

</style>
