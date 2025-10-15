import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  feature: string;
  subExplain1: string;
  subExplain2: string;
}

export default function FeatureCard({
  icon,
  feature,
  subExplain1,
  subExplain2,
}: FeatureCardProps) {
  return (
    <div className="flex h-full w-400 flex-col items-center justify-center">
      <div className="mb-24 flex h-64 w-64 flex-col items-center justify-center rounded-50 bg-[rgba(0,0,0,0.1)]">
        {icon}
      </div>
      <div className="mb-16 text-xl font-semibold text-gray-900">{feature}</div>
      <div className="text-base text-gray-700">{subExplain1}</div>
      <div className="text-base text-gray-700">{subExplain2}</div>
    </div>
  );
}
