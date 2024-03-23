import axios from 'axios';

const apiToken = process.env.API_TOKEN

const recUrl = 'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tblFjmy2ZuNzDvZmj';

const watchUrl = 'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tbl5gZ54BRQudvdM2';

export async function deleteRecFromAirTable(recordId) {
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
  }

export async function getRecFromAirTable()  {
    try {
      const response = await axios.get(recUrl,
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

export async function pushRecToAirtable (recData) {
    try {
      const response = await axios.post(recUrl,
        {
          fields: {
            image: recData.image,
            score: recData.score,
            title: recData.title
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Recommendation added to Airtable:', response.data);
    } catch (error) {
      console.error('Error adding recommendation to Airtable:', error);
    }
  };

export async function deleteWatchFromAirTable(recordId) {
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

export async function getWatchFromAirTable() {
    try {
      const response = await axios.get(watchUrl,
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

export async function pushWatchToAirtable(watchData) {
    try {
      const response = await axios.post(watchUrl,
        {
          fields: {
            image: watchData.image,
            score: watchData.score,
            title: watchData.title
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('To watch added to Airtable:', response.data);
    } catch (error) {
      console.error('Error adding show to Airtable:', error);
    }
  };