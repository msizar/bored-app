import express from 'express';
import activitiesController from '../controllers/activityController';
import activityController from '../controllers/activityController';

const router = express.Router();


router.get('/', activitiesController.getAllActivities);
router.get('/setup', activitiesController.createMultipleActivities);
router.get('/:id', activitiesController.getActivityById);
router.delete('/:id', activityController.deleteActivity);
router.post('/', activitiesController.createActivity);

export default router;
