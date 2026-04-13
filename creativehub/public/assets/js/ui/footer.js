const footer = document.getElementById("site-footer");

fetch("/assets/js/data/footer.json")
    .then(res => res.json())
    .then(data => {
        footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-container">

          <!-- Marka -->
          <div class="footer-col">
            <h3 class="footer-title">${data.brand.name}</h3>
            <p class="footer-text">${data.brand.description}</p>
          </div>

          <!-- Bağlantılar -->
          <div class="footer-col">
            <h3 class="footer-title">Bağlantılar</h3>
            <ul class="footer-links">
              ${data.links.map(link => `
                <li><a href="${link.link}" aria-label="${link.text} sayfası">${link.text}</a></li>
              `).join("")}
            </ul>
          </div>

          <!-- İletişim -->
          <div class="footer-col">
            <h3 class="footer-title">İletişim</h3>
            <ul class="footer-contact">
              ${data.contact.adres ? `<li><span>Adres:</span> ${data.contact.adres}</li>` : ""}
              ${data.contact.telefon ? `<li><span>Telefon:</span> ${data.contact.telefon}</li>` : ""}
              ${data.contact.email ? `<li><span>E-posta:</span> <a href="mailto:${data.contact.email}" class="footer-mail" aria-label="E-posta gönder: ${data.contact.email}">${data.contact.email}</a></li>` : ""}
            </ul>
          </div>

        </div>

        <!-- Alt kısım -->
        <div class="footer-bottom">
          <p>${data.bottom.copyright}</p>
          <p class="footer-made-by">
            Made by 
            <a href="${data.bottom.author.link}" target="_blank" rel="noopener noreferrer" aria-label="${data.bottom.author.name} LinkedIn profili">
              <strong>${data.bottom.author.name}</strong>
            </a>
          </p>
        </div>
      </footer>
    `;
    })
    .catch(err => console.error("Footer yüklenemedi:", err));