// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = () => {
    const data = [
        {
            "country": "AD",
            "January": 171,
            "JanuaryColor": "hsl(277, 70%, 50%)",
            "February": 112,
            "FebruaryColor": "hsl(325, 70%, 50%)",
            "May": 20,
            "MayColor": "hsl(35, 70%, 50%)",
            "june": 40,
            "juneColor": "hsl(230, 70%, 50%)",
            "pp1": 169,
            "pp1Color": "hsl(339, 70%, 50%)",
            "April": 117,
            "AprilColor": "hsl(181, 70%, 50%)"
        },
        {
            "country": "AE",
            "January": 81,
            "JanuaryColor": "hsl(18, 70%, 50%)",
            "February": 36,
            "FebruaryColor": "hsl(1, 70%, 50%)",
            "May": 38,
            "MayColor": "hsl(295, 70%, 50%)",
            "june": 196,
            "juneColor": "hsl(235, 70%, 50%)",
            "pp1": 149,
            "pp1Color": "hsl(167, 70%, 50%)",
            "April": 8,
            "AprilColor": "hsl(144, 70%, 50%)"
        },
        {
            "country": "AF",
            "January": 137,
            "JanuaryColor": "hsl(320, 70%, 50%)",
            "February": 164,
            "FebruaryColor": "hsl(273, 70%, 50%)",
            "May": 62,
            "MayColor": "hsl(114, 70%, 50%)",
            "june": 174,
            "juneColor": "hsl(80, 70%, 50%)",
            "pp1": 11,
            "pp1Color": "hsl(301, 70%, 50%)",
            "April": 158,
            "AprilColor": "hsl(21, 70%, 50%)"
        },
        {
            "country": "AG",
            "January": 125,
            "JanuaryColor": "hsl(43, 70%, 50%)",
            "February": 30,
            "FebruaryColor": "hsl(154, 70%, 50%)",
            "May": 93,
            "MayColor": "hsl(72, 70%, 50%)",
            "june": 174,
            "juneColor": "hsl(68, 70%, 50%)",
            "pp1": 166,
            "pp1Color": "hsl(32, 70%, 50%)",
            "April": 72,
            "AprilColor": "hsl(356, 70%, 50%)"
        },
        {
            "country": "AI",
            "January": 181,
            "JanuaryColor": "hsl(353, 70%, 50%)",
            "February": 69,
            "FebruaryColor": "hsl(217, 70%, 50%)",
            "May": 79,
            "MayColor": "hsl(316, 70%, 50%)",
            "june": 192,
            "juneColor": "hsl(67, 70%, 50%)",
            "pp1": 144,
            "pp1Color": "hsl(197, 70%, 50%)",
            "April": 170,
            "AprilColor": "hsl(162, 70%, 50%)"
        },
        {
            "country": "AL",
            "January": 124,
            "JanuaryColor": "hsl(282, 70%, 50%)",
            "February": 152,
            "FebruaryColor": "hsl(292, 70%, 50%)",
            "May": 88,
            "MayColor": "hsl(297, 70%, 50%)",
            "june": 121,
            "juneColor": "hsl(221, 70%, 50%)",
            "pp1": 181,
            "pp1Color": "hsl(297, 70%, 50%)",
            "April": 135,
            "AprilColor": "hsl(82, 70%, 50%)"
        },
        {
            "country": "AM",
            "January": 112,
            "JanuaryColor": "hsl(122, 70%, 50%)",
            "February": 103,
            "FebruaryColor": "hsl(163, 70%, 50%)",
            "May": 69,
            "MayColor": "hsl(188, 70%, 50%)",
            "june": 111,
            "juneColor": "hsl(290, 70%, 50%)",
            "pp1": 85,
            "pp1Color": "hsl(243, 70%, 50%)",
            "April": 159,
            "AprilColor": "hsl(108, 70%, 50%)"
        }
    ]

    return (
        <ResponsiveBar
            data={data}
            keys={[
                'January',
                'February',
                'May',
                'june',
                'July',
                'April'
            ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'pp1'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'May'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'months',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
        />
    )
}

export default MyResponsiveBar