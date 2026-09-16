document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelopeBox');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const screen = document.getElementById('envelopeScreen');
  const card = document.getElementById('cardContainer');

  // HÀM MỞ THIỆP
  function openInvitation() {
    envelope.classList.add('open-anim');

    setTimeout(() => {
      screen.classList.add('opened');
      card.classList.add('revealed');
      createFlowerConfetti();
    }, 450);
  }

  // HÀM ĐÓNG THIỆP
  function closeInvitation() {
    card.classList.remove('revealed');

    setTimeout(() => {
      screen.classList.remove('opened');
      setTimeout(() => {
        envelope.classList.remove('open-anim');
      }, 180);
    }, 280);
  }

  if (envelope) envelope.addEventListener('click', openInvitation);
  if (openBtn) openBtn.addEventListener('click', openInvitation);

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeInvitation();
    });
  }

  // CÁNH HOA RƠI CHÚC MỪNG
  function createFlowerConfetti() {
    const colors = ['#fbcfe8', '#fce7f3', '#f472b6', '#ffffff'];
    const petalCount = 20;

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      petal.style.position = 'fixed';
      petal.style.width = Math.random() * 8 + 6 + 'px';
      petal.style.height = Math.random() * 10 + 8 + 'px';
      petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      petal.style.borderRadius = '50% 0 50% 50%';
      petal.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      petal.style.top = '-20px';
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.zIndex = '999';
      petal.style.pointerEvents = 'none';
      petal.style.transform = `rotate(${Math.random() * 360}deg)`;
      petal.style.transition = `top ${Math.random() * 2.5 + 2}s ease-in, transform 2.8s ease-in-out, opacity 2.2s`;

      document.body.appendChild(petal);

      setTimeout(() => {
        petal.style.top = '105dvh';
        petal.style.transform = `rotate(${Math.random() * 720}deg) translateX(${Math.random() * 60 - 30}px)`;
        petal.style.opacity = '0';
      }, 60);

      setTimeout(() => {
        petal.remove();
      }, 4800);
    }
  }

});