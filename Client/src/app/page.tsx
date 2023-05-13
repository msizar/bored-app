'use client';

import Activities from '@/Layouts/activities';
import FilterChips from '@/components/chips';
import { IActivity, IChip } from '@/models';
import { getActivities } from '@/service/activities';
import { Suspense } from 'react';

const filterData: IChip[] = [
  { title: 'hello', active: false },
  { title: 'hellows', active: false },
  { title: 'hellowq', active: true },
  { title: 'helloqq', active: false },
  { title: 'helloqq', active: false },
  { title: 'helloqq', active: false },
  { title: 'helloqq', active: false },
  { title: 'helloqq', active: false },
];

export default async function Home() {
  const activities: unknown = await getActivities();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
        <FilterChips types={filterData} filter={() => console.log('filter')} />
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
        <Suspense fallback={<div>Loading...</div>}>
          <Activities activities={activities as IActivity[]} />
        </Suspense>
      </div>
    </main>
  );
}
