import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const DashboardApp = () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,

            onNavigate: ({ pathname: nextPathname }) => {

                // console.log('nextPathname', nextPathname);

                const { pathname } = history.location;

                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
        });

        history.listen(onParentNavigate);

    }, []);

    return (
        <div ref={ref} />
    )
}

export default DashboardApp