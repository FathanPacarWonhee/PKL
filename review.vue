<template>
  <div class="toko-suma-blog-container">
    <AppHeader />
    <div class="content-wrapper">
      <CustomSidebar @sidebar-toggle="handleSidebarToggle" />
      
      <div class="toko-suma-blog-page">
        <h3 class="page-title">Review Produk</h3>

        <section class="blog-list">
          <div
            class="blog-card"
            v-for="blog in blogs"
            :key="blog.id"
            @click="navigateTo(blog.path)"
          >
            <img 
              :src="blog.image" 
              :alt="blog.title" 
              class="blog-image" 
              loading="lazy"
            />
            <div class="blog-content">
              <h3 class="blog-title">{{ blog.title }}</h3>
              <p class="blog-excerpt">{{ blog.excerpt }}</p>
              <div class="blog-meta">
                <span class="blog-date">{{ blog.date }}</span>
                <span class="read-more">Baca Selengkapnya &rarr;</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import CustomSidebar from "@/components/CustomSidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Review",
  components: {
    AppHeader,
    CustomSidebar,
    Footer,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Review Pensil Warna Suma",
          excerpt: "salah satu produk unggulan dari brand lokal Tokosuma",
          date: "28 Jul 2025",
          image: "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m4pfsdasv58a71",
          path: "/review1",
        },
        {
          id: 2,
          title: "Review Kartu Custom",
          excerpt: "Custom Kartu Sesuai Keinginan anda",
          date: "28 Jul 2025",
          image: "https://tokosuma.co.id/toko-suma/storage/app/public/thumbnail/02092021160002-65481.jpeg",
          path: "/review2",
        },
        {
          id: 3,
          title: "Review Buku Majalah Suma",
          excerpt: "Buku Majalah tentang Suma",
          date: "28 Jul 2025",
          image: "https://tokosuma.co.id/toko-suma/storage/app/public/thumbnail/10112021164807-61993.jpeg",
          path: "/review3",
        },
        {
          id: 4,
          title: "Review Buku Tulis Campus",
          excerpt: "Buku Tulis untuk siswa SMP-SMA-SMK-Kuliah",
          date: "28 Jul 2025",
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-m7g7gl4arv34c7",
          path: "/review4",
        },
        {
          id: 5,
          title: "Review Product Custom",
          excerpt: "Gelas Gambar Kpop",
          date: "28 Jul 2025",
          image: "https://cf.shopee.co.id/file/id-11134207-7rbk8-m7hsdtxrb0v225",
          path: "/review5",
        },
        {
          id: 6,
          title: "Review Buku Tulis Suma",
          excerpt: "Buku Tulis untuk anak anak belajar di sekolah",
          date: "28 Jul 2025",
          image: "https://tokosuma.co.id/toko-suma/storage/app/public/thumbnail/29062022094434-44406.jpeg",
          path: "/review6",
        },
        {
          id: 7,
          title: "Review Product Custom",
          excerpt: "Kalender Meja Per 1-Bulan",
          date: "28 Jul 2025",
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rasd-m1mrg4pp9uu767",
          path: "/review7",
        },
        {
          id: 8,
          title: "Review Product Custom",
          excerpt: "Photobook Magazine (Hard Cover)",
          date: "28 Jul 2025",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Jv2kc8nf6lXqHjPWWMdLEGnnZobi4rACug&s",
          path: "/review8",
        },
        {
          id: 9,
          title: "Review Product Custom",
          excerpt: "Photobook Magazine (Soft Cover)",
          date: "28 Jul 2025",
          image: "https://tokosuma.co.id/toko-suma/storage/app/public/thumbnail/05022021095832-9561.jpg",
          path: "/review9",
        },
      ],
    };
  },
  methods: {
    navigateTo(path) {
      if (this.$router) {
        this.$router.push(path);
      } else {
        console.error("Router instance is not available.");
      }
    },
    handleSidebarToggle(isExpanded) {
      // Handle sidebar toggle if needed
    }
  },
};
</script>

<style scoped>
.toko-suma-blog-container {
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  color: #333;
  min-height: 100vh;
}

.content-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.toko-suma-blog-page {
  flex: 1;
  padding: 30px;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #222;
  margin: 0 0 30px 0;
  text-align: center;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #e85423;
  border-radius: 2px;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 20px;
}

.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #f0f0f0;
  width: 100%; /* Ensure cards take full width */
}

.blog-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  border-color: #e0e0e0;
}

.blog-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.blog-content {
  padding: 25px;
}

.blog-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #222;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-excerpt {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  padding-top: 15px;
  border-top: 1px solid #f5f5f5;
}

.read-more {
  color: #e85423;
  font-weight: 600;
  transition: color 0.2s ease;
}

.read-more:hover {
  color: #d43f1a;
}

/* Override CustomSidebar positioning */
:deep(.sidebar-toggle) {
  position: fixed !important;
  top: 85px !important;
  left: 20px !important;
  z-index: 1000;
}

:deep(.custom-sidebar) {
  position: fixed !important;
  top: 0 !important;
  left: -300px !important;
  height: 100vh !important;
  z-index: 1001 !important;
}

:deep(.custom-sidebar.sidebar-open) {
  left: 0 !important;
}

/* Responsive design */
@media (max-width: 1024px) {
  .toko-suma-blog-page {
    padding: 30px 40px;
  }
  
  .blog-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .toko-suma-blog-page {
    padding: 20px;
  }
  
  .page-title {
    font-size: 24px;
  }
  
  .blog-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .blog-content {
    padding: 20px;
  }
  
  .blog-title {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .toko-suma-blog-page {
    padding: 15px;
  }
  
  .page-title {
    font-size: 22px;
  }
}
</style>
