'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

import { ResponsiveTimeRange } from '@nivo/calendar';

const MyResponsiveTimeRange = ({ data /* see data tab */ }: any) => {
    return (
        <ResponsiveTimeRange
            data={data}
            from="2024-01-01"
            to="2024-12-31"
            emptyColor="#eeeeee"
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
        />
    );
};

export default function Calendar() {    

    function generateDataForYear2024() {
        const data = [];
        let currentDate = new Date("2024-01-01");
        const endDate = new Date("2024-12-31");

        while (currentDate <= endDate) {
            const value = Math.floor(Math.random() * 301); // Random value between 0 and 300

            // Format the date as 'YYYY-MM-DD'
            const formattedDate = currentDate.toISOString().split('T')[0];

            data.push({
                "value": value,
                "day": formattedDate
            });

            // Move to the next day
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return data;
    }

    // Example usage:
    const dataArray = generateDataForYear2024();

    return (
        <Card>
            <CardHeader>
                <CardTitle>This Week</CardTitle>
                <CardDescription>lorem ipsum</CardDescription>
            </CardHeader>

            <CardContent className="h-[100px] flex items-center w-full">
                <MyResponsiveTimeRange data={dataArray} />
            </CardContent>
        </Card>
    );
}
