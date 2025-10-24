<template>
  <header class="app-header">
      <div class="header-container">
        <div class="header-left">
          <img src="https://tokosuma.co.id/assets/images/layout-5/logo/logo_tokosuma_coid.png" alt="Logo Tokosuma" class="logo" loading="lazy" @click="navigateTo('/')" style="cursor: pointer;" />
          <div class="category-dropdown" tabindex="0" @click="showCategoryMenu = true">
            <span>Kategori</span>
          </div>
        </div>
 
      <div class="header-center" style="position: relative;">
        <input v-model="searchInput" @input="updateSearchSuggestions" type="text" placeholder="Cari Produk, Judul Buku, atau Penulis" class="search-input" autocomplete="off" @focus="showSearchSuggestions = true" @blur="hideSearchSuggestions" @keydown.down.prevent="highlightNextSuggestion" @keydown.up.prevent="highlightPrevSuggestion" @keydown.enter.prevent="selectHighlightedSuggestion" />
        <ul v-if="showSearchSuggestions && searchSuggestions.length > 0" class="search-suggestions" @mousedown.prevent>
          <li v-for="(suggestion, index) in searchSuggestions" :key="suggestion" :class="{ highlighted: index === highlightedSuggestionIndex }" @click="onOptionClick(suggestion)" @mouseenter="highlightedSuggestionIndex = index">
            {{ suggestion }}
          </li>
        </ul>
      </div>

      <div class="header-right">
        <a href="#" class="cart-icon" @click.prevent="navigateTo('/cart')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </a>

        <div class="account-icon-wrapper" @click="toggleAccountDropdown" tabindex="0" @blur="closeAccountDropdown">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 2 0 0 1 13 0" />
          </svg>
          <div v-if="showAccountDropdown" class="account-dropdown" @mousedown.prevent>
            <div class="account-info">
              <img src="https://i.pravatar.cc/40" alt="User Avatar" class="avatar" loading="lazy" />
              <div class="user-details">
                <div class="user-name">Fathan Atthalah</div>
                <div class="user-email">fathan.athallah.08@gmail.com</div>
              </div>
            </div>
            <div class="points">
              <img src="https://static.gramedia.net/_next/static/media/myvalue.c4660240.png" alt="Points Icon" loading="lazy" />
              <span>0 Poin</span>
            </div>
            <ul class="account-links">
              <li @click="navigateTo('/account/transaksi')">Transaksi <span>›</span></li>
              <li @click="navigateTo('/account/wishlist')">Wishlist <span>›</span></li>
              <li @click="navigateTo('/account/akun')">Akun <span>›</span></li>
              <li @click="navigateTo('/account/ulasan')">Ulasan Produk <span>›</span></li>
            </ul>
            <div class="logout" @click="logout">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Keluar Akun
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Menu Overlay -->
    <div v-if="showCategoryMenu" class="category-menu-overlay" @click="closeCategoryMenu">
      <div class="category-menu-popup" @click.stop>
        <div class="category-menu-content">
          <div class="category-menu-columns">
            <div v-for="(subOptions, mainCategory) in filteredCategoryOptions" :key="mainCategory" class="category-menu-column">
              <h3>{{ mainCategory }}</h3>
              <ul>
                <li v-for="option in subOptions['']" :key="option" @click="onOptionClick(option)">
                  {{ option }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      showAccountDropdown: false,
      showCategoryMenu: false,
      categorySearchTerm: "",
      searchInput: "",
      searchSuggestions: [],
      showSearchSuggestions: false,
      highlightedSuggestionIndex: -1,
      categoryOptions: {
        SUMA: { "": ["Buku Tulis", "Buku Gambar", "Pensil Warna", "Kertas HVS", "Rautan & Pensil", "Glue", "Ruler", "Marker", "Pen", "Eraser"] },
        "BUKU CATATAN": { "": ["Mini", "Premium", "Eksklusif", "Pocket", "Biggy"] },
        "PRODUCT CUSTOM": { "": ["Photobook", "Kalender", "Notes", "Mug", "T-Shirt", "Lunch Box"] },
        "MARKETING KIT": { "": ["Stationary", "Promosi", "Display", "Desain Online"] },
        "PAKET SPECIAL": { "": ["Paket Hemat", "Paket Momen"] },
        TEKSTIL: { "": ["Jersey", "Hijab", "Sajadah", "Kemeja", "Totebag"] }
      }
    };
  },
  computed: {
    filteredCategoryOptions() {
      if (!this.categorySearchTerm) {
        return this.categoryOptions;
      }
      const searchTermLower = this.categorySearchTerm.toLowerCase();
      const filtered = {};
      for (const [mainCategory, subOptions] of Object.entries(this.categoryOptions)) {
        const filteredSubOptions = subOptions[""].filter(option =>
          option.toLowerCase().includes(searchTermLower)
        );
        if (filteredSubOptions.length > 0) {
          filtered[mainCategory] = { "": filteredSubOptions };
        }
      }
      return filtered;
    }
  },
  methods: {
    toggleCategoryMenu() {
      this.showCategoryMenu = !this.showCategoryMenu;
    },
    closeCategoryMenu() {
      this.showCategoryMenu = false;
      this.categorySearchTerm = "";
    },
    toggleAccountDropdown() {
      this.showAccountDropdown = !this.showAccountDropdown;
    },
    closeAccountDropdown() {
      this.showAccountDropdown = false;
    },
    navigateTo(path) {
      this.$router?.push(path) || (window.location.href = path);
    },
    onOptionClick(option) {
      const routeMap = {
        "Buku Gambar": "/buku-gambar",
        "Buku Tulis": "/buku-tulis",
        "Kertas HVS": "/kertas-hvs",
        "Promosi": "/promosi",
        "Display": "/display",
        "Desain Online": "/desain-online",
        "Stationary": "/stationary",
        "Rautan & Pensil": "/rautan-pensil",
        "Glue": "/glue",
        "Eraser": "/eraser",
        "Paket Momen": "/paket-momen",
        "Paket Hemat": "/paket-hemat",
        "Jersey": "/jersey",
        "Hijab": "/hijab",
        "Sajadah": "/sajadah",
        "Kemeja": "/kemeja",
        "Totebag": "/totebag",
        "Photobook": "/photobook",
        "Mini": "/mini",
        "Premium": "/premium",
        "Eksklusif": "/eksklusif",
        "Kalender": "/kalender",
        "Notes": "/notes",
        "Mug": "/mug",
        "T-Shirt": "/t-shirt",
        "Lunch Box": "/lunch-box",
        "Pocket": "/pocket",
        "Biggy": "/biggy",
        "Pensil Warna": "/pensil-warna",
        "Ruler": "/ruler",
        "Marker": "/marker",
        "Pen": "/pen"
      };
      this.navigateTo(routeMap[option] || `/category/${option.toLowerCase().replace(/\s+/g, "-")}`);
      this.closeCategoryMenu();
    },
    logout() {
      alert("Berhasil logout.");
    }
  }
};
</script>

