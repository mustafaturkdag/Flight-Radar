export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '37.036472',
      bl_lng: '27.425467',
      tr_lat: '41.11295',
      tr_lng: '42.70228',
      limit: '300',
    },
    headers: {
        'X-RapidAPI-Key': '4056d6deddmsha81d56f921ca289p1648cbjsn7eef52f3f973',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
      }
  };