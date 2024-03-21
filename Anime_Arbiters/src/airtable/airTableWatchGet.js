import axios from 'axios';

const apiToken = '' //put in .env file when done

const watchUrl = 'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tbl5gZ54BRQudvdM2'

const getWatchFromAirTable = async () => {
  try {
    const response = await axios.get(watchUrl
      ,
      {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Watch data fetched from Airtable:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error fetching watch data from Airtable:', error);
    throw error;
  }
};

export default getWatchFromAirTable;