chrome.webRequest.onBeforeRequest.addListener(
  details => {
    const url = new URL(details.url);
    if (url.searchParams.get('w') != 1) {
      url.searchParams.set('w', 1);
      return {
        redirectUrl: url.toString(),
      };
    }
  },
  {
    urls: ['https://github.com/*/pull/*/files'], 
    types: ['main_frame'],
  },
  ['blocking'],
);
