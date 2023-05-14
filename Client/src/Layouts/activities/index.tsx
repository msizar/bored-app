import ActivityCard from '@/components/activity';
import { IActivity } from '@/models';
import { getActivities } from '@/service/activities';
import { FC, Suspense, use } from 'react';

const Activities: FC = () => {
  const activities: IActivity[] = use(getActivities());

  return (
    <div className="bg-white p-6 sm:p-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Suspense fallback={<div>Loading...</div>}>
            {activities.map((activity) => (
              <ActivityCard {...activity} key={activity.key} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Activities;
