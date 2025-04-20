//utils/analytics.ts
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-K3ZMDFS9VL';

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
// Thêm hàm để theo dõi click vào game
export const trackGameClick = (gameName: string) => {
  ReactGA.event({
    category: 'Game',
    action: 'Click',
    label: gameName, // Tên game, ví dụ: "Game A"
  });
};