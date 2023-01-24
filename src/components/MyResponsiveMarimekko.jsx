// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/marimekko
import { ResponsiveMarimekko } from '@nivo/marimekko'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveMarimekko = () => {
    const data=[
        {
          "statement": "it's good",
          "participation": 14,
          "stronglyAgree": 28,
          "agree": 32,
          "disagree": 8,
          "stronglyDisagree": 22
        },
        {
          "statement": "it's sweet",
          "participation": 16,
          "stronglyAgree": 2,
          "agree": 0,
          "disagree": 9,
          "stronglyDisagree": 19
        },
        {
          "statement": "it's spicy",
          "participation": 22,
          "stronglyAgree": 32,
          "agree": 13,
          "disagree": 23,
          "stronglyDisagree": 19
        },
        {
          "statement": "worth eating",
          "participation": 18,
          "stronglyAgree": 20,
          "agree": 29,
          "disagree": 2,
          "stronglyDisagree": 10
        },
        {
          "statement": "worth buying",
          "participation": 14,
          "stronglyAgree": 29,
          "agree": 7,
          "disagree": 12,
          "stronglyDisagree": 7
        }
      ]
    return (
        <ResponsiveMarimekko
            data={data}
            id="statement"
            value="participation"
            dimensions={[
                {
                    id: '1° trimester',
                    value: 'stronglyDisagree'
                },
                {
                    id: '2° trimester',
                    value: 'disagree'
                },
                {
                    id: '3° trimester',
                    value: 'agree'
                },
                {
                    id: '4° strongly',
                    value: 'stronglyAgree'
                }
            ]}
            innerPadding={9}
            axisTop={null}
            axisRight={{
                orient: 'right',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 0
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'participation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Qquarters',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
            colors={{ scheme: 'spectral' }}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'rgba(0, 0, 0, 0)',
                    color: 'inherit',
                    rotation: -45,
                    lineWidth: 4,
                    spacing: 8
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'agree strongly'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'disagree strongly'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 80,
                    itemsSpacing: 0,
                    itemWidth: 140,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'right-to-left',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'square',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default MyResponsiveMarimekko