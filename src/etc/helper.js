export const divideData = ({
  symbol,
  symbolId,
  prevDayClosePrice,
  highPrice52,
  lowPrice52,
  averageVol3Months,
  averageVol20Days,
  marketCap,
  eps,
  pe,
}) => {
  const first = [
    ["Symbol", symbol],
    ["symbolId", symbolId],
    ["prevDayClosePrice", prevDayClosePrice],
    ["highPrice52", highPrice52],
    ["lowPrice52", lowPrice52],
  ];
  const second = [
    ["averageVol3Months", averageVol3Months],
    ["averageVol20Days", averageVol20Days],
    ["marketCap", marketCap],
    ["EPS", eps],
    ["PE", pe],
  ];
  return [first, second];
};
