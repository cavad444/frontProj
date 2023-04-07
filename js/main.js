const navSpanDivs = document.querySelectorAll(".nav-span-div");
const dropdown = document.querySelector(".dropdown");

navSpanDivs.forEach((navSpanDiv) => {
  navSpanDiv.addEventListener("mouseenter", () => {
    switch (navSpanDiv.getAttribute("id")) {
      case "buisness":
        dropdown.innerHTML = `
      <div class="dropdown-items">
        <span class="dropdown-item">Tarifler</span>
        <span class="dropdown-item">GRO platforması</span>
        <span class="dropdown-item">Biznes üçün hesab</span>
        <span class="dropdown-item">Əməkhaqqı layihəsi</span>
        <span class="dropdown-item">Ödənişlər</span>
        <span class="dropdown-item">Biznes kartlar</span>
        <span class="dropdown-item">POS-terminal və E-kassa</span>
        <span class="dropdown-item">Elektron Ticarət</span>
        <span class="dropdown-item">Linklə ödəniş</span>
      </div>
      `;
        break;
      case "credit":
        dropdown.innerHTML = `
        <div class="dropdown-items">
          <span class="dropdown-item">Onlayn biznes kreditləri</span>
          <span class="dropdown-item">Biznes kreditləri</span>
          <span class="dropdown-item">Gömrük kartı üzrə kredit xətti</span>
          <span class="dropdown-item">SİF Kreditləri</span>
        </div>
        `;
        break;
      case "factoring":
        dropdown.innerHTML = `
        <div class="dropdown-items">
          <span class="dropdown-item">İnvoysların maliyyələşdirilməsi</span>
          <span class="dropdown-item">Alış sifarişi əsasında maliyyələşmə</span>
          <span class="dropdown-item">Təchizat zəncirinin maliyyələşdirilməsi</span>
        </div>
        `;
        break;
      case "additional-information":
        dropdown.innerHTML = `
        <div class="dropdown-items">
          <span class="dropdown-item">İnkassiya</span>
          <span class="dropdown-item">Depozitlər</span>
          <span class="dropdown-item">Bank seyfləri</span>
          <span class="dropdown-item">Bulud CRM</span>
          <span class="dropdown-item">ÇatBot</span>
          <span class="dropdown-item">Elektron-ticarət üçün mobil tətbiq</span>
          <span class="dropdown-item">Umico MasterPass</span>
          <span class="dropdown-item">PAŞA Biznes</span>
        </div>
        `;
        break;
      case "operations":
        dropdown.innerHTML = `
        <div class="dropdown-items">
          <span class="dropdown-item">Ekspress-Tender qarantiyası</span>
          <span class="dropdown-item">Bank qarantiyası</span>
          <span class="dropdown-item">Akkreditvi</span>
          <span class="dropdown-item">İnkasso</span>
          <span class="dropdown-item">Ticarətin maliyyələşdirilməsi</span>
        </div>
        `;
        break;
      default:
    }
    dropdown.style.opacity = "1";
    dropdown.style.maxHeight = "240px";
  });

  navSpanDiv.addEventListener("mouseleave", () => {
    dropdown.style.opacity = "0";
    dropdown.style.height = "0";
  });
});

dropdown.addEventListener("mouseenter", () => {
  dropdown.style.opacity = "1";
  dropdown.style.maxHeight = "240px";
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.style.opacity = "0";
  dropdown.style.height = "0";
});
