function img_onclick(img_obj) {
  const filter = document.createElement('div');
  filter.id = 'img-viewer';

  const div_img = document.createElement('img');
  div_img.id = 'img-viewer__img';
  div_img.src = img_obj.src;

  document.body.appendChild(filter);
  filter.appendChild(div_img);

  filter.addEventListener('click', close, {
    once: true
  });

  function close() {
    filter.className = 'fadeout';
    filter.addEventListener("animationend", function() {
      filter.remove();
    });
  }
}
