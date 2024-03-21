import axios from 'axios';

const apiToken = '' //put in .env file when done

const recUrl = 'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tblFjmy2ZuNzDvZmj';

const deleteRecFromAirTable = async (recordId) => {
  try {
    const response = await axios.delete(`${recUrl}/${recordId}`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Recommendation deleted from Airtable:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting recommendation data from Airtable:', error);
    throw error;
  }
};

export default deleteRecFromAirTable;
