import { formatDate } from '@/helpers';

import OverviewItem from './OverviewItem';

interface OverviewProps {
  data: {
    human_readable_total?: string;
    human_readable_daily_average?: string;
    best_day?: {
      text?: string;
      date?: string;
    };
    all_time_since_today?: {
      text?: string;
    };
    start_date?: string;
    end_date?: string;
  };
}

const Overview = ({ data }: OverviewProps) => {
  const dailyTotal = data?.human_readable_total;
  const dailyAverage = data?.human_readable_daily_average;
  const bestDayText = data?.best_day?.text;
  const bestDayDate = data?.best_day?.date;
  const allTimeSinceToday = data?.all_time_since_today?.text;
  const startDate = data?.start_date && formatDate(data.start_date);
  const endDate = data?.end_date && formatDate(data.end_date);
  const bestDay = bestDayDate && `${formatDate(bestDayDate)} (${bestDayText})`;
  return (
    <div className='mb-1 grid md:grid-cols-2 gap-3 py-2'>
      <OverviewItem label='Start Date' value={startDate} />
      <OverviewItem label='End Date' value={endDate} />
      <OverviewItem label='Daily Coding Average' value={dailyAverage} />
      <OverviewItem label='This Month Coding Time' value={dailyTotal} />
      <OverviewItem label='Best Day Coding Time' value={bestDay} />
      <OverviewItem label='All  ' value={allTimeSinceToday} />
    </div>
  );
};

export default Overview;
