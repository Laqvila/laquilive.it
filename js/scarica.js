/* laquilive.it/scarica: passaggio diretto allo store del telefono.
   File a parte perché la pagina non accetta script in linea (CSP). */
(function () {
  'use strict';
  var PLAY = 'https://play.google.com/store/apps/details?id=it.aqlive99.app';
  var APPLE = 'https://apps.apple.com/it/app/laquilive/id6796280318';
  var SB = 'https://kdgytiribodwqccvwzvc.supabase.co';
  // chiave PUBBLICA, la stessa dentro l'app
  var CHIAVE = 'sb_publishable_-tudt_coGbSiMfFxTWZ9yQ_YYxUtBid';
  var ua = navigator.userAgent || '';
  var ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var android = /Android/i.test(ua);
  var canale = '';
  try { canale = ((new URLSearchParams(location.search).get('da') || '') + '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40); } catch (e) { /* niente */ }
  if (!canale) canale = 'laquilive-scarica';
  var meta = ios ? APPLE : PLAY + '&referrer=' + encodeURIComponent('utm_source=' + canale + '&utm_medium=link');
  // si conta solo sul sito vero: le prove in locale non sporcano i numeri dello Studio
  if (/(^|\.)laquilive\.it$/.test(location.hostname)) {
    try {
      fetch(SB + '/rest/v1/rpc/registra_click_link', {
        method: 'POST', keepalive: true,
        headers: { 'Content-Type': 'application/json', apikey: CHIAVE, Authorization: 'Bearer ' + CHIAVE },
        body: JSON.stringify({ p_canale: canale, p_destinazione: ios ? 'appstore' : 'play', p_piattaforma: ios ? 'ios' : android ? 'android' : 'altro' })
      }).catch(function () {});
    } catch (e) { /* il conteggio non deve mai fermare il passaggio allo store */ }
  }
  // un attimo perché la richiesta parta, poi via
  setTimeout(function () { window.location.replace(meta); }, 160);
})();
