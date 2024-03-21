import axios from 'axios';

const apiToken = '' //put in .env file when done
  
const pushWatchToAirtable = async (watchData) => {
    try {
      const response = await axios.post(
        'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tbl5gZ54BRQudvdM2',
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

export default pushWatchToAirtable;