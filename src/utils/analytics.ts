export const trackEvent = (eventName: string, props?: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Analytics]', eventName, props);
  }
};

export const trackPageView = (url: string) => trackEvent('page_view', { url });
