<template>
  <div class="home-page">
    <div v-if="showAd" class="dark-overlay" @click="closeAd" aria-hidden="true"></div>

    <div v-if="showAd" class="ad-popup" role="dialog" aria-modal="true" aria-label="Iklan Promo" ref="adPopup">
      <div class="ad-content" ref="adContent">
        <button class="close-btn" @click="closeAd" ref="closeBtn" aria-label="Tutup Iklan">×</button>
        <img src="https://images.tokopedia.net/img/cache/850/BgtCLw/2025/4/15/cce56cd6-6d85-42dc-8b6e-c3b8359cbaf4.jpg" alt="Iklan Promo" class="ad-image" loading="lazy" />
      </div>
    </div>

    <div :class="['main-content-wrapper', { blurred: showAd }]">
      <AppHeader />

      <section class="promo-section">
        <div class="promo-grid">
          <div class="promo-left">
            <img src="https://images.tokopedia.net/img/cache/850/BgtCLw/2025/4/15/1aa21b3a-6fa0-4c9b-afa3-5d96dc5e3471.jpg" alt="Promo Besar" class="promo-image" loading="lazy" style="object-fit: contain;" />
          </div>
      <div class="promo-right">
          <img src="https://images.tokopedia.net/img/cache/850/BgtCLw/2025/4/15/cce56cd6-6d85-42dc-8b6e-c3b8359cbaf4.jpg" alt="Promo Kecil Atas" class="promo-image promo-image-inline" loading="lazy" style="object-fit: contain;" />
          <img src="https://images.tokopedia.net/img/cache/850/BgtCLw/2024/5/13/6de9a393-f00b-4615-bfa9-4f4ecb904c55.jpg" alt="Promo Kecil Bawah" class="promo-image promo-image-inline" loading="lazy" style="object-fit: contain;" />
      </div>
    </div>
  </section>

      <section class="categories">
        <button v-for="category in categories" :key="category.name" class="category-item" @click="navigateToCategory(category.name)">
          <img :src="category.icon" :alt="category.name" loading="lazy" />
          <span>{{ category.name }}</span>
        </button>
      </section>

      <section class="official-store-section">
        <h2>Official Store</h2>
        <div class="official-store-cards">
          <div v-for="(store, index) in officialStores" :key="index" class="official-store-card" @click="navigateToCategory(store.name)">
            <img :src="store.image" :alt="store.name" loading="lazy" />
            <span>{{ store.name }}</span>
          </div>
        </div>
      </section>

      <section class="special-products-section">
        <div class="section-header-special">
          <h2>SPECIAL PRODUCT</h2>
        </div>
        
        <div class="special-products-container">
          <button class="nav-button prev" @click="scrollSpecialProducts(-1)" aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div class="special-products-wrapper" ref="specialProductsWrapper">
          <div v-for="(product, index) in specialProducts" :key="index" class="special-product-card" @click="product.path && navigateTo(product.path)">
            <div class="special-product-content">
              <img :src="product.image" :alt="product.title" class="product-image" loading="lazy" />
              <h3>{{ product.title }}</h3>
              <ul>
                <li v-for="(item, i) in product.items" :key="i">{{ item }}</li>
              </ul>
              <div class="special-product-price">{{ product.price }}</div>
            </div>
          </div>
          </div>
          
          <button class="nav-button next" @click="scrollSpecialProducts(1)" aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      <section class="blog-section">
        <div class="blog-section-header">
          <h2>Blog</h2>
          <button class="lihat-semua-button" @click="navigateTo('/toko-suma-blog')">Lihat Semua</button>
        </div>
        <div class="blog-cards">
          <div v-for="(blog, index) in blogs" :key="index" class="blog-card" @click="navigateTo(blog.path)">
            <img :src="blog.image" :alt="blog.title" class="blog-image" loading="lazy" />
            <div class="blog-content">
              <h3>{{ blog.title }}</h3>
              <p class="blog-excerpt">{{ blog.excerpt }}</p>
              <div class="blog-date">{{ blog.date }}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="promo-banner">
        <div class="promo-content">
          <div class="promo-text">
            <h3>Kembangkan bisnis Anda bersama Kami.</h3>
            <p>Dan bergabunglah bersama Kami sebagai salah satu mitra TokoSuma</p>
          </div>
          <a href="https://tokosuma.co.id/" target="_blank" rel="noopener noreferrer" class="promo-button">www.tokosuma.co.id</a>
        </div>
      </section>
    </div>

    <Footer />

    <div v-if="showCategoryMenu" class="category-menu-overlay" @click="closeCategoryMenu">
      <div class="category-menu-popup" @click.stop>
        <div class="category-menu-content">
          <div class="category-menu-columns">
            <div v-for="(subOptions, mainCategory) in categoryOptions" :key="mainCategory" class="category-menu-column">
              <h3>{{ mainCategory }}</h3>
              <ul>
                <li v-for="option in subOptions['']" :key="option" @click="onOptionClick(option)">{{ option }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "Home",
  components: { Footer, AppHeader },
  data() {
    return {
      showAccountDropdown: false,
      showAd: false,
      showCategoryMenu: false,
      categories: [
        { name: "Tas", icon: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/highlighted_menu/zvz687a199.png", path: "/totebag" },
        { name: "Display", icon: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/highlighted_menu/2cdo-i51a8.png", path: "/display" },
        { name: "Stationary", icon: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/highlighted_menu/6a78z4tv49.png", path: "/stationary" },
        { name: "International Books", icon: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/highlighted_menu/rero26z6r-.png", path: "/rekomendasi" },
        { name: "Olahraga", icon: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/highlighted_menu/52coaxr1cr.png", path: "/jersey" },
        { name: "SUMA", icon: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/highlighted_menu/32xv351t32.png", path: "/pensil-warna" },
        { name: "Desain Online", icon: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/highlighted_menu/a98x8547az.png" }
      ],
      categoryOptions: {
        SUMA: { "": ["Buku Tulis", "Buku Gambar", "Pensil Warna", "Kertas HVS", "Rautan & Pensil", "Glue", "Ruler", "Marker", "Pen", "Eraser"] },
        "BUKU CATATAN": { "": ["Mini", "Premium", "Eksklusif", "Pocket", "Biggy"] },
        "PRODUCT CUSTOM": { "": ["Photobook", "Kalender", "Notes", "Mug", "T-Shirt", "Lunch Box", "Angpao"] },
        "MARKETING KIT": { "": ["Stationary", "Promosi", "Display", "Desain Online"] },
        "PAKET SPECIAL": { "": ["Paket Hemat", "Paket Momen"] },
        TEKSTIL: { "": ["Jersey", "Hijab", "Sajadah", "Kemeja", "Totebag"] }
      },
      officialStores: [
        { name: "Sinar Dunia", image: "https://sidu.id/documents/287278/309563/logo_sidu_1.png.webp/19b6290a-d5ca-2107-071a-682b3ea3a0c1?t=1631851784610" },
        { name: "Campus", image: "https://bangkitperkasa.com/storage/2023/12/Buku-Tulis-Campuss-50-Lembar.jpeg" },
        { name: "Erlangga", image: "https://upload.wikimedia.org/wikipedia/id/5/5b/Esis.jpg" },
        { name: "TokoSuma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXO4RapFKbb3uuLivY2RfCnLPqAS0YIpFC6A&s" },
        { name: "Tokopedia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSLIVbxstNMc8R6MN54-8BW6BzKXdZeKVmQ&s" },
        { name: "Shopee", image: "https://images.seeklogo.com/logo-png/37/1/shopee-logo-png_seeklogo-378738.png" },
        { name: "New Store", image: "https://static.vecteezy.com/system/resources/thumbnails/013/021/651/small_2x/new-store-text-on-speech-bubble-design-template-vector.jpg" }
      ],
      specialProducts: [
        {
          title: "BUKU TULIS",
          image: "https://tokosuma.co.id/../toko-suma/storage/app/public/thumbnail/05022021140543-38622.jpg",
          items: ["Buku Tulis Suma Campus Merah 50 lembar"],
          price: "Rp.64.000",
          path: "/so1"
        },
        {
          title: "BUKU GAMBAR SUMA",
          image: "https://tokosuma.co.id/toko-suma/storage/app/public/images_product/05022021084202-80863.jpg",
          items: ["Buku Gambar A4 50 Lembar"],
          price: "Rp.75.000",
          path: "/so2"
        },
        {
          title: "BUKU ALBUM",
          image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/113/MTA-96893680/brd-44261_album-classic-foto-penyimpanan-kenangan-buku-isi-100-foto-ukuran-4x6inch-hadiah-gift-kado_full09.jpg",
          items: ["Album Classic Penyimpanan Kenangan"],
          price: "Rp.90.000",
          path: "/so3"
        },
        {
          title: "BUKU CATATAN",
          image: "https://upload.jaknot.com/2025/01/images/products/3dc562/original/toddi-buku-catatan-harian-binder-kulit-retro-maple-leaf-ld-a1.jpeg",
          items: ["Jurnal Biggy : Cactus"],
          price: "Rp.65.000",
          path: "/so4"
        },
        {
          title: "PRODUK BARU",
          image: "https://tokosuma.co.id/../toko-suma/storage/app/public/thumbnail/30032023162134-57642.jpeg",
          items: ["Lunch Box Size L Per Lusin"],
          price: "Rp.21.000",
          path: "/so5"
        }
      ],
      blogs: [
        {
          title: "Tutup Usia, Pangeran Kegelapan itu Pulang ke Altar Abadinya",
          excerpt: "Kehadiran Ozzy Qabourine sebagai Pangeran Kegelapan telah membawa secretariat cahaya bagi berbagai aliran musik keras. Yuk, ikutin perjalanannya lewat artikel ini.",
          image: "https://image.gramedia.net/rs:fit:576:0/plain/https://www.gramedia.com/blog/content/images/2025/07/Desain-tanpa-judul--1--1.jpg",
          date: "23 Jul 2025",
          path: "/blog1"
        },
        {
          title: "Stimulasi Anak Lewat Bacaan: Tips dan Buku Rekomendasi",
          excerpt: "Buku bacaan ternyata bisa menstimulasi fungsi kognitif anak, lho. Selain itu, masih banyak juga manfaat lainnya. Cek selengkapnya di artikel.",
          image: "https://www.akudankau.co.id/sites/default/files/2024-07/Peran%20Orangtua%20menstimulasi%20Anak%20Bicara%20untuk%20Mendorong%20Perkembangan%20Bahasanya.jpg",
          date: "23 Jul 2025",
          path: "/blog2"
        },
        {
          title: "The Fantastic Four: A First Step, Segera Rilis Awali Fase Enam MCU",
          excerpt: "Fantastic Four akan kembali menghiasi layar bioskop, sebagai film yang digarap oleh Marvel Studios. Sekaligus mengawali fase enam di jagat sinematik mereka!",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UChG7W-8AxxOiFRRR4ivRnb2sjGK5V6TtQ&s",
          date: "22 Jul 2025",
          path: "/blog3"
        }
      ]
    };
  },
  mounted() {
    const adShownInSession = sessionStorage.getItem('adShown');

    if (!adShownInSession) {
      setTimeout(() => {
        this.showAd = true;
      }, 1000);
    }
    
    this.closeAd = () => {
      this.showAd = false;
      sessionStorage.setItem('adShown', 'true');
    };

    window.addEventListener("beforeunload", this._cleanupBodyNoScroll);
  },
  beforeDestroy() {
    this._cleanupBodyNoScroll();
    window.removeEventListener("beforeunload", this._cleanupBodyNoScroll);
    this._removeKeydownListener();
  },
  methods: {
    toggleAccountDropdown() {
      this.showAccountDropdown = !this.showAccountDropdown;
    },
    closeAccountDropdown() {
      this.showAccountDropdown = false;
    },
    navigateTo(path) {
      this.$router?.push(path) || (window.location.href = path);
    },
    logout() {
      alert("Berhasil logout.");
    },
    closeAd() {
      this.showAd = false;
      sessionStorage.setItem('adShown', 'true');
    },
    toggleCategoryMenu() {
      this.showCategoryMenu = !this.showCategoryMenu;
    },
    closeCategoryMenu() {
      this.showCategoryMenu = false;
    },
    navigateToCategory(name) {
      const routeMap = {
        "Buku Gambar": "/buku2",
        "Buku Tulis": "/buku1",
        "Kertas HVS": "/kertas-hvs",
        "Desain Digital": "/desain-online",
        "Desain Online": "/desain-online",
        "Rautan & Pensil": "/rautan-pensil",
        "Glue": "/glue",
        "Eraser": "/eraser",
        "Tas": "/totebag",
        "Display": "/display",
        "Stationary": "/stationary",
        "International Books": "/rekomendasi",
        "Olahraga": "/jersey",
        "SUMA": "/pensil-warna",
      };
      
      if (name === "Sinar Dunia") {
        window.open("https://sidu.id/in/beranda", "_blank");
      } else if (name === "Campus") {
        window.open("https://bangkitperkasa.com/storage/2023/12/Buku-Tulis-Campuss-50-Lembar.jpeg", "_blank");
      } else if (name === "Erlangga") {
        window.open("https://www.erlangga.co.id/", "_blank");
      } else if (name === "TokoSuma") {
        window.open("https://tokosuma.co.id/", "_blank");
      } else if (name === "Tokopedia") {
        window.open("https://www.tokopedia.com/", "_blank");
      } else if (name === "Shopee") {
        window.open("https://shopee.co.id/?uls_trackid=b6951a613d3f&utm_campaign=-&utm_content=1f75ca406ee391b6627a21d4c9952beb-2376683--&utm_medium=affiliates&utm_source=an_11226330000&utm_term=ddhahsq58ygb&gad_source=1", "_blank");
      } else {
        this.navigateTo(routeMap[name] || `/category/${name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`);
      }
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
      setTimeout(this.closeCategoryMenu, 100);
    },
    scrollSpecialProducts(direction) {
      const wrapper = this.$refs.specialProductsWrapper;
      if (wrapper) wrapper.scrollBy({ left: direction * 300, behavior: "smooth" });
    },
    _cleanupBodyNoScroll() {
      document.body?.classList.remove("no-scroll");
    },
    _removeKeydownListener() {
    }
  }
};
</script>

<style scoped>
.home-page { font-family: "Poppins", sans-serif; background-color: #fff; color: #333; min-height: 100vh; position: relative; overflow-x: hidden; }

/* Overlay & Popup */
.dark-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); backdrop-filter: blur(2px); z-index: 2999; }
.ad-popup { position: fixed; top: 50%; left: 50%; width: 50vw; max-width: 600px; height: 50vh; max-height: 500px; background: white; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3); transform: translate(-50%,-50%); z-index: 3000; display: flex; justify-content: center; align-items: center; }
.ad-content { position: relative; width: 100%; height: 100%; }
.ad-image { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }
.close-btn { position: absolute; top: 10px; right: 15px; background: rgba(255,255,255,0.9); border: none; font-size: 24px; cursor: pointer; border-radius: 50%; width: 36px; height: 36px; line-height: 36px; text-align: center; font-weight: 700; color: #333; transition: background 0.3s ease; z-index: 10; }
.close-btn:hover { background: #eee; }

/* Header */
.header { display: flex; align-items: center; padding: 10px 20px; border-bottom: 1px solid #ddd; background-color: #fff; position: sticky; top: 0; z-index: 1000; }
.header-left { display: flex; align-items: center; gap: 15px; flex: 1; }
.logo { 
  width: 180px; 
  height: auto; 
  margin-top: -10px; 
}
.category-dropdown { display: flex; align-items: center; font-weight: 600; cursor: pointer; color: #333; padding: 8px 12px; border-radius: 8px; transition: background-color 0.2s ease; }
.category-dropdown:hover { background-color: #f5f5f5; }
.dropdown-icon { margin-left: 5px; }
.header-center { flex: 2; display: flex; justify-content: center; }
.search-input { width: 100%; max-width: 600px; padding: 8px 15px; border: 1px solid #ccc; border-radius: 20px; font-size: 14px; outline: none; transition: border-color 0.3s ease; }
.search-input:focus { border-color: #1e88e5; }
.header-right { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 15px; }

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

.account-dropdown { position: absolute; top: 40px; right: 0; background-color: white; border: 1px solid #ddd; border-radius: 8px; width: 250px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 10px; z-index: 2000; }
.account-info { display: flex; align-items: center; gap: 10px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
.avatar { width: 40px; height: 40px; border-radius: 50%; }
.user-details { font-size: 13px; }
.user-name { font-weight: 600; }
.user-email { color: #666; font-size: 12px; }
.points { display: flex; align-items: center; gap: 8px; margin: 10px 0; padding: 8px; background-color: #f9f9f9; border-radius: 6px; font-size: 14px; }
.points img { width: 20px; height: 20px; }
.account-links { list-style: none; padding: 0; margin: 10px 0; }
.account-links li { display: flex; justify-content: space-between; padding: 8px 5px; cursor: pointer; border-radius: 4px; transition: background-color 0.2s ease; }
.account-links li:hover { background-color: #f5f5f5; }
.account-links li span { color: #999; }
.logout { display: flex; align-items: center; gap: 8px; padding: 8px; color: #ff3b81; font-weight: 600; cursor: pointer; border-top: 1px solid #eee; margin-top: 5px; transition: background-color 0.2s ease; border-radius: 4px; }
.logout:hover { background-color: #fff5f7; }

/* Promo Section */
.promo-section { max-width: 1200px; margin: 20px auto; padding: 0 15px; }

.promo-grid { 
  display: grid; 
  grid-template-columns: 2fr 1fr;
  gap: 10px; 
}

.promo-left { 
  overflow: hidden; 
  border-radius: 0 !important; 
  height: 440px;
}

.promo-left img.promo-image {
  border-radius: 0 !important;
}

.promo-right { 
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  border-radius: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

.promo-left {
  border-radius: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

.promo-left img.promo-image,
.promo-right img.promo-image,
.promo-image {
  border-radius: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

.promo-right img.promo-image:first-child {
  margin-bottom: 15px !important;
}

.promo-right img.promo-image:last-child {
  margin-top: -15px !important;
}

.promo-right img.promo-image { 
  height: 215px;
  width: 100%;
  max-width: 100%;
  object-fit: cover; 
  border-radius: 0 !important;
  margin: 0;
  padding: 0;
}

.promo-image {
  border-radius: 0 !important;
}

.promo-right img.promo-image:first-child {
  margin-bottom: -6px;
}

.promo-right img.promo-image:last-child {
  margin-top: -6px;
}

.promo-image { 
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  border-radius: 0 !important; 
  cursor: pointer; 
}

/* Categories */
.categories { 
  display: flex; 
  gap: 25px; 
  padding: 20px; 
  justify-content: center; 
  flex-wrap: wrap; 
}

.category-item { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  cursor: pointer; 
  width: 140px; 
  border: none; 
  background: transparent; 
  outline: none; 
  padding: 0; 
  transition: transform 0.2s ease; 
}

.category-item:hover { 
  transform: scale(1.05); 
}

.category-item img { 
  width: 80px; 
  height: 80px; 
  object-fit: contain; 
  margin-bottom: 8px; 
}

.category-item span { 
  font-size: 16px; 
  text-align: center; 
  color: #333; 
  font-weight: 600; 
}

/* Official Store */
.official-store-section { background-color: #fff; padding: 20px 15px; max-width: 1200px; margin: 0 auto 40px auto; border-radius: 12px; }
h2 { font-weight: 700; font-size: 18px; margin-bottom: 15px; color: #333; text-align: left; }
.official-store-cards { display: flex; gap: 20px; justify-content: center; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 10px; scrollbar-width: none; }
.official-store-cards::-webkit-scrollbar { display: none; }
.official-store-card { background-color: white; border: 1px solid #ddd; border-radius: 12px; padding: 15px 10px; width: 120px; height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer; transition: box-shadow 0.3s ease; }
.official-store-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
.official-store-card img { width: 80px; height: 100px; object-fit: contain; margin-bottom: 10px; }
.official-store-card span { font-weight: 700; font-size: 14px; text-align: center; color: #333; }

/* Special Products */
.special-products-section { 
  background-color: #fff; 
  padding: 20px 0; 
  max-width: 1200px; 
  margin: 0 auto 40px auto; 
  border-radius: 12px; 
  position: relative;
}

.special-products-section h2 {
  text-align: left;
  margin-left: 20px;
}

.special-products-container {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 40px;
}

.special-products-wrapper {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  flex: 1;
}

.special-products-wrapper::-webkit-scrollbar { 
  display: none; 
}

.special-product-card {
  flex: 0 0 180px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  /* height removed to keep flexible size */
}

.special-product-card:hover { 
  transform: translateY(-5px); 
  box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
}

.special-product-content { 
  flex-grow: 1;
  display: flex; 
  flex-direction: column; 
  height: 100%;
}

.product-image { 
  width: 100%; 
  height: 100px; 
  object-fit: contain; 
  border-radius: 8px; 
  margin-bottom: 10px; 
}

.special-product-content h3 { 
  font-size: 14px; 
  font-weight: 700; 
  margin-bottom: 8px; 
  color: #333; 
}

.special-product-content ul { 
  list-style-type: none; 
  padding: 0; 
  margin: 0 0 20px 0; 
  flex-grow: 1; 
}

.special-product-content li { 
  font-size: 12px; 
  color: #666; 
  margin-bottom: 4px; 
  position: relative; 
  padding-left: 12px; 
}

.special-product-content li::before { 
  content: "•"; 
  position: absolute; 
  left: 0; 
  color: #1e88e5; 
}

.special-product-price { 
  font-size: 14px; 
  font-weight: 700; 
  color: #1e88e5; 
  margin-top: auto; 
  text-align: right; 
}

.nav-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  z-index: 10;
}

.nav-button:hover {
  background-color: #f0f0f0;
}

.nav-button.prev {
  left: 0;
}

.nav-button.next {
  right: 0;
}

.nav-button svg {
  width: 18px;
  height: 18px;
}

/* Blog Section */
.blog-section { max-width: 1200px; margin: 40px auto; padding: 0 15px; }
.blog-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.blog-cards { display: flex; gap: 25px; overflow-x: auto; padding-bottom: 10px; scroll-behavior: smooth; -webkit-overflow-scrolling: touch; scrollbar-width: none; justify-content: center; }
.blog-cards::-webkit-scrollbar { display: none; }
.blog-card { 
  flex: 0 0 350px; 
  background: white; 
  border-radius: 8px; 
  overflow: hidden; 
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
  transition: transform 0.3s ease; 
  display: flex; 
  flex-direction: column; 
}
.blog-card:hover { transform: translateY(-5px); }
.blog-image { width: 100%; height: 200px; object-fit: cover; }
.blog-content { 
  padding: 20px; 
  display: flex; 
  flex-direction: column; 
  flex-grow: 1;
}
.blog-content h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #222;
  line-height: 1.4;
  height: 3.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.blog-excerpt { 
  font-size: 14px; 
  color: #555; 
  line-height: 1.6; 
  margin-bottom: 15px; 
  flex-grow: 1;
}
.blog-date { 
  font-size: 13px; 
  color: #888; 
  font-weight: 500; 
  align-self: flex-start; 
  margin-top: auto; 
}

/* Promo Banner */
.promo-banner {
  background-color: #E24915;
  padding: 40px 0;
  margin: 40px 0;
}
.promo-content { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
.promo-text h3 { font-size: 22px; font-weight: 700; color: white; margin-bottom: 10px; }
.promo-text p { font-size: 16px; color: #FFF8F0; margin: 0; }
.promo-button {
  background-color: white;
  color: #E24915;
  padding: 12px 30px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  white-space: nowrap;
  border: 2px solid white;
  font-size: 16px;
}
.promo-button:hover { background-color: transparent; color: white; }

/* Category Menu */
.category-menu-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 1499; display: flex; justify-content: center; align-items: flex-start; padding-top: 80px; }
.category-menu-popup { background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1500; max-width: 1200px; width: 90%; max-height: 70vh; overflow-y: auto; padding: 20px; }
.category-menu-columns { display: flex; gap: 20px; flex-wrap: wrap; }
.category-menu-column { min-width: 200px; flex: 1; }
.category-menu-column h3 { font-weight: 700; margin-bottom: 15px; color: #333; font-size: 16px; text-transform: uppercase; padding-bottom: 5px; border-bottom: 2px solid #f0f0f0; }
.category-menu-column ul { list-style: none; padding: 0; margin: 0; }
.category-menu-column li { cursor: pointer; margin-bottom: 10px; color: #555; transition: color 0.2s ease; font-size: 14px; padding: 6px 0; }
.category-menu-column li:hover { color: #1e88e5; }

.lihat-semua-button { background: none; border: none; color: gray; font-weight: 600; cursor: pointer; font-size: 14px; padding: 0; transition: color 0.3s ease; }
.lihat-semua-button:hover { color: #555; }

/* Blur effect */
.main-content-wrapper { transition: filter 0.3s ease; }
.main-content-wrapper.blurred { filter: blur(5px); pointer-events: none; user-select: none; overflow: hidden; }

/* Responsive */
@media (max-width: 768px) {
  .header { flex-direction: column; gap: 15px; padding: 15px; }
  .header-left, .header-center, .header-right { width: 100%; }
  .logo { width: 150px; margin-top: 0; }
  .promo-grid { grid-template-columns: 1fr; }
  .promo-left { height: 200px; }
  .promo-right img.promo-image { height: 100px; border-radius: 0; }
  .promo-right img.promo-image:first-child { border-top-left-radius: 12px; border-top-right-radius: 12px; }
  .promo-right img.promo-image:last-child { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; }
  .categories { gap: 15px; padding: 20px 10px; }
  .category-item { width: 80px; }
  .category-item img { width: 50px; height: 50px; }
  .official-store-section h2 { text-align: center; } 
  .special-products-container { padding: 0 15px; }
  .special-product-card { flex: 0 0 150px; }
  .promo-content { flex-direction: column; text-align: center; }
  .promo-button { margin-top: 15px; }
  .nav-button { width: 30px; height: 30px; }
  .nav-button svg { width: 14px; height: 14px; }
}

@media (max-width: 480px) {
  .ad-popup { width: 90vw; height: 40vh; }
  .category-item { width: 70px; }
  .category-item span { font-size: 12px; }
  .official-store-card { width: 100px; height: 140px; padding: 10px; }
  .official-store-card img { width: 60px; height: 80px; }
  .official-store-card span { font-size: 12px; }
  .special-product-card { flex: 0 0 130px; padding: 10px; }
  .product-image { height: 80px; }
  .special-product-content h3 { font-size: 12px; }
  .special-product-content li { font-size: 11px; }
  .promo-banner { padding: 30px 0; }
  .promo-text h3 { font-size: 18px; }
  .promo-text p { font-size: 14px; }
  .promo-button { padding: 10px 20px; font-size: 14px; }
  .nav-button { width: 25px; height: 25px; }
  .nav-button svg { width: 14px; height: 14px; }
}
</style>

<style>
body.no-scroll { overflow: hidden !important; height: 100vh !important; touch-action: none !important; }
</style>