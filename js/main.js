const openModalButtons = document.querySelectorAll(
  ".section-packages-button-addition"
);
const modal = document.querySelector(".pt-section-pos-modal");
let modalContent = document.querySelector(".modal-content");
openModalButtons.forEach((openModalButton) => {
  openModalButton.addEventListener("click", () => {
    if (openModalButton.id == "0azn") {
      modalContent.innerHTML = `
        <i class="fa-solid fa-xmark modal-close"></i>
        <span class="modal-title">POS-terminal</span>
        <div
          class="model-list"
          style="display: flex; flex-direction: column; gap: 15px"
        >
        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Təmassız ödənişlərin qəbulu
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%;color:#099a71">0 AZN</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Hesabın açılması
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%;color:#099a71">Pulsuz</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Korporativ / Gömrük / Tacir kartı	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">32 AZN və ya 16 USD/EUR/GBP (Lokal 15 AZN)
          </span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Nağdlaşdırma	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.7%</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Bankdaxili köçürmə	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">Onlayn Bankdan pulsuz</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.21% (min. 3 AZN – maks. 300 AZN)</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Milli valyutada ölkə daxili köçürmələr (adi icra olunma)	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.18% (min. 2AZN- maks. 200 AZN) <br> Bankın Biznes Mərkəzlərində – 0.15%</span>
        </div>

        <div style = "display:flex; width:100%;" class = "bottom-line">
        <span class="pt-section-pos-box-text" style = "width:50%"
          >
          Xarici valyutada ödənişlər	
        </span>
        <span class = "pt-section-pos-box-text" style = "width:50%">0.35% (min. 35 USD/EUR – maks. 400 USD/EUR)</span>
      </div>


      <div style = "display:flex; width:100%;" class = "bottom-line">
      <span class="pt-section-pos-box-text" style = "width:50%"
        >
        Valyuta mübadiləsi		
      </span>
      <span class = "pt-section-pos-box-text" style = "width:50%">0.35%–dək (fərdi qaydada baxıla bilər)</span>
    </div>


    <div style = "display:flex; width:100%;" class = "bottom-line">
    <span class="pt-section-pos-box-text" style = "width:50%"
      >
      POS-terminal	
    </span>
    <span class = "pt-section-pos-box-text" style = "width:50%">2.2% – Xarici bankların kartları, <br>
    2% – Yerli bankların kartları</span>
  </div>


        
        </div>
        <a
          href="#"
          class="green-button"
          style="width: 20%; margin-left: 70%"
          >Sifariş et</a
        >
        `;
    } else if (openModalButton.id == "40azn") {
      modalContent.innerHTML = `
        <i class="fa-solid fa-xmark modal-close"></i>
        <span class="modal-title">POS-terminal</span>
        <div
          class="model-list"
          style="display: flex; flex-direction: column; gap: 15px"
        >
        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Aylıq ödəniş	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%;color:#099a71">40 AZN</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Hesabın açılması
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%; color:#099a71">32 AZN və ya 16 USD/EUR/GBP</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Korporativ / Gömrük / Tacir kartı	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">32 AZN və ya 16 USD/EUR/GBP (Lokal 15 AZN)
          </span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Nağdlaşdırma	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.7%</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Bankdaxili köçürmə	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">Onlayn Bankdan pulsuz</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.21% (min. 3 AZN – maks. 300 AZN)</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Milli valyutada ölkə daxili köçürmələr (adi icra olunma)	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.18% (min. 2AZN- maks. 200 AZN) <br> Bankın Biznes Mərkəzlərində – 0.15%</span>
        </div>

        <div style = "display:flex; width:100%;" class = "bottom-line">
        <span class="pt-section-pos-box-text" style = "width:50%"
          >
          Xarici valyutada ödənişlər	
        </span>
        <span class = "pt-section-pos-box-text" style = "width:50%">0.35% (min. 35 USD/EUR – maks. 400 USD/EUR)</span>
      </div>


      <div style = "display:flex; width:100%;" class = "bottom-line">
      <span class="pt-section-pos-box-text" style = "width:50%"
        >
        Valyuta mübadiləsi		
      </span>
      <span class = "pt-section-pos-box-text" style = "width:50%">0.35%–dək (fərdi qaydada baxıla bilər)</span>
    </div>


    <div style = "display:flex; width:100%;" class = "bottom-line">
    <span class="pt-section-pos-box-text" style = "width:50%"
      >
      POS-terminal	
    </span>
    <span class = "pt-section-pos-box-text" style = "width:50%">2.2% – Xarici bankların kartları, <br>
    2% – Yerli bankların kartları</span>
  </div>


        
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
        <span class="modal-title">POS-terminal</span>
        <div
          class="model-list"
          style="display: flex; flex-direction: column; gap: 15px"
        >
        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Aylıq ödəniş	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%;color:#099a71">110 AZN</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Hesabın açılması
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%; color:#099a71">32 AZN və ya 16 USD/EUR/GBP</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Korporativ / Gömrük / Tacir kartı	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">32 AZN və ya 16 USD/EUR/GBP (Lokal 15 AZN)
          </span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Nağdlaşdırma	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.7%</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Bankdaxili köçürmə	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">Onlayn Bankdan pulsuz</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Milli valyutada ölkə daxili köçürmələr (təcili icra olunma)	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.21% (min. 3 AZN – maks. 300 AZN)</span>
        </div>

        
        <div style = "display:flex; width:100%;" class = "bottom-line">
          <span class="pt-section-pos-box-text" style = "width:50%"
            >
            Milli valyutada ölkə daxili köçürmələr (adi icra olunma)	
          </span>
          <span class = "pt-section-pos-box-text" style = "width:50%">0.18% (min. 2AZN- maks. 200 AZN) <br> Bankın Biznes Mərkəzlərində – 0.15%</span>
        </div>

        <div style = "display:flex; width:100%;" class = "bottom-line">
        <span class="pt-section-pos-box-text" style = "width:50%"
          >
          Xarici valyutada ödənişlər	
        </span>
        <span class = "pt-section-pos-box-text" style = "width:50%">0.35% (min. 35 USD/EUR – maks. 400 USD/EUR)</span>
      </div>


      <div style = "display:flex; width:100%;" class = "bottom-line">
      <span class="pt-section-pos-box-text" style = "width:50%"
        >
        Valyuta mübadiləsi		
      </span>
      <span class = "pt-section-pos-box-text" style = "width:50%">0.35%–dək (fərdi qaydada baxıla bilər)</span>
    </div>


    <div style = "display:flex; width:100%;" class = "bottom-line">
    <span class="pt-section-pos-box-text" style = "width:50%"
      >
      POS-terminal	
    </span>
    <span class = "pt-section-pos-box-text" style = "width:50%">2.2% – Xarici bankların kartları, <br>
    2% – Yerli bankların kartları</span>
  </div>


        
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
