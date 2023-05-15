'use client';

import Activities from '@/app/Layouts/activities';
import FilterChips from '@/app/components/chips';
import { setupActivityTypes } from '@/service/activities';
import { useEffect, useState } from 'react';

export default function Home() {
  const [types, setTypes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!types) {
      setupActivityTypes().then((res) => {
        const uniqueList = res.filter((item: string, i: number) => {
          return res.indexOf(item) == i;
        });

        setTypes(uniqueList);
        setLoading(false);
      });
    }
  }, [types]);

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
        {loading ? (
          <p className="w-full text-center">
            Setting up activities 😅 please wait...
          </p>
        ) : (
          <FilterChips types={types ? types : []} />
        )}
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
        {types && <Activities />}
      </div>
    </main>
  );
}
