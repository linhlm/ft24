const ServiceProxyConfig = {
  Market: {
    MarketInDepth: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/MarketInDepth/',
    },
    HeatMap: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/HeatMap/',
    },
    Fundamental: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/api/Fundamental',
    },
    WatchList: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/WatchList/',
    },
    MarketCalendar: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/Calendar/',
    },
    MoneyFlow: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/MoneyFlow/',
    },
    Chart: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/Chart/',
    },
  },
  Prices: {
    PriceDepthUrl: 'http://test-findata.mbs.com.vn/api/v1/PriceDepth/',
    PriceDataUrl: 'http://test-findata.mbs.com.vn/api/v1/PriceData/',
    TimeAndSaleUrl: 'http://test-findata.mbs.com.vn/api/v1/TimeAndSales/',
  },
  TopMover: {
    ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/TopMover/',
    ServiceChart: 'http://test-findata.mbs.com.vn/api/v1/Chart/',
  },
  Technical: {
    Charting: 'http://test-findata.mbs.com.vn/api/v1/TradingView/',
    Deceptive: 'http://test-findata.mbs.com.vn/api/v1/TechnicalAnalysisSignals/',
  },

  Fundamental: {
    FinancialStatement: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/FinancialStatement/',
    },
    FinancialAnalysis: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/FinancialAnalysis/',
    },
    OwnerShip: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/Ownership/',
    },
    CashDividendAnalysis: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/CashDividendAnalysis/',
    },
    Snapshot: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/Snapshot/',
    },
    ConsensusAnalysis: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/ConsensusAnalysis/',
    },
  },
  Tools: {
    Alerts: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/',
      ServiceChart: 'http://test-findata.mbs.com.vn/api/v1/Chart/',
    },
    Screener: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/Screener/',
    },
  },
  Common: {
    Master: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/Master/',
    },
    UserSetting: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/UserSetting/',
    },
  },
  News: {
    ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/News/',
  },
  Stategy: {
    Ranking: {
      ServiceUrl: 'http://test-findata.mbs.com.vn/api/v1/Strategy/',
    },
  },
};
export default ServiceProxyConfig;
