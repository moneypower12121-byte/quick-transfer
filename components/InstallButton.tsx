import React, { useEffect, useState } from 'react';

export default function InstallButton(): JSX.Element | null {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onBeforeInstall(e: Event) {
      // @ts-ignore
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall as EventListener);
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstall as EventListener);
  }, []);

  async function handleInstall() {
    if (!deferredPrompt) return;
    try {
      // @ts-ignore
      deferredPrompt.prompt();
      // @ts-ignore
      const choice = await deferredPrompt.userChoice;
      setVisible(false);
      setDeferredPrompt(null);
      // optional: log result
      console.log('PWA install choice', choice);
    } catch (err) {
      console.error('Install failed', err);
    }
  }

  if (!visible) return null;

  return (
    <button
      onClick={handleInstall}
      className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
      aria-label="Install app"
    >
      Install
    </button>
  );
}
