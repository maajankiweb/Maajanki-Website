'use client';

import { useEffect } from 'react';

/**
 * High-performance, zero-blocking analytics loader for Google Analytics (GA4) & Microsoft Clarity.
 * Delays script injection until the user interacts with the page or after 4.5s idle time,
 * ensuring 100% Core Web Vitals (FCP, LCP, TBT, Speed Index) on mobile devices.
 */
export default function Analytics() {
  useEffect(() => {
    let initialized = false;

    const loadAnalytics = () => {
      if (initialized) return;
      initialized = true;

      // 1. Load Google Analytics (gtag.js)
      try {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-CGPN1G03DW');

        const gaScript = document.createElement('script');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-CGPN1G03DW';
        gaScript.async = true;
        document.head.appendChild(gaScript);
      } catch (e) {
        console.warn('GA initialization notice:', e);
      }

      // 2. Load Microsoft Clarity
      try {
        (function (c, l, a, r, i, t, y) {
          c[a] =
            c[a] ||
            function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
          t = l.createElement(r);
          t.async = 1;
          t.src = 'https://www.clarity.ms/tag/' + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        })(window, document, 'clarity', 'script', 'u4zs398tm0');
      } catch (e) {
        console.warn('Clarity initialization notice:', e);
      }

      // Cleanup event listeners once fired
      cleanupListeners();
    };

    const userEvents = ['scroll', 'touchstart', 'pointerdown', 'mousemove', 'keydown', 'click'];

    const onUserInteraction = () => {
      loadAnalytics();
    };

    const addListeners = () => {
      userEvents.forEach((event) => {
        window.addEventListener(event, onUserInteraction, { once: true, passive: true });
      });
    };

    const cleanupListeners = () => {
      userEvents.forEach((event) => {
        window.removeEventListener(event, onUserInteraction);
      });
    };

    addListeners();

    // Fallback idle timer after 4.5 seconds if no interaction
    const idleTimer = typeof window !== 'undefined' && 'requestIdleCallback' in window
      ? window.requestIdleCallback(() => setTimeout(loadAnalytics, 2000))
      : setTimeout(loadAnalytics, 4500);

    return () => {
      cleanupListeners();
      if (typeof window !== 'undefined') {
        if ('cancelIdleCallback' in window && typeof idleTimer === 'number') {
          window.cancelIdleCallback(idleTimer);
        } else {
          clearTimeout(idleTimer);
        }
      }
    };
  }, []);

  return null;
}
