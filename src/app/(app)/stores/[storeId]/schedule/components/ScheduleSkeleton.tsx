'use client';

const ScheduleSkeleton = () => {
  return (
    <div className="h-full w-full animate-pulse p-30">
      {/* Header Skeleton */}
      <div className="mb-40 flex h-40 w-full flex-row justify-between">
        <div className="flex gap-12">
          {/* Filter Button Skeletons */}
          <div className="h-40 w-120 rounded-8 bg-gray-200" />
          <div className="h-40 w-120 rounded-8 bg-gray-200" />
        </div>
        {/* Add Schedule Button Skeleton */}
        <div className="h-40 w-160 rounded-8 bg-gray-200" />
      </div>

      {/* Table Skeleton */}
      <div className="rounded-8 border border-gray-200">
        {/* Table Header */}
        <div className="flex border-b border-gray-200 p-16">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex-1 px-16">
              <div className="h-24 rounded-4 bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Table Rows */}
        {[...Array(5)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex border-b border-gray-100 p-16 last:border-b-0"
          >
            {[...Array(5)].map((_, colIndex) => (
              <div key={colIndex} className="flex-1 px-16">
                <div className="h-20 rounded-4 bg-gray-100" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSkeleton;
