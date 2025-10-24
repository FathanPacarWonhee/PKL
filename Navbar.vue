<template>
  <div class="mt-4 flex items-center" style="margin-bottom: 4px;">
    <div class="w-2/12">
      <LogoTokosuma />
    </div>
    <div class="flex w-7/12 flex-grow items-center">
      <div class="mx-auto flex w-10/12 items-center space-x-4">
        <button
          class="relative inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none [&:not(.button--loading)]:disabled:opacity-50 bg-white border border-transparent text-neutral-700 [.dweb_&]:hover:bg-neutral-50 [.dweb_&]:hover:text-neutral-700 active:bg-neutral-50 active:text-neutral-600 [&:not(.button--loading)]:disabled:bg-white [&:not(.button--loading)]:disabled:text-neutral-200 py-3 px-4 text-s-extrabold rounded-s navbar-category-trigger"
          data-testid="navbarCategory"
        >
          <div>
            <div class="flex cursor-pointer items-center space-x-2">
              <div style="will-change: auto; transform: none;">
                <svg
                  fill="currentColor"
                  class="___12fm75w f1w7gpdv fez10in fg4l7m0"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span class="text-s-extrabold">Kategori</span>
            </div>
          </div>
        </button>
        <div class="w-full" data-sentry-component="NavbarSearchBox">
          <form>
            <div class="relative flex-grow">
              <input
                type="text"
                class="SearchInput_input__hmS0W bg-background flex w-full rounded-infinity border border-neutral-200 py-2 text-s-medium placeholder:text-neutral-200 focus:border-neutral-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-50 disabled:bg-neutral-50 disabled:text-neutral-200 disabled:opacity-50 [.dweb_&]:hover:border-neutral-700 h-10 px-10 flex-grow"
                maxlength="50"
                placeholder="Cari Produk, Judul Buku, atau Penulis"
                data-testid="navbarSearchBox"
                value=""
              />
              <div
                class="SearchInput_icon___DB0Z align-center absolute left-0 top-0 flex h-full items-center pl-4"
              >
                <svg
                  fill="currentColor"
                  class="___12fm75w f1w7gpdv fez10in fg4l7m0"
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  style="font-size: 20px;"
                >
                  <path
                    d="M8.5 3a5.5 5.5 0 0 1 4.38 8.82l4.15 4.15a.75.75 0 0 1-.98 1.13l-.08-.07-4.15-4.15A5.5 5.5 0 1 1 8.5 3Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </form> 
        </div>
        <div
          class="relative"
          data-sentry-component="NavbarCart"
        >
          <button
            class="flex items-center rounded-infinity outline-none disabled:pointer-events-none bg-white border border-transparent [.dweb_&]:enabled:hover:bg-neutral-50 active:bg-neutral-50 w-9 h-9"
            aria-label="Navbar Cart"
            data-testid="navbarCart"
          >
            <svg
              class="flex-grow text-neutral-700 ___12fm75w f1w7gpdv fez10in fg4l7m0"
              fill="currentColor"
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style="font-size: 24px;"
            >
              <path
                d="M2.5 4.25c0-.41.34-.75.75-.75h.56c.95 0 1.52.64 1.84 1.23.22.4.38.86.5 1.27h12.6c.83 0 1.43.8 1.2 1.6L18.12 14a2.75 2.75 0 0 1-2.64 2H9.53a2.75 2.75 0 0 1-2.65-2.02l-.76-2.78-1.26-4.24v-.01c-.16-.57-.3-1.1-.52-1.5C4.13 5.07 3.96 5 3.8 5h-.56a.75.75 0 0 1-.75-.75Zm5.07 6.59.75 2.74c.15.54.65.92 1.21.92h5.95c.56 0 1.05-.37 1.2-.9l1.74-6.1H6.59l.97 3.29.01.05ZM11 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm8.5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1.5 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex w-2/12" data-sentry-component="NavbarAccount">
      <div
        data-id="navbarAccountUser"
        class="relative ml-auto"
        data-sentry-component="NavbarAccountUser"
      >
        <button
          @click="onProfileClick"
          class="relative inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none [&:not(.button--loading)]:disabled:opacity-50 bg-white border border-transparent text-neutral-700 [.dweb_&]:hover:bg-neutral-50 [.dweb_&]:hover:text-neutral-700 active:bg-neutral-50 active:text-neutral-600 [&:not(.button--loading)]:disabled:bg-white [&:not(.button--loading)]:disabled:text-neutral-200 py-2 px-3 text-xs-extrabold rounded-xs"
          data-testid="navbarAccountTrigger"
        >
          <div>
            <div class="flex items-center space-x-2">
              <div>
                <img
                  alt="User Avatar"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  class="max-h-[24px] min-h-[24px] min-w-[24px] max-w-[24px] rounded-infinity object-cover"
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://static.gramedia.net/_next/static/media/profile-fallback.3ee63b8b.png"
                  style="color: transparent;"
                />
              </div>
              <div style="will-change: auto; transform: none;">
                <svg
                  fill="currentColor"
                  class="___12fm75w f1w7gpdv fez10in fg4l7m0"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div
          v-if="showAccountMenu"
          @click.outside="closeAccountMenu"
          class="absolute right-0 top-full mt-2 w-64 rounded-md border border-neutral-200 bg-white shadow-lg z-50"
        >
          <div class="p-4 border-b border-neutral-200">
            <div class="flex items-center space-x-3">
              <img
                alt="User Avatar"
                loading="lazy"
                width="40"
                height="40"
                decoding="async"
                class="rounded-full object-cover"
                src="https://image.gramedia.net/rs:fit:0:0/plain/https://static.gramedia.net/_next/static/media/profile-fallback.3ee63b8b.png"
              />
              <div>
                <p class="text-sm font-bold">Fathan Atthalah</p>
                <p class="text-xs text-neutral-500">ibusyariatun@gmail.com</p>
              </div>
            </div>
            <div class="mt-3 flex items-center space-x-2">
              <img
                alt="Points Icon"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                src="https://static.gramedia.net/_next/static/media/points-icon.png"
              />
              <div>
                <p class="text-xs font-bold">V65YIQ</p>
                <p class="text-xs text-neutral-500">0 Poin</p>
              </div>
            </div>
          </div>
          <ul class="divide-y divide-neutral-200 text-sm">
            <li>
              <a href="/account/Transaksi" class="block px-4 py-3 hover:bg-neutral-100">Transaksi</a>
            </li>
            <li>
              <a href="/account/Wishlist" class="block px-4 py-3 hover:bg-neutral-100">Wishlist</a>
            </li>
            <li>
              <a href="/account/Akun" class="block px-4 py-3 hover:bg-neutral-100">Akun</a>
            </li>
            <li>
              <a href="/account/Ulasan" class="block px-4 py-3 hover:bg-neutral-100">Ulasan Produk</a>
            </li>
            <li>
              <a href="/logout" class="block px-4 py-3 hover:bg-neutral-100 flex items-center space-x-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-5 h-5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H3m6 6l-6-6 6-6"></path>
                </svg>
                <span>Keluar Akun</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showAccountMenu = ref(false)
const router = useRouter()

function toggleAccountMenu() {
  showAccountMenu.value = !showAccountMenu.value
}

function closeAccountMenu() {
  showAccountMenu.value = false
}

function goToHome() {
  console.log('goToHome function called')
  router.push('/home')
}

function onProfileClick() {
  console.log('Profile icon clicked')
  router.push('/home')
}
</script>
