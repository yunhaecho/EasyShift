import ChevronLeftLightGrayIcon from '@/assets/icons/chevron-left-lightgray.svg';
import ChevronRightLightGrayIcon from '@/assets/icons/chevron-right-lightgray.svg';

const HomePageSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-14">
      <nav className="flex h-42 w-full items-center justify-between">
        <div className="flex items-center gap-16">
          <ChevronLeftLightGrayIcon className="mb-5 animate-pulse" />
          <div className="h-40 w-170 animate-pulse rounded-4 bg-gray-200" />
          <ChevronRightLightGrayIcon className="mb-5 animate-pulse" />
        </div>
      </nav>

      <section className="w-full rounded-4 border border-gray-300 bg-white shadow-sm">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="body-16-500 p-16 text-gray-600">Shifts</th>
              {Array.from({ length: 7 }).map((_, index) => (
                <th key={index} className="body-16-500 p-16 text-center">
                  <div className="h-20 w-32 animate-pulse rounded-4 bg-gray-200" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 3 }).map((_, rowIndex) => {
              const bgColor =
                rowIndex % 3 === 0
                  ? 'bg-primary-100'
                  : rowIndex % 3 === 1
                    ? 'bg-orange-100'
                    : 'bg-green-100';

              return (
                <tr
                  key={rowIndex}
                  className="border-t border-gray-400 align-top"
                >
                  <td className="p-16">
                    <div className="h-20 w-40 animate-pulse rounded-4 bg-gray-200" />
                    <div className="mt-4 h-16 w-80 animate-pulse rounded-4 bg-gray-200" />
                  </td>
                  {Array.from({ length: 7 }).map((_, colIndex) => (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      className={`h-162 border-l border-gray-400 p-16 align-top ${bgColor}`}
                    >
                      <div className="flex flex-col gap-8">
                        {Array.from({
                          length: Math.floor(Math.random() * 2) + 1,
                        }).map((_, blockIndex) => (
                          <div
                            key={blockIndex}
                            className="h-40 w-full animate-pulse rounded-4 bg-gray-100 opacity-50"
                          />
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default HomePageSkeleton;
