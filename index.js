import { createRouter, createWebHistory } from "vue-router";
import AccountLayout from "@/AccountLayout.vue";
import Transaksi from "@/views/account/Transaksi.vue";
import Wishlist from "@/views/account/Wishlist.vue";
import Akun from "@/views/account/Akun.vue";
import Alamat from "@/views/account/Alamat.vue";
import Ulasan from "@/views/account/Ulasan.vue";

/* API Keys for TanyaSuma AI */
export const TANYASUMA_API_KEY = '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';

/* Google Custom Search API credentials */
export const GOOGLE_SEARCH_API_KEY = 'YOUR_GOOGLE_CUSTOM_SEARCH_API_KEY_HERE';
export const GOOGLE_SEARCH_ENGINE_ID = 'YOUR_GOOGLE_CUSTOM_SEARCH_ENGINE_ID_HERE';

import Home from "@/views/home.vue";
import Cart from "@/views/Cart.vue";
import Rekomendasi from "@/views/rekomendasi.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/glue",
    name: "glue",
    component: () => import("@/views/SUMA/Glue.vue"),
  },
  {
    path: "/eraser",
    name: "eraser",
    component: () => import("@/views/SUMA/Eraser.vue"),
  },
  {
    path: "/ruler",
    name: "ruler",
    component: () => import("@/views/SUMA/Ruler.vue"),
  },
  {
    path: "/marker",
    name: "marker",
    component: () => import("@/views/SUMA/Marker.vue"),
  },
  {
    path: "/pen",
    name: "pen",
    component: () => import("@/views/SUMA/Pen.vue"),
  },
  {
    path: "/desain-online",
    name: "desain-online",
    component: () => import("@/views/MarketingKit/DesainOnline.vue"),
  },
  {
    path: "/blog1",
    name: "blog1",
    component: () => import("@/views/blog/blog1.vue"),
  },
  {
    path: "/blog2",
    name: "blog2",
    component: () => import("@/views/blog/blog2.vue"),
  },
  {
    path: "/blog3",
    name: "blog3",
    component: () => import("@/views/blog/blog3.vue"),
  },
  {
    path: "/blog4",
    name: "blog4",
    component: () => import("@/views/blog/blog4.vue"),
  },
  {
    path: "/blog5",
    name: "blog5",
    component: () => import("@/views/blog/blog5.vue"),
  },
  {
    path: "/toko-suma-blog",
    name: "toko-suma-blog",
    component: () => import("@/views/TokoSumaBlog.vue"),
  },
  {
    path: "/rekomendasi",
    name: "rekomendasi",
    component: Rekomendasi,
  },
  {
    path: "/promosi",
    name: "promosi",
    component: () => import("@/views/MarketingKit/Promosi.vue"),
  },
  {
    path: "/stationary",
    name: "stationary",
    component: () => import("@/views/MarketingKit/Stationary.vue"),
  },
  {
    path: "/display",
    name: "display",
    component: () => import("@/views/MarketingKit/Display.vue"),
  },
  {
    path: "/marketing-kit/st1",
    name: "st1",
    component: () => import("@/views/MarketingKit/ST1.vue"),
  },
  {
    path: "/marketing-kit/st2",
    name: "st2",
    component: () => import("@/views/MarketingKit/ST2.vue"),
  },
  {
    path: "/marketing-kit/st3",
    name: "st3",
    component: () => import("@/views/MarketingKit/ST3.vue"),
  },
  {
    path: "/marketing-kit/st4",
    name: "st4",
    component: () => import("@/views/MarketingKit/ST4.vue"),
  },
  {
    path: "/marketing-kit/promosi1",
    name: "promosi1",
    component: () => import("@/views/MarketingKit/Promosi1.vue"),
  },
  {
    path: "/marketing-kit/promosi2",
    name: "promosi2",
    component: () => import("@/views/MarketingKit/Promosi2.vue"),
  },
  {
    path: "/marketing-kit/promosi3",
    name: "promosi3",
    component: () => import("@/views/MarketingKit/Promosi3.vue"),
  },
  {
    path: "/marketing-kit/promosi4",
    name: "promosi4",
    component: () => import("@/views/MarketingKit/Promosi4.vue"),
  },
  {
    path: "/marketing-kit/promosi5",
    name: "promosi5",
    component: () => import("@/views/MarketingKit/Promosi5.vue"),
  },
  {
    path: "/marketing-kit/promosi6",
    name: "promosi6",
    component: () => import("@/views/MarketingKit/Promosi6.vue"),
  },
  {
    path: "/marketing-kit/promosi7",
    name: "promosi7",
    component: () => import("@/views/MarketingKit/Promosi7.vue"),
  },
  {
    path: "/marketing-kit/promosi8",
    name: "promosi8",
    component: () => import("@/views/MarketingKit/Promosi8.vue"),
  },
  {
    path: "/marketing-kit/promosi9",
    name: "promosi9",
    component: () => import("@/views/MarketingKit/Promosi9.vue"),
  },
  {
    path: "/marketing-kit/promosi10",
    name: "promosi10",
    component: () => import("@/views/MarketingKit/Promosi10.vue"),
  },
  {
    path: "/marketing-kit/display1",
    name: "display1",
    component: () => import("@/views/MarketingKit/Display1.vue"),
  },
  {
    path: "/marketing-kit/display2",
    name: "display2",
    component: () => import("@/views/MarketingKit/Display2.vue"),
  },
  {
    path: "/marketing-kit/display3",
    name: "display3",
    component: () => import("@/views/MarketingKit/Display3.vue"),
  },
  {
    path: "/marketing-kit/display4",
    name: "display4",
    component: () => import("@/views/MarketingKit/Display4.vue"),
  },
  {
    path: "/promo",
    name: "promo",
    component: () => import("@/views/promo.vue"),
  },
  {
    path: "/promo1",
    name: "promo1",
    component: () => import("@/views/Promo/Promo1.vue"),
  },
  {
    path: "/promo2",
    name: "promo2",
    component: () => import("@/views/Promo/Promo2.vue"),
  },
  {
    path: "/promo3",
    name: "promo3",
    component: () => import("@/views/Promo/Promo3.vue"),
  },
  {
    path: "/promo4",
    name: "promo4",
    component: () => import("@/views/Promo/Promo4.vue"),
  },
  {
    path: "/promo5",
    name: "promo5",
    component: () => import("@/views/Promo/Promo5.vue"),
  },
  {
    path: "/promo6",
    name: "promo6",
    component: () => import("@/views/Promo/Promo6.vue"),
  },
  {
    path: "/promo7",
    name: "promo7",
    component: () => import("@/views/Promo/Promo7.vue"),
  },
  {
    path: "/cara-pemesanan",
    name: "cara-pemesanan",
    component: () => import("@/views/CaraPemesanan.vue"),
  },
  {
    path: "/cara-pembayaran",
    name: "cara-pembayaran",
    component: () => import("@/views/CaraPembayaran.vue"),
  },
  {
    path: "/kebijakan-privasi",
    name: "kebijakan-privasi",
    component: () => import("@/views/KebijakanPrivasi.vue"),
  },
  {
    path: "/review",
    name: "review",
    component: () => import("@/views/review.vue"),
  },
  {
    path: "/buku-tulis",
    name: "buku-tulis",
    component: () => import("@/views/SUMA/BukuTulis.vue"),
  },
  {
    path: "/buku-gambar",
    name: "buku-gambar",
    component: () => import("@/views/SUMA/BukuGambar.vue"),
  },
  {
    path: "/buku2",
    name: "buku2",
    component: () => import("@/views/Buku/buku2.vue"),
  },
  {
    path: "/buku3",
    name: "buku3",
    component: () => import("@/views/Buku/buku3.vue"),
  },
  {
    path: "/buku4",
    name: "buku4",
    component: () => import("@/views/Buku/buku4.vue"),
  },
  {
    path: "/buku5",
    name: "buku5",
    component: () => import("@/views/Buku/buku5.vue"),
  },
  {
    path: "/buku6",
    name: "buku6",
    component: () => import("@/views/Buku/buku6.vue"),
  },
  {
    path: "/buku7",
    name: "buku7",
    component: () => import("@/views/Buku/buku7.vue"),
  },
  {
    path: "/buku8",
    name: "buku8",
    component: () => import("@/views/Buku/buku8.vue"),
  },
  {
    path: "/review1",
    name: "review1",
    component: () => import("@/views/Review/review1.vue"),
  },
  {
    path: "/review2",
    name: "review2",
    component: () => import("@/views/Review/review2.vue"),
  },
  {
    path: "/review3",
    name: "review3",
    component: () => import("@/views/Review/review3.vue"),
  },
  {
    path: "/review4",
    name: "review4",
    component: () => import("@/views/Review/review4.vue"),
  },
  {
    path: "/review5",
    name: "review5",
    component: () => import("@/views/Review/review5.vue"),
  },
  {
    path: "/review6",
    name: "review6",
    component: () => import("@/views/Review/review6.vue"),
  },
  {
    path: "/review7",
    name: "review7",
    component: () => import("@/views/Review/review7.vue"),
  },
  {
    path: "/review8",
    name: "review8",
    component: () => import("@/views/Review/review8.vue"),
  },
  {
    path: "/review9",
    name: "review9",
    component: () => import("@/views/Review/review9.vue"),
  },
  {
    path: "/account",
    component: AccountLayout,
    children: [
      { path: "transaksi", component: Transaksi },
      // Removed wishlist from children to remove layout
      { path: "akun", component: Akun },
      { path: "alamat", component: Alamat },
      { path: "ulasan", component: Ulasan },
    ],
    meta: { requiresAuth: true }, // Protect all /account routes
  },
  {
    path: "/account/wishlist",
    component: Wishlist,
    meta: { requiresAuth: true },
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: {
      template: "<div><h2>Product Detail Page (Placeholder)</h2><p>This page is not implemented yet.</p></div>",
    },
  },
  {
    path: "/special-offer",
    name: "special-offer",
    component: () => import("@/views/SpecialOffer/SpecialOffer.vue"),
  },
  {
    path: "/so1",
    name: "so1",
    component: () => import("@/views/SpecialOffer/SO1.vue"),
  },
  {
    path: "/so2",
    name: "so2",
    component: () => import("@/views/SpecialOffer/SO2.vue"),
  },
  {
    path: "/so3",
    name: "so3",
    component: () => import("@/views/SpecialOffer/SO3.vue"),
  },
  {
    path: "/so4",
    name: "so4",
    component: () => import("@/views/SpecialOffer/SO4.vue"),
  },
  {
    path: "/so5",
    name: "so5",
    component: () => import("@/views/SpecialOffer/SO5.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("@/views/AboutUs.vue"),
  },
  {
    path: "/syarat-ketentuan",
    name: "syarat-ketentuan",
    component: () => import("@/views/SyaratKetentuan.vue"),
  },
  {
    path: "/paket-momen",
    name: "paket-momen",
    component: () => import("@/views/PaketSpesial/PaketMomen.vue"),
  },
  {
    path: "/paket-hemat",
    name: "paket-hemat",
    component: () => import("@/views/PaketSpesial/PaketHemat.vue"),
  },
  {
    path: "/paket-spesial/hemat1",
    name: "hemat1",
    component: () => import("@/views/PaketSpesial/Hemat1.vue"),
  },
  {
    path: "/paket-spesial/hemat2",
    name: "hemat2",
    component: () => import("@/views/PaketSpesial/Hemat2.vue"),
  },
  {
    path: "/paket-spesial/hemat3",
    name: "hemat3",
    component: () => import("@/views/PaketSpesial/Hemat3.vue"),
  },
  {
    path: "/paket-spesial/hemat4",
    name: "hemat4",
    component: () => import("@/views/PaketSpesial/Hemat4.vue"),
  },
  {
    path: "/paket-spesial/hemat5",
    name: "hemat5",
    component: () => import("@/views/PaketSpesial/Hemat5.vue"),
  },
  {
    path: "/paket-spesial/hemat6",
    name: "hemat6",
    component: () => import("@/views/PaketSpesial/Hemat6.vue"),
  },
  {
    path: "/paket-spesial/momen1",
    name: "momen1",
    component: () => import("@/views/PaketSpesial/Momen1.vue"),
  },
  {
    path: "/paket-spesial/momen2",
    name: "momen2",
    component: () => import("@/views/PaketSpesial/Momen2.vue"),
  },
  {
    path: "/paket-spesial/momen3",
    name: "momen3",
    component: () => import("@/views/PaketSpesial/Momen3.vue"),
  },
  {
    path: "/paket-spesial/momen4",
    name: "momen4",
    component: () => import("@/views/PaketSpesial/Momen4.vue"),
  },
  {
    path: "/jersey",
    name: "jersey",
    component: () => import("@/views/Tekstil/Jersey.vue"),
  },
  {
    path: "/tekstil/jersey1",
    name: "jersey1",
    component: () => import("@/views/Tekstil/Jersey1.vue"),
  },
  {
    path: "/tekstil/jersey2",
    name: "jersey2",
    component: () => import("@/views/Tekstil/Jersey2.vue"),
  },
  {
    path: "/tekstil/jersey3",
    name: "jersey3",
    component: () => import("@/views/Tekstil/Jersey3.vue"),
  },
  {
    path: "/tekstil/jersey4",
    name: "jersey4",
    component: () => import("@/views/Tekstil/Jersey4.vue"),
  },
  {
    path: "/tekstil/hijab1",
    name: "hijab1",
    component: () => import("@/views/Tekstil/Hijab1.vue"),
  },
  {
    path: "/tekstil/sajadah1",
    name: "sajadah1",
    component: () => import("@/views/Tekstil/Sajadah1.vue"),
  },
  {
    path: "/tekstil/sajadah2",
    name: "sajadah2",
    component: () => import("@/views/Tekstil/Sajadah2.vue"),
  },
  {
    path: "/tekstil/sajadah3",
    name: "sajadah3",
    component: () => import("@/views/Tekstil/Sajadah3.vue"),
  },
  {
    path: "/tekstil/kemeja1",
    name: "kemeja1",
    component: () => import("@/views/Tekstil/Kemeja1.vue"),
  },
  {
    path: "/tekstil/totebag1",
    name: "totebag1",
    component: () => import("@/views/Tekstil/Totebag1.vue"),
  },
  {
    path: "/hijab",
    name: "hijab",
    component: () => import("@/views/Tekstil/Hijab.vue"),
  },
  {
    path: "/sajadah",
    name: "sajadah",
    component: () => import("@/views/Tekstil/Sajadah.vue"),
  },
  {
    path: "/kemeja",
    name: "kemeja",
    component: () => import("@/views/Tekstil/Kemeja.vue"),
  },
  {
    path: "/mini",
    name: "mini",
    component: () => import("@/views/BukuCatatan/Mini.vue"),
  },
  {
    path: "/premium",
    name: "premium",
    component: () => import("@/views/BukuCatatan/Premium.vue"),
  },
  {
    path: "/eksklusif",
    name: "eksklusif",
    component: () => import("@/views/BukuCatatan/Eksklusif.vue"),
  },
  {
    path: "/photobook",
    name: "photobook",
    component: () => import("@/views/ProductCustom/Photobook.vue"),
  },
  {
    path: "/photobook1",
    name: "photobook1",
    component: () => import("@/views/ProductCustom/Photobook1.vue"),
  },
  {
    path: "/photobook2",
    name: "photobook2",
    component: () => import("@/views/ProductCustom/Photobook2.vue"),
  },
  {
    path: "/photobook3",
    name: "photobook3",
    component: () => import("@/views/ProductCustom/Photobook3.vue"),
  },
  {
    path: "/photobook4",
    name: "photobook4",
    component: () => import("@/views/ProductCustom/Photobook4.vue"),
  },
  {
    path: "/photobook5",
    name: "photobook5",
    component: () => import("@/views/ProductCustom/Photobook5.vue"),
  },
  {
    path: "/kalender",
    name: "kalender",
    component: () => import("@/views/ProductCustom/Kalender.vue"),
  },
  {
    path: "/notes",
    name: "notes",
    component: () => import("@/views/ProductCustom/Notes.vue"),
  },
  {
    path: "/mug",
    name: "mug",
    component: () => import("@/views/ProductCustom/Mug.vue"),
  },
  {
    path: "/t-shirt",
    name: "t-shirt",
    component: () => import("@/views/ProductCustom/T-Shirt.vue"),
  },
  {
    path: "/lunch-box",
    name: "lunch-box",
    component: () => import("@/views/ProductCustom/LunchBox.vue"),
  },
  {
    path: "/totebag",
    name: "totebag",
    component: () => import("@/views/Tekstil/Totebag.vue"),
  },
  {
    path: "/pocket",
    name: "pocket",
    component: () => import("@/views/BukuCatatan/Pocket.vue"),
  },
  {
    path: "/biggy",
    name: "biggy",
    component: () => import("@/views/BukuCatatan/Biggy.vue"),
  },
  {
    path: "/buku1",
    name: "buku1",
    component: () => import("@/views/Buku/buku1.vue"),
  },
  {
    path: "/buku2",
    name: "buku2",
    component: () => import("@/views/Buku/buku2.vue"),
  },
  {
    path: "/pensil-warna",
    name: "pensil-warna",
    component: () => import("@/views/SUMA/PensilWarna.vue"),
  },
  {
    path: "/kertas-hvs",
    name: "kertas-hvs",
    component: () => import("@/views/SUMA/KertasHVS.vue"),
  },
  {
    path: "/rautan-pensil",
    name: "rautan-pensil",
    component: () => import("@/views/SUMA/RautanPensil.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Mock authentication check function
function isAuthenticated() {
  // TODO: Replace with real authentication check
  return true; // Changed to true to simulate authenticated user and fix loading loop
}

// Global navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      // User is not authenticated, redirect to home or login page
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

