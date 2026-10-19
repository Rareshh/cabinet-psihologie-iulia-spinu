// ==========================================================================
// Cabinet de Psihologie - Iulia Spînu | Script Principal Interactiv
// Micro-interacțiuni, animații calme de derulare & FAQ
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Animații Calme la Derulare (Scroll Reveal) ---
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // --- 2. Bara de Navigare la Scroll ---
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.btn-back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    if (header) {
      if (scrollPos > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 3. Meniu Navigare Mobil (Drawer) ---
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');

  function openDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('active');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  const drawerLinks = document.querySelectorAll('.mobile-nav-drawer a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // --- 4. Modul Căutare pe Site ---
  const searchBtn = document.querySelector('.search-btn');
  const searchModal = document.querySelector('.search-modal');
  const searchCloseBtn = document.querySelector('.search-close-btn');
  const searchInput = document.querySelector('#site-search-input');
  const searchResults = document.querySelector('.search-results');

  const siteIndex = [
    {
      title: "Consiliere Copii",
      url: "servicii.html#copii",
      snippet: "Un spațiu sigur și prietenos unde cei mici pot explora și depăși dificultățile emoționale prin joc și tehnici adaptate vârstei. Durată: 50 minute. Preț: 190 RON."
    },
    {
      title: "Consiliere Adolescenți",
      url: "servicii.html#adolescenti",
      snippet: "Sprijin empatic pentru tineri în perioade de tranziție, anxietate școlară, probleme de identitate sau dificultăți relaționale. Durată: 50 minute. Preț: 190 RON."
    },
    {
      title: "Consiliere Adulți",
      url: "servicii.html#adulti",
      snippet: "Spațiu de lucru pentru gestionarea stresului, a anxietății, a dificultăților de cuplu sau a crizelor personale, oferind claritate și echilibru. Durată: 50 minute. Preț: 190 RON."
    },
    {
      title: "Tarife și Servicii",
      url: "servicii.html",
      snippet: "Consultați lista completă a serviciilor de consiliere psihologică, durata ședințelor și tarifele aferente."
    },
    {
      title: "Despre Terapeut (Iulia Spînu)",
      url: "index.html#despre",
      snippet: "Cabinet Individual de Psihologie Iulia Spînu – atestat de liberă practică CPR, confidențialitate și abordare centrată pe persoană."
    },
    {
      title: "Contact și Programări",
      url: "contact.html",
      snippet: "Pentru programări sau pentru apelul gratuit de cunoaștere, mă puteți suna la 0744 910 235."
    },
    {
      title: "Program Cabinet",
      url: "contact.html#program",
      snippet: "Luni – Vineri: 15:00 – 19:00, Sâmbătă: Închis, Duminică: Închis."
    },
    {
      title: "Locația Cabinetului",
      url: "contact.html#locatie",
      snippet: "Strada 1 Decembrie 1918 nr. 41, în clădirea Policlinicii, Bârlad."
    },
    {
      title: "Recenzii Google & Lasă o recenzie",
      url: "https://g.page/r/CTEVs4ZDKVDIEBM/review",
      snippet: "Scrieți o recenzie sau împărtășiți părerea dumneavoastră pe profilul oficial Google Business al Cabinetului de Psihologie Iulia Spînu."
    },
    /* Ghiduri Audio temporar decuplate:
    {
      title: "Ghiduri Audio Terapeutice",
      url: "audio.html",
      snippet: "Înregistrări audio ghidate de 60 de minute pentru adormire, calmare a anxietății și relaxare somatică."
    },
    {
      title: "Audio Somn Profund & Relaxare Somatică",
      url: "audio.html#audio-somn",
      snippet: "Tehnică ghidată pentru insomnie și calmarea gândurilor înainte de culcare. Durată: ~60 min. Preț: 49 RON."
    },
    {
      title: "Audio Calmare Anxietate & Respirație Ghidată",
      url: "audio.html#audio-anxietate",
      snippet: "Protocol sonor de reglare emoțională și respirație diafragmatică în momente de panică sau stres. Durată: ~60 min. Preț: 49 RON."
    },
    {
      title: "Audio Eliberare Tensiune & Relaxare Progresivă",
      url: "audio.html#audio-tensiune",
      snippet: "Metodă de descărcare a tensiunii fizice din umeri, ceafă și corp la finalul zilei. Durată: ~60 min. Preț: 49 RON."
    },
    {
      title: "Pachet Complet Audio (3 în 1)",
      url: "audio.html#pachet-complet",
      snippet: "Include toate cele 3 înregistrări audio complete la preț redus (119 RON în loc de 147 RON)."
    },
    */
    {
      title: "Confidențialitate CPR & GDPR",
      url: "confidentialitate.html",
      snippet: "Politica de confidențialitate, secretul profesional conform Colegiului Psihologilor din România și termenii legali."
    }
  ];

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 80);
      }
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.remove('active');
      document.body.style.overflow = '';
      if (searchInput) searchInput.value = '';
      if (searchResults) searchResults.innerHTML = '';
    }
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeDrawer();
    }
  });

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML = '';
        return;
      }

      const matches = siteIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.snippet.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = '<li class="search-result-item"><p style="color:#777; padding:10px 0;">Niciun rezultat găsit pentru căutarea dumneavoastră.</p></li>';
      } else {
        searchResults.innerHTML = matches.map(item => {
          const isExt = item.url.startsWith('http');
          const safeUrl = encodeURI(item.url);
          const targetAttr = isExt ? 'target="_blank" rel="noopener noreferrer"' : '';
          return `
            <li class="search-result-item">
              <a href="${safeUrl}" ${targetAttr}>
                <div class="search-result-title">${escapeHTML(item.title)}</div>
                <div class="search-result-snippet">${escapeHTML(item.snippet)}</div>
              </a>
            </li>
          `;
        }).join('');
      }
    });
  }

  // --- 5. Acordeon Întrebări Frecvente (FAQ) ---
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const isOpen = item.classList.contains('open');

      // Închide celelalte elemente dacă se dorește comportament unic
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherContent = other.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        content.style.maxHeight = null;
      } else {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });





  // --- 8. Player Audio Demo (Mostre Gratuite pe audio.html) ---
  const audioBoxes = document.querySelectorAll('.audio-player-box');
  let activePreviewBox = null;
  let previewTimer = null;
  let previewCurrentTime = 0;
  const PREVIEW_DURATION = 45; // 45 secunde
  let audioCtx = null;
  let synthGain = null;

  function stopAmbientSound() {
    if (synthGain && audioCtx) {
      try {
        synthGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1);
      } catch (err) {}
    }
  }

  function startAmbientSound() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      // Sintetizator calmat ambiental la 432Hz (acord terapeutic profund)
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      synthGain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.value = 350;

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(216, audioCtx.currentTime); // A3 (432Hz octave)
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(324, audioCtx.currentTime); // E4 harmonic

      synthGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      synthGain.gain.exponentialRampToValueAtTime(0.035, audioCtx.currentTime + 1.2);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(synthGain);
      synthGain.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
    } catch (e) {}
  }

  function formatSec(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function resetPreviewBox(box) {
    const playBtn = box.querySelector('.audio-play-btn');
    const fill = box.querySelector('.audio-progress-fill');
    const timeLabel = box.querySelector('.audio-time-label');
    if (playBtn) playBtn.classList.remove('playing');
    if (fill) fill.style.width = '0%';
    if (timeLabel) timeLabel.textContent = `0:00 / ${formatSec(PREVIEW_DURATION)}`;
  }

  audioBoxes.forEach(box => {
    const playBtn = box.querySelector('.audio-play-btn');
    const fill = box.querySelector('.audio-progress-fill');
    const timeLabel = box.querySelector('.audio-time-label');
    const progressWrap = box.querySelector('.audio-progress-wrap');

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        const isPlaying = playBtn.classList.contains('playing');

        if (isPlaying) {
          // Pause
          clearInterval(previewTimer);
          playBtn.classList.remove('playing');
          stopAmbientSound();
        } else {
          // Oprire orice alt player activ
          if (activePreviewBox && activePreviewBox !== box) {
            clearInterval(previewTimer);
            resetPreviewBox(activePreviewBox);
            stopAmbientSound();
          }

          activePreviewBox = box;
          playBtn.classList.add('playing');
          startAmbientSound();

          clearInterval(previewTimer);
          previewTimer = setInterval(() => {
            previewCurrentTime += 0.5;
            if (previewCurrentTime >= PREVIEW_DURATION) {
              previewCurrentTime = 0;
              clearInterval(previewTimer);
              resetPreviewBox(box);
              stopAmbientSound();
              return;
            }
            const pct = (previewCurrentTime / PREVIEW_DURATION) * 100;
            if (fill) fill.style.width = `${pct}%`;
            if (timeLabel) timeLabel.textContent = `${formatSec(previewCurrentTime)} / ${formatSec(PREVIEW_DURATION)}`;
          }, 500);
        }
      });
    }

    if (progressWrap) {
      progressWrap.addEventListener('click', (e) => {
        const rect = progressWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, clickX / rect.width));
        previewCurrentTime = ratio * PREVIEW_DURATION;
        if (fill) fill.style.width = `${ratio * 100}%`;
        if (timeLabel) timeLabel.textContent = `${formatSec(previewCurrentTime)} / ${formatSec(PREVIEW_DURATION)}`;
      });
    }
  });

  // --- 9. Player Privat Master (pe asculta.html) ---
  const masterPlayBtn = document.querySelector('#btn-master-play');
  if (masterPlayBtn) {
    const trackTabs = document.querySelectorAll('.track-tab-btn');
    const trackTitle = document.querySelector('#player-track-title');
    const trackDesc = document.querySelector('#player-track-desc');
    const curTimeTxt = document.querySelector('#player-cur-time');
    const totalTimeTxt = document.querySelector('#player-total-time');
    const progressFill = document.querySelector('#player-progress-fill');
    const progressWrap = document.querySelector('#player-progress-wrap');
    const btnRewind = document.querySelector('#btn-rewind');
    const btnForward = document.querySelector('#btn-forward');

    const tracksData = {
      somn: {
        title: "Relaxare Somatică & Pregătire pentru Somn Profund",
        desc: "O călătorie lentă de detensionare corporală și liniștire a fluxului de gânduri. Se recomandă ascultarea în poziție orizontală, la lumină difuză, înainte de adormire.",
        duration: 3520 // 58:40
      },
      anxietate: {
        title: "Respirație Ghidată & Calmare în Anxietate Acută",
        desc: "Protocol sonor de reglare a sistemului nervos prin ancorare senzorială și respirație diafragmatică în momente de presiune sau atac de panică.",
        duration: 3255 // 54:15
      },
      tensiune: {
        title: "Eliberarea Tensiunii Mentale & Relaxare Progresivă",
        desc: "Exerciții terapeutice adaptate de relaxare musculară pentru descărcarea tensiunii acumulate în umeri, ceafă și maxilar la finalul zilei.",
        duration: 3390 // 56:30
      }
    };

    let activeTrackId = 'somn';
    let masterTimer = null;
    let masterCurrentSec = 0;

    function updateTrackUI() {
      const data = tracksData[activeTrackId];
      if (trackTitle) trackTitle.textContent = data.title;
      if (trackDesc) trackDesc.textContent = data.desc;
      if (totalTimeTxt) totalTimeTxt.textContent = formatSec(data.duration);
      masterCurrentSec = 0;
      if (curTimeTxt) curTimeTxt.textContent = "00:00";
      if (progressFill) progressFill.style.width = "0%";
      if (masterPlayBtn.classList.contains('playing')) {
        clearInterval(masterTimer);
        masterPlayBtn.classList.remove('playing');
        stopAmbientSound();
      }
    }

    trackTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        trackTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeTrackId = tab.getAttribute('data-track-id');
        updateTrackUI();
      });
    });

    masterPlayBtn.addEventListener('click', () => {
      const isPlaying = masterPlayBtn.classList.contains('playing');
      const maxSec = tracksData[activeTrackId].duration;

      if (isPlaying) {
        clearInterval(masterTimer);
        masterPlayBtn.classList.remove('playing');
        stopAmbientSound();
      } else {
        masterPlayBtn.classList.add('playing');
        startAmbientSound();
        clearInterval(masterTimer);
        masterTimer = setInterval(() => {
          masterCurrentSec += 1;
          if (masterCurrentSec >= maxSec) {
            masterCurrentSec = 0;
            clearInterval(masterTimer);
            masterPlayBtn.classList.remove('playing');
            stopAmbientSound();
          }
          if (curTimeTxt) curTimeTxt.textContent = formatSec(masterCurrentSec);
          if (progressFill) progressFill.style.width = `${(masterCurrentSec / maxSec) * 100}%`;
        }, 1000);
      }
    });

    if (btnRewind) {
      btnRewind.addEventListener('click', () => {
        masterCurrentSec = Math.max(0, masterCurrentSec - 15);
        const maxSec = tracksData[activeTrackId].duration;
        if (curTimeTxt) curTimeTxt.textContent = formatSec(masterCurrentSec);
        if (progressFill) progressFill.style.width = `${(masterCurrentSec / maxSec) * 100}%`;
      });
    }

    if (btnForward) {
      btnForward.addEventListener('click', () => {
        const maxSec = tracksData[activeTrackId].duration;
        masterCurrentSec = Math.min(maxSec, masterCurrentSec + 15);
        if (curTimeTxt) curTimeTxt.textContent = formatSec(masterCurrentSec);
        if (progressFill) progressFill.style.width = `${(masterCurrentSec / maxSec) * 100}%`;
      });
    }

    if (progressWrap) {
      progressWrap.addEventListener('click', (e) => {
        const rect = progressWrap.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, clickX / rect.width));
        const maxSec = tracksData[activeTrackId].duration;
        masterCurrentSec = ratio * maxSec;
        if (curTimeTxt) curTimeTxt.textContent = formatSec(masterCurrentSec);
        if (progressFill) progressFill.style.width = `${ratio * 100}%`;
      });
    }
  }

  // --- 10. Gestionare Butoane Stripe în mod demonstrativ ---
  const stripeBuyBtns = document.querySelectorAll('.btn-buy-audio');
  stripeBuyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (href && href.includes('test_placeholder')) {
        e.preventDefault();
        alert("Acesta este un link demonstrativ Stripe.\n\nDupă ce vă creați contul Stripe (conform instrucțiunilor primite), vom înlocui acest link cu linkul dumneavoastră real de plată, iar clienții vor putea plăti securizat.");
      }
    });
  });
});
