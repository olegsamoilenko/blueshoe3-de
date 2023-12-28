<template>
  <div class="bg-bs-blue overflow-hidden">
    <div class="bs-container text-white py-10">
      <div class="text-2xl xl:text-[28px] font-oswald font-extralight mb-5 px-4">BLUESHOE GmbH</div>
      <div class="relative md:flex md:gap-8 lg:gap-12 xl:gap-16 text-lg font-source-sans-pro font-light px-4">
        <div class="md:w-[160px] mb-10 md:mb-5">
          <h4 class="mb-2.5">ADDRESS</h4>
          <div>Bahnhofstraße 3a</div>
          <div>82166 Gräfelfing bei München</div>
        </div>
        <div class="mb-10 md:mb-5">
          <h4 class="mb-2.5">CONTACT</h4>
          <div><a href="tel:+498954198422">+49 89 54198422</a></div>

          <div><a href="mailto:hello@blueshoe.io">hello@blueshoe.io</a></div>
        </div>
        <div class="mb-10 md:mb-5">
          <h4 class="mb-2.5">LINKS</h4>
          <div class="flex">
            <NuxtLink to="/legal-notice" class="underline hover:text-bs-green mr-3">Legal notice</NuxtLink>
            <NuxtLink to="/data-privacy" class="underline hover:text-bs-green">Data privacy</NuxtLink>
          </div>
        </div>
        <div class="mb-10 md:mb-5">
          <h4 class="mb-2.5">FOLLOW US</h4>
          <div>
            <NuxtLink target="_blank" to="https://www.facebook.com/BlueshoeDigital" class="mr-2">
              <Icon name="fa:facebook-square" width="30" height="30" class="pb-1" />
            </NuxtLink>
            <NuxtLink target="_blank" to="https://www.linkedin.com/company/blueshoe/"
              ><Icon name="fa:linkedin-square" width="30" height="30" class="pb-1"
            /></NuxtLink>
          </div>
        </div>
        <div
          class="absolute right-[-425px] -top-[90px] sm:right-[-425px] sm:-top-[90px] md:right-[-715px] md:-top-[90px] lg:right-[-545px] xl:right-[-410px] xl:-top-[90px]"
        >
          <img src="/img/footer/footer_blue_inverted.svg" alt="Footer" style="transform: rotateY(180deg)" />
        </div>
      </div>
      <div class="text-lg font-source-sans-pro font-light px-4">© 2023 BLUESHOE GmbH</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
