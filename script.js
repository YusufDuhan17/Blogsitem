// 📌 Sayfa Yüklendiğinde Animasyonlu Geçiş Efekti
document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("h1"); // Sayfadaki <h1> başlığını seç
    if (header) {
        header.style.opacity = "0"; // İlk başta görünmez yap
        header.style.transition = "opacity 1.5s ease-in-out"; // Geçiş efekti ekle
        setTimeout(() => {
            header.style.opacity = "1"; // 1.5 saniye içinde görünür hale getir
        }, 300);
    }
});

// 📌 Mobil Menü Aç/Kapat (Eğer ilerde eklersemmm)
function toggleMenu() {
    let nav = document.querySelector("nav ul");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// 📌 İletişim Formunda Basit Doğrulama
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form"); // Formu seç
    if (form) {
        form.addEventListener("submit", function(event) {
            let name = document.getElementById("name").value.trim(); // Ad alanını kontrol et
            let email = document.getElementById("email").value.trim(); // E-posta alanını kontrol et
            let message = document.getElementById("message").value.trim(); // Mesaj alanını kontrol et
            
            if (name === "" || email === "" || message === "") {
                alert("Lütfen tüm alanları doldurun!"); // Eksik alan varsa uyarı ver
                event.preventDefault(); // Formun gönderilmesini engelle
            } else {
                alert("Mesajınız başarıyla gönderildi!"); // Başarılı mesajı göster
            }
        });
    }
});
