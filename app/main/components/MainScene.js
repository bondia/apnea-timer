import React from 'react'

import { routesEnum } from '../enums/routes'

import Menu from './Menu'

class MainScene extends React.PureComponent {

    render() {
        return (
            <Menu style={{ marginTop: 64 }} />
        )
    }
}

export default MainScene
