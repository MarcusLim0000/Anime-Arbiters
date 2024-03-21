import axios from 'axios';

const apiToken = '' //put in .env file when done

const watchUrl = 'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tbl5gZ54BRQudvdM2';

const deleteWatchFromAirTable = async (recordId) => {
  try {
    const response = await axios.delete(`${watchUrl}/${recordId}`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Watch deleted from Airtable:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting watch data from Airtable:', error);
    throw error;
  }
};

export default deleteWatchFromAirTable;