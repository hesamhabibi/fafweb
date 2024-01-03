import {useMemo} from "react";

import Icon from "./Icon";

export default function Stars({value, size, className}) {

    // -----------------------------------------------------------------------------------------------------------------

    const renderStars = useMemo(() => {
        return (
            <>
                {
                    [0,1,2,3,4].map(item => (
                        <Icon name="Star" fill="currentColor" strokeWidth={0} size={size === 'lg' ? 32 : size === 'md' ? 25 : size === 'xs' ? 13 : 17} className="text-secondary text-opacity-12" key={item}/>
                    ))
                }
                <div className="position-absolute top-0 start-0 bottom-0 end-0 text-nowrap overflow-hidden text-primary" style={{width: `${value ? value * 20 : 0}%`}}>
                    {
                        [0,1,2,3,4].map(item => (
                            <Icon name="Star" fill="currentColor" strokeWidth={0} size={size === 'lg' ? 32 : size === 'md' ? 25 : size === 'xs' ? 13 : 17} key={item}/>
                        ))
                    }
                </div>
            </>
        )
    }, [value, size])

    // -----------------------------------------------------------------------------------------------------------------

    return (
        <span className={`position-relative d-inline-block lh-0 stars${className ? ` ${className}` : ''}`}>{renderStars}</span>
    );
}