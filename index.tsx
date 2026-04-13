
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import HelpCenter from './pages/HelpCenter';
import Contact from './pages/Contact';
import Download from './pages/Download';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { registerSW } from 'virtual:pwa-register';

// Simple router based on pathname
const getPage = () => {
  const path = window.location.pathname;
  switch (path) {
    case '/terms':
      return <Terms />;
    case '/privacy':
      return <Privacy />;
    case '/help':
      return <HelpCenter />;
    case '/contact':
      return <Contact />;
    case '/download':
      return <Download />;
    default:
      return <App />;
  }
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const appElement = (
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        {getPage()}
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, appElement);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(appElement);
}
// Register service worker for PWA
registerSW({ immediate: true });
