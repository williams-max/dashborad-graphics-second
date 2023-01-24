// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/funnel
import { ResponsiveFunnel } from '@nivo/funnel'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveFunnel = () => {

    const data = [
        {
          "id": "step_sent",
          "value": 89212,
          "label": "Year 2023"
        },
        {
          "id": "step_viewed",
          "value": 54960,
          "label": "Year 2022"
        },
        {
          "id": "step_clicked",
          "value": 46277,
          "label": "Year 2021"
        },
        {
          "id": "step_add_to_card",
          "value": 29204,
          "label": "Year 2020"
        },
        {
          "id": "step_purchased",
          "value": 26105,
          "label": "Year 2019"
        }
      ]
    return (
        <ResponsiveFunnel
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            valueFormat=">-.4s"
            colors={{ scheme: 'spectral' }}
            borderWidth={20}
            labelColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        3
                    ]
                ]
            }}
            beforeSeparatorLength={100}
            beforeSeparatorOffset={20}
            afterSeparatorLength={100}
            afterSeparatorOffset={20}
            currentPartSizeExtension={10}
            currentBorderWidth={40}
            motionConfig="wobbly"
        />
    )
}

export default MyResponsiveFunnel