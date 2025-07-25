// 可調整的參數：
// 將下面的變數替換為您實際的連結與錢包地址。
const saleLink = 'https://www.sandbox.game/en/map/?x=-52&y=-152';
const bitcoinAddress = '1M9V3rkE5p6JJANef4zN8xQw4RRk7WBhXd';
const ethereumAddress = '0x70748709bCbD10c020392beb48098D253a24ccAc';

document.addEventListener('DOMContentLoaded', () => {
  // 更新購買按鈕連結
  const purchaseLinkEl = document.getElementById('purchaseLink');
  if (saleLink && saleLink !== '#') {
    purchaseLinkEl.href = saleLink;
  }

  // 更新比特幣地址
  const btcDisplay = document.getElementById('btcDisplay');
  const btcButton = document.getElementById('btcButton');
  if (bitcoinAddress && bitcoinAddress.trim() !== '') {
    btcDisplay.textContent = bitcoinAddress;
    btcButton.href = 'bitcoin:' + bitcoinAddress;
    btcButton.onclick = () => true;
  }

  // 更新以太幣地址
  const ethDisplay = document.getElementById('ethDisplay');
  const ethButton = document.getElementById('ethButton');
  if (ethereumAddress && ethereumAddress.trim() !== '') {
    ethDisplay.textContent = ethereumAddress;
    ethButton.href = 'ethereum:' + ethereumAddress;
    ethButton.onclick = () => true;
  }

  // IntersectionObserver 用於顯示動畫
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  reveals.forEach((section) => {
    observer.observe(section);
  });
});