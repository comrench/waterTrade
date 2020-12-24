export const getStockDetailsFromApi = async (stockData) => {
    const endPoint = 'https://jsonplaceholder.typicode.com/todos/1';
    const token = 'bearer_token';
    const bearer = `Bearer ${token}`;
    const fetchStatus = false;
    try{
        if(stockData) {
            const response = await fetch(endPoint, {
                mode: 'cors',
                headers: {
                    'Authorization': bearer,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Headers': '*'
                }
            });
            console.log(response);
            const data = await response.json();
            if(response.status === 200){
                console.log(data);
                return data;
            }else{
                console.log('Error: response with invalid status code');
                console.log(response);
            }
        }else{
            console.log('Valid stockData is required to fetch the stock details');
        }
    }catch(error){
        console.log(error);
    }
    return fetchStatus;
}