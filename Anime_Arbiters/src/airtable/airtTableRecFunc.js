import axios from 'axios';

const apiToken = '' //put in .env file when done
  
const pushRecToAirtable = async (recData) => {
    try {
      const response = await axios.post(
        'https://api.airtable.com/v0/appN98ICSAtzIwO9h/tblFjmy2ZuNzDvZmj',
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

export default pushRecToAirtable;