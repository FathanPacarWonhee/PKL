<template>
  <div class="account-page">
    <AppHeader />
    <section class="account-layout">
      <Sidebar />
      <div class="account-content">
        <router-view />
      </div>
      <BottomBar class="desktop-hidden" />
    </section>
    <Footer />
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
import BottomBar from "@/components/BottomBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.account-layout {
  display: flex;
  height: calc(100vh - 100px); /* subtract footer height */
  flex-direction: row;
}

.account-content {
  flex-grow: 1;
  position: relative;
  padding: 24px;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  /* removed padding-bottom since footer is outside */
}

/* ⬇️ Sembunyikan BottomBar di desktop */
.desktop-hidden {
  display: none;
}

@media (max-width: 768px) {
  .account-layout {
    flex-direction: column;
    height: auto;
  }

  .account-content {
    padding: 16px;
    /* no padding-bottom needed */
    height: auto;
  }

  .desktop-hidden {
    display: flex;
  }
}

/* Footer outside flex container, full width */
</style>
