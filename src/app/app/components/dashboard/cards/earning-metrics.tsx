import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have utility class merging

interface EarningsMetricProps {
  title: string;
  value: string;
  percentage: number;
}

export const EarningsMetricCard = ({
  title,
  value,
  percentage
}: EarningsMetricProps) => {
  const variant = percentage > 0 ? 'positive' : percentage < 0 ? 'negative' : 'neutral';
  
  const variantStyles = {
    positive: {
      border: 'border border-[#70BF73]',
      bg: 'bg-[#EDF7EE]',
      text: 'text-[#70BF73]'
    },
    negative: {
      border: 'border border-[#F44336]',
      bg: 'bg-[#FEECEB]',
      text: 'text-[#F44336]'
    },
    neutral: {
      border: 'border border-[#64656f]',
      bg: 'bg-[#E8E8EA]',
      text: 'text-[#64656f]'
    }
  };

  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-[#dddddd] p-4 shadow-[0px_4px_12px_0px_#1018281F] bg-white">
      <p className="text-neutral-black-300 lg:text-body1 lg:leading-body1 text-body2 leading-body2">
        {title}
      </p>
      <div className="flex items-center gap-[10px] sm:flex-col lg:flex-row sm:items-start">
        <h5 className="text-subtitle leading-subtitle lg:text-h5 lg:leading-h5 font-medium text-neutral-black-600">
          {value}
        </h5>
        <span
          className={cn(
            'flex items-center gap-1 rounded-[360px] p-2 text-body2 leading-body2 font-medium',
            variantStyles[variant].border,
            variantStyles[variant].bg,
            variantStyles[variant].text
          )}
        >
          {variant !== 'neutral' && (
            variant === 'positive' ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )
          )}
          <span>{percentage > 0 ? '+' : ''}{percentage}%</span>
        </span>
      </div>
    </div>
  );
};