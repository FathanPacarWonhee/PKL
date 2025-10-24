<template>
  <div class="cart-empty-page">
    <AppHeader />
    <div class="cart-empty-content">
      <div class="image-container">
<img
  src="https://png.pngtree.com/png-vector/20241025/ourmid/pngtree-3d-vector-shopping-trolley-png-image_14148727.png"
  alt="Empty Cart Illustration"
  class="empty-cart-image"
  @error="handleImageError"
/>
      </div>
      <div class="text-container">
        <h2>Keranjang Kamu Kosong</h2>
        <p>
          Kami punya banyak barang yang siap memberi kamu kebahagiaan.
          Yuk, belanja sekarang!
        </p>
        <button @click="goToHome" class="shop-button">Mulai Belanja</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "Cart",
  components: { Footer, AppHeader },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
    handleImageError(event) {
      event.target.src = "https://cdn-icons-png.flaticon.com/512/833/833472.png";
    },
  },
};
</script>

<style scoped>
.cart-empty-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  background-color: #fff;
}

.cart-empty-content {
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 900px;
  width: 100%;
  flex-grow: 1;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.empty-cart-image {
  max-width: 300px;
  width: 100%;
  height: auto;
}

.text-container {
  flex: 1;
}

.text-container h2 {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
}

.text-container p {
  color: #555;
  margin-bottom: 20px;
  line-height: 1.4;
}

.shop-button {
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.shop-button:hover {
  background-color: #003d80;
}
</style>
