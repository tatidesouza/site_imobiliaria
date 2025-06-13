/*JavaScript para poder fazer a troca de imagens nos modais*/
    
document.addEventListener("DOMContentLoaded", () => {

  const modais = document.querySelectorAll(".zoom");

  modais.forEach(modal => {
    const mainImage = modal.querySelector(".zoom-content > img");
    const thumbs = modal.querySelectorAll(".thumbs img");

    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        const tempSrc = mainImage.src;
        mainImage.src = thumb.src;
        thumb.src = tempSrc;
      });
    });
  });
});
