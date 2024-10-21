'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";


import { ResponsiveLine } from '@nivo/line';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }: any) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="basis"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default function Lines() {
    [
        {
            "id": "japan",
            "color": "hsl(116, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 76
                },
                {
                    "x": "helicopter",
                    "y": 250
                },
                {
                    "x": "boat",
                    "y": 293
                },
                {
                    "x": "train",
                    "y": 23
                },
                {
                    "x": "subway",
                    "y": 204
                },
                {
                    "x": "bus",
                    "y": 115
                },
                {
                    "x": "car",
                    "y": 173
                },
                {
                    "x": "moto",
                    "y": 127
                },
                {
                    "x": "bicycle",
                    "y": 112
                },
                {
                    "x": "horse",
                    "y": 55
                },
                {
                    "x": "skateboard",
                    "y": 177
                },
                {
                    "x": "others",
                    "y": 111
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(308, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 161
                },
                {
                    "x": "helicopter",
                    "y": 88
                },
                {
                    "x": "boat",
                    "y": 42
                },
                {
                    "x": "train",
                    "y": 296
                },
                {
                    "x": "subway",
                    "y": 140
                },
                {
                    "x": "bus",
                    "y": 106
                },
                {
                    "x": "car",
                    "y": 124
                },
                {
                    "x": "moto",
                    "y": 166
                },
                {
                    "x": "bicycle",
                    "y": 32
                },
                {
                    "x": "horse",
                    "y": 128
                },
                {
                    "x": "skateboard",
                    "y": 81
                },
                {
                    "x": "others",
                    "y": 180
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(104, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 120
                },
                {
                    "x": "helicopter",
                    "y": 151
                },
                {
                    "x": "boat",
                    "y": 163
                },
                {
                    "x": "train",
                    "y": 30
                },
                {
                    "x": "subway",
                    "y": 276
                },
                {
                    "x": "bus",
                    "y": 2
                },
                {
                    "x": "car",
                    "y": 245
                },
                {
                    "x": "moto",
                    "y": 18
                },
                {
                    "x": "bicycle",
                    "y": 268
                },
                {
                    "x": "horse",
                    "y": 271
                },
                {
                    "x": "skateboard",
                    "y": 248
                },
                {
                    "x": "others",
                    "y": 72
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(84, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 26
                },
                {
                    "x": "helicopter",
                    "y": 11
                },
                {
                    "x": "boat",
                    "y": 135
                },
                {
                    "x": "train",
                    "y": 232
                },
                {
                    "x": "subway",
                    "y": 290
                },
                {
                    "x": "bus",
                    "y": 232
                },
                {
                    "x": "car",
                    "y": 98
                },
                {
                    "x": "moto",
                    "y": 64
                },
                {
                    "x": "bicycle",
                    "y": 200
                },
                {
                    "x": "horse",
                    "y": 268
                },
                {
                    "x": "skateboard",
                    "y": 127
                },
                {
                    "x": "others",
                    "y": 146
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(182, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 151
                },
                {
                    "x": "helicopter",
                    "y": 251
                },
                {
                    "x": "boat",
                    "y": 175
                },
                {
                    "x": "train",
                    "y": 200
                },
                {
                    "x": "subway",
                    "y": 24
                },
                {
                    "x": "bus",
                    "y": 262
                },
                {
                    "x": "car",
                    "y": 168
                },
                {
                    "x": "moto",
                    "y": 275
                },
                {
                    "x": "bicycle",
                    "y": 212
                },
                {
                    "x": "horse",
                    "y": 187
                },
                {
                    "x": "skateboard",
                    "y": 147
                },
                {
                    "x": "others",
                    "y": 64
                }
            ]
        }
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Lines</CardTitle>
                <CardDescription>These are the stats of the year.</CardDescription>
            </CardHeader>

            <CardContent className="h-[100px] flex items-center w-full">
                <MyResponsiveLine data={data} />
            </CardContent>
        </Card>
    );
}