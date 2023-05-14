import { IActivity } from '@/models';
import { FC } from 'react';

const ActivityCard: FC<IActivity> = ({
  activity,
  participants,
  price,
  type,
}) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{activity}</h2>
      <div className="space-y-2">
        <p>
          <strong className="text-gray-400">Participants:</strong>{' '}
          {participants}
        </p>
        <p>
          <strong className="text-gray-400">Price:</strong> {price}
        </p>
        <p>
          <strong className="text-gray-400">Type:</strong> {type}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
