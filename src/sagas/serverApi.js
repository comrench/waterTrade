export const getStockDetailsFromApi = async (stockData) => {
  console.log("this is stockData");
  console.log(stockData);
  //   const endPoint = "https://api03.iq.questrade.com/v1/symbols/8049";
  const endPoint =
    "http://localhost:8001/getDetails?symbol=" + stockData.symbol;
  const token = "fPo06qoBwrQe_ClXTtB9bKVmaWjLWzlq0";
  const bearer = `Bearer ${token}`;
  const fetchStatus = false;
  try {
    if (stockData) {
      const response = await fetch(endPoint, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          Authorization: bearer,
        },
      });
      console.log(response);
      const data = await response.json();
      if (response.status === 200) {
        console.log(data.stock);
        return data.stock;
      } else {
        console.log("Error: response with invalid status code");
        console.log(response);
      }
    } else {
      console.log("Valid stockData is required to fetch the stock details");
    }
  } catch (error) {
    console.log(error);
  }
  return fetchStatus;
};
