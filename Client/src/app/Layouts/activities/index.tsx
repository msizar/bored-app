import ActivityCard from '@/app/components/activity';
import { IActivity } from '@/models';
import { getActivities } from '@/service/activities';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState<IActivity[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const filter = searchParams.toString();

  const handleGetActivities = (searchFilter?: string) => {
    getActivities(searchFilter).then(
      (data: IActivity[]) => {
        setActivities(data);
        setIsLoading(false);
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    setActivities([]);
    setIsLoading(true);
    handleGetActivities(filter);
  }, [filter]);

  useEffect(() => {
    if (!activities && isLoading) {
      handleGetActivities();
    }
  }, [activities, isLoading]);

  return (
    <div className="bg-white p-6 sm:p-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Exciting activities from the Bored API
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how do do things your own way.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {isLoading ? (
            <p className="w-full text-center">
              Setting up activities 😅 please wait...
            </p>
          ) : (
            activities &&
            activities.map((activity) => (
              <ActivityCard {...activity} key={activity._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Activities;
