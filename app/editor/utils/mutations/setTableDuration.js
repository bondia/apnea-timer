import * as enums from '../../enums'

export default function setTableDuration(data = null) {
    if (!data) {
        return data
    }

    // loop sets to calculate duration
    let duration = 0
    data.getIn([ 'table', 'sets' ]).forEach((e) => {
        const mode = e.get('mode')
        if (enums.SET_MODE_INITIAL == mode || enums.SET_MODE_RUNNING == mode) {
            duration += e.get('duration')
        }
    })

    // set duration
    return data.setIn([ 'entity', 'duration'], duration)
}