<style scoped>
.app-header {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  width: 250px;
  height: auto;
  margin-top: -10px;
}

.category-dropdown {
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  color: #333;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.category-dropdown:hover {
  background-color: #f5f5f5;
}

.header-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 100%;
  max-width: 600px;
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #1e88e5;
}

.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
}

.cart-icon, .account-icon-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cart-icon:hover, .account-icon-wrapper:hover {
  background-color: #f5f5f5;
}

.account-icon-wrapper {
  position: relative;
}

.account-dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 10px;
  z-index: 2000;
}

.account-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-details {
  font-size: 13px;
}

.user-name {
  font-weight: 600;
}

.user-email {
  color: #666;
  font-size: 12px;
}

.points {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  padding: 8px;
  background-color: #f9f9f9;
  border-radius: 6px;
  font-size: 14px;
}

.points img {
  width: 20px;
  height: 20px;
}

.account-links {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.account-links li {
  display: flex;
  justify-content: space-between;
  padding: 8px 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.account-links li:hover {
  background-color: #f5f5f5;
}

.account-links li span {
  color: #999;
}

.logout {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  color: #ff3b81;
  font-weight: 600;
  cursor: pointer;
  border-top: 1px solid #eee;
  margin-top: 5px;
  transition: background-color 0.2s ease;
  border-radius: 4px;
}

.logout:hover {
  background-color: #fff5f7;
}

.category-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1499;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
}

.category-menu-popup {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1500;
  max-width: 1200px;
  width: 90%;
  max-height: 70vh;
  overflow-y: auto;
  padding: 20px;
}

.category-menu-columns {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.category-menu-column {
  min-width: 200px;
  flex: 1;
}

.category-menu-column h3 {
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
  font-size: 16px;
  text-transform: uppercase;
  padding-bottom: 5px;
  border-bottom: 2px solid #f0f0f0;
}

.category-menu-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-menu-column li {
  cursor: pointer;
  margin-bottom: 10px;
  color: #555;
  transition: color 0.2s ease;
  font-size: 14px;
  padding: 6px 0;
}

.category-menu-column li:hover {
  color: #1e88e5;
}
</style>
