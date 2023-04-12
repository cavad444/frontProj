const openModalButtons = document.querySelectorAll(
  ".pt-section-pos-box-button"
);
const modal = document.querySelector(".pt-section-pos-modal");
let modalContent = document.querySelector(".modal-content");
openModalButtons.forEach((openModalButton) => {
  openModalButton.addEventListener("click", () => {
    if (openModalButton.id == "pt") {
      modalContent.innerHTML = `
      <i class="fa-solid fa-xmark modal-close"></i>
      <span class="modal-title">POS-terminal</span>
      <div
        class="model-list"
        style="display: flex; flex-direction: column; gap: 15px"
      >
        <span class="pt-section-pos-box-text line-bottom"
          ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
          Təmassız ödənişlərin qəbulu
        </span>

        <span class="pt-section-pos-box-text"
          ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
          Rahat və sürətli əməliyyat sistemi
        </span>

        <span class="pt-section-pos-box-text"
          ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
          4G və WiFi dəstəyi
        </span>

        <span class="pt-section-pos-box-text"
          ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
          5.5 sensorlu ekran
        </span>

        <span class="pt-section-pos-box-text"
          ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
          Uzun ömürlü enerji saxlama qabiliyyəti
        </span>

        <span class="pt-section-pos-box-text"
          ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
          3G şəbəkə dəstəyi
        </span>
      </div>
      <a
        href="#"
        class="green-button"
        style="width: 20%; margin-left: 70%"
        >Sifariş et</a
      >
      `;
    } else {
      modalContent.innerHTML = `
        <i class="fa-solid fa-xmark modal-close"></i>
        <span class="modal-title">POS–terminal + E–kassa
        </span>
        <div
          class="model-list"
          style="display: flex; flex-direction: column; gap: 15px"
        >
          <span class="pt-section-pos-box-text line-bottom"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            E-kassa imkanları

          </span>
  
          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            POS–terminal funksiyası
          </span>
  
          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            Dövlət vergi xidməti ilə inteqrasiya
          </span>
  
          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            Anbar uçot sistemi funksiyası
          </span>
  
          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            Fiskal çek printeri
          </span>
  
          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            QR kodla çeklərin çapı
          </span>

          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            Təmassız ödənişlərin qəbulu
          </span>

          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            Rahat interfeys
          </span>

          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            5.5 sensorlu ekran
          </span>

          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            Android proqram təminatı
          </span>

          <span class="pt-section-pos-box-text"
            ><i class="fa-solid fa-check" style="color: #0d9b73"></i>
            Yüksək keyfiyyətli kamera
          </span>
        </div>
        <a
          href="#"
          class="green-button"
          style="width: 20%; margin-left: 70%"
          >Sifariş et</a
        >
        `;
    }
    const modalCloseButton = document.querySelector(".modal-close");
    modalCloseButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
    modal.style.display = "block";
  });
});
