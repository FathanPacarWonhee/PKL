<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main-section">
        <div class="footer-logo-section">
          <img src="https://tokosuma.co.id/assets/images/layout-5/logo/suma.png" alt="TokoSuma Logo" class="footer-logo" />
          <p>
            Dapatkan Kemudahan Mencetak Untuk Semua Kebutuhan Produk Custom Anda,
            Bersiaplah, Menyaksikan Ide Anda Menjadi Kenyataan.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.gelora.tokosuma" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
              alt="Download TokoSuma di Google Play" 
              class="google-play-badge"
            />
          </a>
        </div>

        <div class="footer-column info-column">
          <h4>INFORMATION</h4>
          <ul>
            <li><router-link to="/about-us" class="active-link">About Us</router-link></li>
            <li><router-link to="/syarat-ketentuan">Syarat & Ketentuan</router-link></li>
            <li><router-link to="/cara-pemesanan">Cara Pemesanan</router-link></li>
            <li><router-link to="/cara-pembayaran">Cara Pembayaran</router-link></li>
            <li><router-link to="/account/akun">Akun</router-link></li>
            <li><router-link to="/kebijakan-privasi">Kebijakan Privasi</router-link></li>
          </ul>
        </div>
        
        <div class="footer-column contact-selector-column">
          <h4>CONTACT US</h4>
          <div class="contact-dropdown">
            <button @click="toggleDropdown" class="contact-button">
              {{ selectedLocation ? selectedLocation.city : 'Pilih Lokasi' }}
              <span class="dropdown-arrow" :class="{ 'rotated': isDropdownOpen }">▼</span>
            </button>
            <ul v-if="isDropdownOpen" class="dropdown-menu">
              <li v-for="(location, index) in locations" :key="index" @click="selectLocation(location)">
                {{ location.city }}
              </li>
            </ul>
          </div>
          <div v-if="selectedLocation" class="contact-detail-card">
            <h4>{{ selectedLocation.city }}</h4>
            <ul>
              <li>
                Office:
                <a :href="selectedLocation.mapLink" target="_blank" rel="noopener noreferrer" class="no-blue-link">
                  {{ selectedLocation.address }}
                </a>
              </li>
              <li>Call Us: {{ selectedLocation.call }}</li>
              <li>Whatsapp: {{ selectedLocation.whatsapp }}</li>
              <li>Email: {{ selectedLocation.email }}</li>
              <li>Jam Kerja: Senin - Jum'at: 8:00 - 16:00</li>
              <li>Sabtu: 8:00 - 13:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom-detail">
      <div class="footer-copyright">
        COPYRIGHT © 2025 TOKO SUMA
      </div>
      <div class="footer-follow-us">
        <span>FOLLOW US</span>
        <div class="social-icons">
          <a href="https://m.facebook.com/gapprint/shop/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-icon facebook">f</a>
          <a href="https://x.com/gapprint" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="social-icon twitter">
            <img src="https://img.freepik.com/vektor-gratis/logo-x-twitter-baru-2023-pada-vektor-latar-belakang-putih_1017-45422.jpg" alt="Twitter/X" class="twitter-icon" />
          </a>
          <a href="https://www.instagram.com/geloraprinting.id" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-icon instagram">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="instagram-icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isDropdownOpen: false,
      selectedLocation: null,
      locations: [
        {
          city: 'TokoSuma Jakarta',
          address: 'PT. Gelora Aksara Pratama Jl. H. Baping Raya No.100 Ciracas Jakarta-Timur, 13740 - Indonesia',
          mapLink: 'https://maps.google.com/?q=PT.+Gelora+Aksara+Pratama+Jl.+H.+Baping+Raya+No.100+Ciracas+Jakarta-Timur,+13740+-+Indonesia',
          call: '(021) 8710060 Ext 183',
          whatsapp: '0878 0168 1340',
          email: 'Tokosumaofficial@Gmail.com'
        },
        {
          city: 'TokoSuma Bandung',
          address: 'Pertokoan Nuansa Indah Blok R-3 & R-5, Jalan Ciparay, Kujangsari, Bandung Kidul, Kota Bandung 40287',
          mapLink: 'https://maps.google.com/?q=Pertokoan+Nuansa+Indah+Blok+R-3+%26+R-5,+Jalan+Ciparay,+Kujangsari,+Bandung+Kidul,+Kota+Bandung+40287',
          call: '(021) 8710060 Ext 183',
          whatsapp: '0878 0168 1340',
          email: 'Suma.bandung@Sumaindonesia.com'
        },
        {
          city: 'TokoSuma Yogyakarta',
          address: 'Jl. Babarsari No. 150, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta',
          mapLink: 'https://maps.google.com/?q=Jl.+Babarsari+No.+150,+Kledokan,+Caturtunggal,+Kec.+Depok,+Kabupaten+Sleman,+Yogyakarta',
          call: '(021) 8710060 Ext 183',
          whatsapp: '0878 0168 1340',
          email: 'Suma.yogyakarta@Sumaindonesia.com'
        },
        {
          city: 'TokoSuma Semarang',
          address: 'JL. Puspowarno Tengah, No.38, Salamanmoyo, Koia Semarang, Jawa Tengah 50149',
          mapLink: 'https://maps.google.com/?q=JL.+Puspowarno+Tengah,+No.38,+Salamanmoyo,+Koia+Semarang,+Jawa+Tengah+50149',
          call: '(021) 8710060 Ext 183',
          whatsapp: '0878 0168 1340',
          email: 'Suma.semarang@Sumaindonesia.com'
        },
        {
          city: 'TokoSuma Surabaya',
          address: 'JL Briglend Katamso No. 130/45, Kecamatan Waru, Kabupaten Sidoario, Provinsi Jawa Timur 61256',
          mapLink: 'https://maps.google.com/?q=JL+Briglend+Katamso+No.+130/45,+Kecamatan+Waru,+Kabupaten+Sidoario,+Provinsi+Jawa+Timur+61256',
          call: '(021) 8710060 Ext 183',
          whatsapp: '0878 0168 1340',
          email: 'Suma.surabaya@Sumaindonesia.com'
        },
        {
          city: 'TokoSuma Palembang',
          address: 'Jalan Demang Lebar Daun No. 269, Kelurahan Demang Lebar Daun, Kecamatan Ilir Barat I, Koia Palembang',
          mapLink: 'https://maps.google.com/?q=Jalan+Demang+Lebar+Daun+No.+269,+Kelurahan+Demang+Lebar+Daun,+Kecamatan+Ilir+Barat+I,+Koia+Palembang',
          call: '(021) 8710060 Ext 183',
          whatsapp: '0878 0168 1340',
          email: 'Suma.palembang@Sumaindonesia.com'
        },
        {
          city: 'TokoSuma Medan',
          address: 'Jl. Menteng VII No. 98C Medan Tenggara, Kec. Medan Denai, Kota Medan, Sumatera Utara 20228',
          mapLink: 'https://maps.google.com/?q=Jl.+Menteng+VII+No.+98C+Medan+Tenggara,+Kec.+Medan+Denai,+Kota+Medan,+Sumatera+Utara+20228',
          call: '(021) 8710060 Ext 183',
          whatsapp: '0878 0168 1340',
          email: 'Suma.medan@Sumaindonesia.com'
        }
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectLocation(location) {
      this.selectedLocation = location;
      this.isDropdownOpen = false;
    }
  },
  created() {
    this.selectedLocation = this.locations[0]; // Set default location to Jakarta
  }
};
</script>

