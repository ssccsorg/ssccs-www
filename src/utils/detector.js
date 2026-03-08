
let _cachedIsNativeMobileSafari = null;

export function isMobileSafari() {
  if (_cachedIsNativeMobileSafari !== null) {
    return _cachedIsNativeMobileSafari;
  }
  
  if (typeof window === 'undefined') {
    return (_cachedIsNativeMobileSafari = false);
  }

  
  if (!('GestureEvent' in window) || !('ongesturechange' in window)) {
    return (_cachedIsNativeMobileSafari = false);
  }

  const ua = navigator.userAgent;
  const vendor = navigator.vendor || '';

  
  const isApple = /Apple/.test(vendor) || /Safari/.test(ua);
  const notChrome = !/CriOS/.test(ua);
  const notFirefox = !/FxiOS/.test(ua);
  const notEdge = !/EdgiOS/.test(ua);
  const notOther = !/mercury|OPiOS|Focus|Brave/i.test(ua);

  
  const isEmbedded = 
    window.matchMedia?.('(display-mode: standalone)').matches ||
    !!navigator.standalone ||
    !!window.webkit?.messageHandlers;

  return (_cachedIsNativeMobileSafari = 
    isApple && notChrome && notFirefox && notEdge && notOther && !isEmbedded
  );
}


let _cachedIsMobile = null;

function isMobile() {
  if (_cachedIsMobile !== null) {
    return _cachedIsMobile;
  }
  
  if (typeof window === 'undefined') {
    return (_cachedIsMobile = false);
  }

  return (_cachedIsMobile = 
    /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
}


function resetDetectCache() {
  _cachedIsNativeMobileSafari = null;
  _cachedIsMobile = null;
}