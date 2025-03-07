const MonthlySummaryItem = ({
  title,
  count,
  color,
  percentage,
}: {
  title: string;
  count: number;
  color: string;
  percentage: number;
}) => {
  return (
    <li className="flex flex-1 flex-col gap-8 rounded-8 bg-gray-100 p-16">
      <div className="flex items-center justify-between">
        <h4 className="body-14-500 text-gray-600">{title}</h4>
        <span className={`head-24-600 text-${color}`}>{count}</span>
      </div>
      <div className="relative h-8 w-full rounded-full bg-gray-300">
        <div
          className={`absolute left-0 top-0 h-8 rounded-full bg-${color}`}
          style={{ width: `${percentage}%` }}
          aria-label={`${percentage}% of shifts are ${title}`}
        />
      </div>
    </li>
  );
};

const MonthlySummaryCard = () => {
  const summaryItems = [
    { title: 'Open', count: 8, color: 'primary-400', percentage: 50 },
    { title: 'Middle', count: 8, color: 'orange-400', percentage: 50 },
    { title: 'Close', count: 8, color: 'green-400', percentage: 50 },
  ];

  return (
    <section className="mt-32 flex flex-col gap-16">
      <h3 className="body-18-600">Monthly Summary</h3>
      <ul className="flex gap-24">
        {summaryItems.map(item => (
          <MonthlySummaryItem
            key={item.title}
            title={item.title}
            count={item.count}
            color={item.color}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default MonthlySummaryCard;
