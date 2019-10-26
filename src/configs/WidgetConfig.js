export const componentLimit = {
  Watchlist: 1
};

const WidgetConfig = [
  {
    name: 'Market',
    list: [
      {
        name: 'Watchlist',
        limit: componentLimit.Watchlist,
        listReducer: ['WATCH_LIST:'],
      }
    ],
  }
];

export default WidgetConfig;
