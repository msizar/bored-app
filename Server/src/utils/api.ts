import axios from 'axios';

interface RandomActivity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  key: string;
}

async function getRandomActivity(): Promise<RandomActivity> {
  try {
    const response = await axios.get(
      'https://www.boredapi.com/api/activity'
    );

    if (response.data) {
      return response.data as RandomActivity;
    } else {
      throw new Error('Invalid response');
    }
  } catch (error) {
    console.log('Error fetching activity:', error);
    throw error;
  }
}

export {
  getRandomActivity
};
