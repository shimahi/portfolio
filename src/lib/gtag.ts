// GoogleAnalyticsの設定

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// IDが取得できない場合
export const existsGaId = GA_TRACKING_ID !== ''

// PV測定の実装
// cf. https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
