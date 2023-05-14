import { Request, Response } from 'express';
import Activity from '../models/activity.model';
import { getRandomActivity } from '../utils/api';

async function getAllActivities(req: Request, res: Response) {
  try {
    const activities = await Activity.find({});
    res.json(activities);
  } catch (error) {
    console.log('Error fetching activities from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getActivityById(req: Request, res: Response) {
  try {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.json(activity);
  } catch (error) {
    console.log('Error fetching activity from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteActivity(req: Request, res: Response) {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    
    if(!activity) {
      return res.status(404).json({error: "Activity not found"})
    }

    res.json({ message: 'Activity deleted successfully' });

  } catch(error) {
    console.log('Error deleting activity from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createActivity(req: Request, res: Response) {
  try {
    const activity = await getRandomActivity();

    const newActivity = new Activity({
      activity: activity.activity,
      type: activity.type,
      participants: activity.participants,
      price: activity.price,
      key: activity.key,
    });

    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    console.log('Error creating activity in MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createMultipleActivities(req: Request, res: Response) {
  try {

    const count = 20; // Number of times to create activities (default: 1)
    let types = [];

    let activities = await Activity.find({})

    if(activities.length < 20) {
      for (let i = 0; i < count; i++) {
        const activity = await getRandomActivity();
  
        const newActivity = new Activity({
          activity: activity.activity,
          type: activity.type,
          participants: activity.participants,
          price: activity.price,
          key: activity.key,
        });
  
        types.push(newActivity.type)      
        await newActivity.save();
      }
    } else {
      types = activities.map(activity => activity.type)
    }

   

    res.json(types);
  } catch (error) {
    console.log('Error creating activities in MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default {
  createMultipleActivities,
  getAllActivities,
  getActivityById,
  createActivity,
  deleteActivity
};
