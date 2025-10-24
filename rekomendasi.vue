<template>
  <div class="toko-suma-blog-container">
    <AppHeader />
    <div class="content-wrapper">
      <CustomSidebar @sidebar-toggle="handleSidebarToggle" />
      
      <div class="toko-suma-blog-page">
        <h3 class="page-title">Rekomendasi Buku Terbaik untuk anda</h3>

        <section class="blog-list">
          <div
            class="blog-card"
            v-for="blog in blogs"
            :key="blog.id"
            @click="navigateTo(blog.path)"
          >
            <img :src="blog.image" :alt="blog.title" class="blog-image" loading="lazy" />
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
  name: "Rekomendasi",
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
          title: "Atomic Habits: Ubah Hidupmu dengan Perubahan 1% Setiap Hari",
          excerpt: "ika Anda merasa stuck, mudah menyerah, atau ingin hidup lebih teratur tanpa stres, buku ini adalah investasi terbaik yang bisa Anda baca tahun ini.",
          date: "28 Jul 2025",
          image: "https://assets.telkomsel.com/public/2024-10/buku%20atomic%20habits.png",
          path: "/buku1",
        },
        {
          id: 2,
          title: "Laut Bercerita: Jeritan yang Tak Pernah Padam dari Masa Lalu",
          excerpt: "Membaca buku ini adalah bentuk kecil dari penghormatan terhadap mereka yang hilang — dan mereka yang tak pernah berhenti mencari.",
          date: "28 Jul 2025",
          image: "https://i0.wp.com/dimensipers.com/wp-content/uploads/2022/05/laut-bercerita-1.jpg?",
          path: "/buku2",
        },
        {
          id: 3,
          title: "Man's Search for Meaning - Viktor E. Frankl",
          excerpt: "Buku ini adalah pengingat bahwa makna hidup bukan sesuatu yang kita temukan secara kebetulan, tetapi sesuatu yang kita bangun melalui sikap, penderitaan, dan keberanian untuk tetap hidup, bahkan saat semua terasa hilang.",
          date: "28 Jul 2025",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-r-CG3810kaJi-8JKI7PoPWy1bSIJHeykJQ&s",
          path: "/buku3",
        },
        {
          id: 4,
          title: "Sapiens: A Brief History of Humankind",
          excerpt: "Sapiens menyampaikan bahwa perjalanan manusia dari makhluk biasa menjadi penguasa dunia terjadi bukan karena kekuatan fisik, tetapi karena kemampuan unik Homo sapiens untuk berimajinasi dan bekerja sama dalam jumlah besar melalui mitos kolektif.",
          date: "28 Jul 2025",
          image: "https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png",
          path: "/buku4",
        },
        {
          id: 5,
          title: "Filosofi Teras - Henry Manampiring",
          excerpt: "Filosofi Teras adalah buku reflektif dan membumi yang membantu pembaca menjadi lebih tangguh secara mental tanpa harus menjadi ahli filsafat. Wajib dibaca siapa pun yang ingin belajar tenang menghadapi kehidupan yang kompleks",
          date: "28 Jul 2025",
          image: "https://assets.telkomsel.com/public/2024-03/14%20%282%29.png",
          path: "/buku5",
        },
        {
          id: 6,
          title: "The Righteous Mind - Jonathan Haidt",
          excerpt: "Buku ini sangat relevan di zaman yang penuh polarisasi seperti sekarang. Membaca *The Righteous Mind* akan membuka wawasan tentang bagaimana cara berpikir orang lain — bukan untuk menyetujui, tetapi untuk memahami",
          date: "28 Jul 2025",
          image: "https://cdn.nextbigideaclub.com/wp-content/uploads/2022/02/03160700/the-righteous-mind-classic_book-bite_1080x608.jpg",
          path: "/buku6",
        },
        {
          id: 7,
          title: "Thinking, Fast and Slow - Daniel Kahneman",
          excerpt: "Thinking, Fast and Slow adalah buku yang menantang cara pikir kita sendiri. Walaupun padat dan serius, isinya luar biasa membuka mata — sebuah bacaan wajib bagi siapa pun yang ingin memahami perilaku manusia, memperbaiki pengambilan keputusan, dan menghindari kesalahan berpikir.",
          date: "28 Jul 2025",
          image: "https://www.jadipunya.id/wp-content/uploads/2021/01/thinking-fast-and-slow-book.jpg",
          path: "/buku7",
        },
        {
          id: 8,
          title: "Educated - Tara Westover",
          excerpt: "Educated adalah memoar yang luar biasa kuat, yang mengajarkan bahwa pendidikan bukan tentang sekolah semata, tapi tentang hak untuk berpikir dan menentukan hidup sendiri.",
          date: "28 Jul 2025",
          image: "https://media.karousell.com/media/photos/products/2023/6/9/buku_original_educated_tara_we_1686302562_50252383_progressive.jpg",
          path: "/buku8",
        }
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
