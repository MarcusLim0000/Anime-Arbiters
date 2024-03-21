import axios from 'axios'; 

const apiToken = '' //put in .env file when done

const recUrl = 'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tblFjmy2ZuNzDvZmj'

const getRecFromAirTable = async () => {
  try {
    const response = await axios.get(recUrl
      ,
      {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Recommendation data fetched from Airtable:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendation data from Airtable:', error);
    throw error;
  }
};

export default getRecFromAirTable;