
import React from 'react';

import '../scss/main.scss';

import LOGO_MAIN from '../images/LOGO_MAIN.png';

class Logo extends React.Component {
    render() {
        return (
            <div id="logo" class="info-title-wrapper">
                <div class="site-title-wrapper">
                    {/* <a href="/site" class="home-link"> */}
                        <img src={LOGO_MAIN} alt="Justin Lam" class="logo" />
                    {/* </a> */}
                </div>
            </div>
        )
    }
}

export default Logo;