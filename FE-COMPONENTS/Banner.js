const bannersDesktop = [
  { src: "/FE-IMAGES/banner_one.jpg" },
];

const bannersMobile = [
  { src: "/FE-IMAGES/banner_one_mobile.png" },
];

let currentIndex = 0;

function updateBannerImage() {
  const banner = document.getElementById("banner1");
  const isMobile = window.innerWidth <= 1150;

  const banners = isMobile ? bannersMobile : bannersDesktop;
  banner.src = banners[currentIndex].src;
}

function nextBanner() {
  const banners = window.innerWidth <= 1150 ? bannersMobile : bannersDesktop;
  currentIndex = (currentIndex + 1) % banners.length;
  updateBannerImage();
}

// Configura navegação automática
setInterval(nextBanner, 10000); // Troca a cada 10 segundos

// Eventos de carregamento e redimensionamento
window.addEventListener("load", updateBannerImage);
window.addEventListener("resize", updateBannerImage);
