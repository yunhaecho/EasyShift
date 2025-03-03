import { ReactNode } from "react";

interface FeatureCardProps {
    icon : ReactNode,
    feature: string,
    subExplain1: string,
    subExplain2 : string
}

    export default function FeatureCard ({icon, feature, subExplain1, subExplain2} : FeatureCardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-400 h-full">
            <div className="flex flex-col items-center justify-center rounded-50 bg-[rgba(0,0,0,0.1)] w-64 h-64 mb-24">
                {icon}
            </div>
            <div className="text-gray-900 text-xl font-semibold mb-16">{feature}</div>
            <div className="text-gray-700 text-base">{subExplain1}</div>
            <div className="text-gray-700 text-base">{subExplain2}</div>
        </div>
    )
}