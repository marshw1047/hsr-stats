import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const transitions = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1},
        leave: {opacity: 0},
    })

    // className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    // mask className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

        </nav>
    )
}

export default Navigation