<style scoped>
/* Import font Nunito dari Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap');

.footer {
  width: 100%;
  padding: 30px 40px;
  background-color: #fff !important;
  font-size: 14px;
  color: #666;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 100px;
  border-top: 1px solid #ddd;
  /* Menggunakan font Nunito untuk seluruh footer */
  font-family: 'Nunito', sans-serif;
}

.footer-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.footer-main-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
}

.footer-logo-section {
  flex: 1;
  max-width: 300px;
}

.footer-logo {
  width: 250px;
  height: auto;
  margin-bottom: 12px;
}

.footer-logo-section p {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  font-weight: 300;
}

.google-play-badge {
  width: 125px;
  height: auto;
  margin-top: 15px;
  display: block;
  transition: transform 0.3s ease;
}

.google-play-badge:hover {
  transform: scale(1.05);
}

.footer-column {
  flex: 1;
  min-width: 200px;
}

.footer-column h4 {
  font-weight: 700; /* Dibuat lebih tebal agar menonjol */
  font-size: 16px;
  margin-bottom: 12px;
  border-bottom: 2px solid #00aaff;
  padding-bottom: 4px;
  text-transform: uppercase;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #666;
}

.footer-column ul li {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
}

.footer-column ul li a {
  color: #666;
  text-decoration: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

/* New CSS for Contact Us Dropdown */
.contact-selector-column {
  position: relative;
}

.contact-dropdown {
  position: relative;
  width: 100%;
  max-width: 250px;
}

.contact-button {
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
  font-weight: 600; /* Sedikit lebih tebal */
}

.contact-button:hover {
  background-color: #e9e9e9;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.dropdown-menu li {
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: 400;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}

/* Contact Details Card */
.contact-detail-card {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
}

.contact-detail-card h4 {
  font-weight: 700;
  font-size: 18px;
  color: #000;
  margin-bottom: 15px;
  border-bottom: 2px solid #00aaff;
  padding-bottom: 5px;
}

.contact-detail-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-detail-card ul li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  font-weight: 400;
}

.no-blue-link {
  color: inherit;
  text-decoration: none;
}

.no-blue-link:hover {
  text-decoration: underline;
}

/* Updated styles for the bottom section */
.footer-bottom-detail {
  width: 100%;
  margin-top: 40px;
  color: #999;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.footer-copyright {
  font-size: 14px;
  color: #999;
  margin: 0;
  font-weight: 400;
}

.footer-follow-us {
  font-weight: 400;
  letter-spacing: 2px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 15px;
}

.footer-follow-us span {
  font-weight: 700;
}

.social-icons {
  display: inline-flex;
  gap: 15px;
}

.social-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ddd;
  color: #666;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  user-select: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  background-color: #00aaff;
  color: #fff;
}

.social-icon.facebook {
  background-color: #3b5998;
  color: #fff;
}

.social-icon.twitter {
  background-color: transparent;
  padding: 0;
  overflow: hidden;
}

.social-icon.instagram {
  background-color: transparent;
  padding: 0;
  overflow: hidden;
}

.twitter-icon,
.instagram-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .footer {
    padding: 20px;
    align-items: center;
  }

  .footer-main-section {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .footer-logo-section {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }

  .info-column, .contact-selector-column {
    min-width: 100%;
    align-items: center;
    text-align: center;
  }

  .footer-column h4 {
    margin: 10px auto;
    width: fit-content;
  }
  
  .contact-dropdown {
    width: 100%;
    max-width: 300px;
  }
  
  .footer-bottom-detail {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .footer-follow-us {
    flex-direction: column;
    gap: 10px;
  }
}
</style>