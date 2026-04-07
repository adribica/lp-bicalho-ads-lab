import { useEffect } from 'react';

const GoogleTagManager = () => {
  const gtmId = import.meta.env.VITE_GTM_ID;

  useEffect(() => {
    if (!gtmId || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const scriptId = `gtm-script-${gtmId}`;
    if (document.getElementById(scriptId)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [gtmId]);

  if (!gtmId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        title="Google Tag Manager"
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};

export default GoogleTagManager;
