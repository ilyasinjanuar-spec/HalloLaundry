const WA_NUMBER = "6285765363475";

const rupiah = (value) => new Intl.NumberFormat("id-ID", {
  style: "currency", currency: "IDR", maximumFractionDigits: 0
}).format(value);

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Kalkulator biaya reguler
const calcService = document.getElementById("calcService");
const calcWeight = document.getElementById("calcWeight");
const calcTotal = document.getElementById("calcTotal");

function calculateLaundry() {
  const rate = Number(calcService.value);
  const weight = Math.max(0, Number(calcWeight.value) || 0);
  calcTotal.textContent = rupiah(rate * weight);
  return { rate, weight, total: rate * weight };
}

calcService.addEventListener("change", calculateLaundry);
calcWeight.addEventListener("input", calculateLaundry);

document.getElementById("calcOrder").addEventListener("click", () => {
  const result = calculateLaundry();
  if (result.weight <= 0) {
    alert("Masukkan perkiraan berat pakaian terlebih dahulu.");
    calcWeight.focus();
    return;
  }
  const serviceName = calcService.options[calcService.selectedIndex].text.split(" — ")[0];
  const message = `Halo HALLO LAUNDRY, saya ingin memesan laundry.\n\nLayanan: ${serviceName}\nPerkiraan berat: ${result.weight} kg\nEstimasi biaya: ${rupiah(result.total)}\n\nMohon konfirmasi pesanan saya. Terima kasih.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

// Isi otomatis layanan dari kartu layanan
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const serviceSelect = document.getElementById("orderService");
    serviceSelect.value = link.dataset.service;
  });
});

// Tanggal tidak boleh memilih tanggal yang sudah lewat
const orderDate = document.getElementById("orderDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split("T")[0];
orderDate.min = localToday;

// Form pemesanan ke WhatsApp
document.getElementById("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("orderService").value;
  const weight = document.getElementById("orderWeight").value.trim();
  const date = document.getElementById("orderDate").value;
  const address = document.getElementById("customerAddress").value.trim();
  const notes = document.getElementById("orderNotes").value.trim();

  if (!name || !service) {
    alert("Mohon isi nama dan pilih layanan terlebih dahulu.");
    return;
  }

  const message = [
    "Halo HALLO LAUNDRY, saya ingin melakukan pemesanan.",
    "",
    `Nama: ${name}`,
    `Nomor HP: ${phone || "-"}`,
    `Layanan: ${service}`,
    `Perkiraan berat: ${weight ? weight + " kg" : "Belum diketahui"}`,
    `Tanggal diinginkan: ${date || "Mohon konfirmasi"}`,
    `Alamat / area: ${address || "Mohon konfirmasi"}`,
    `Catatan: ${notes || "-"}`,
    "",
    "Mohon konfirmasi pesanan dan informasi selanjutnya. Terima kasih."
  ].join("\n");

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

calculateLaundry();
