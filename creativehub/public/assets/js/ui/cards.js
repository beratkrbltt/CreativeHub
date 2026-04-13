const aboutCard = document.getElementById("aboutCardMain");

fetch("assets/js/data/aboutCards.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("about-card");

            cardDiv.innerHTML = `
        <div class="aboutCardIcon propertyscope">
          <i class="fa-solid ${card.icon}" style="color: white;"></i>
        </div>
        <h3>${card.title}</h3>
        <p>${card.desc}</p>
      `;

            aboutCard.appendChild(cardDiv);
        });
    })
    .catch(error => console.error("JSON hata:", error));
// ----------------------------
const servicesCard = document.getElementById("servicesCardMain");

fetch("assets/js/data/servicesCard.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("services-card");

            cardDiv.innerHTML = `
        <div class="servicesCardIcon ${card.color} propertyscope">
          <i class="fa-solid ${card.icon}" style="color:white;"></i>
        </div>
        <h3>${card.title}</h3>
        <p>${card.desc}</p>
      `;
            servicesCard.appendChild(cardDiv);
        });
    })
    .catch(error => console.error("JSON hata:", error));
// ----------------------------
const locationCard = document.getElementById("locationCardMain");

fetch("assets/js/data/locationCards.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((card, index) => {
            const cardDiv = document.createElement("div");
            if (index < 4) {
                cardDiv.classList.add("location-card");

                cardDiv.innerHTML = `
                    <div class="locationCardIcon propertyscope">
                      <i class="fa-solid ${card.icon}" style="color:white;"></i>
                    </div>
                    <div class="locationTextMain">
                        <h3>${card.title}</h3>
                        <p>${card.desc}</p>
                    </div>
                `;
            }
            else {
                cardDiv.classList.add("location-card", "cta-card");
                cardDiv.innerHTML = `
                    <div class="ctaCardMain">
                        <h3>${card.title}</h3>
                        <p>${card.desc}</p>
                        <a href="#contact">${card.btn}</a>
                    </div>
                `;
            }

            locationCard.appendChild(cardDiv);
        });
    })
    .catch(error => console.error("JSON hata:", error));