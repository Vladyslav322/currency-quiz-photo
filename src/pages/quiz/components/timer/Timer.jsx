import React, { useEffect, useRef, useState } from 'react';
import classes from './Timer.module.scss';
import { PROGRESS_BAR_COLORS } from '../../constants';

const FULL_PROGRESS_WIDTH = 100;

const Timer = ({ seconds, timeoutCallback, shouldRerender }) => {
    const [progressWidth, setProgressWidth] = useState(FULL_PROGRESS_WIDTH);
    const [progressColor, setProgressColor] = useState(classes[PROGRESS_BAR_COLORS.green]);

    const timeInterval = useRef(undefined);
    const timeout = useRef(undefined);

    const updateProgressWidth = () => {
        setProgressWidth((previousWidth) => {
            const widthPerSecond = previousWidth - (FULL_PROGRESS_WIDTH / seconds);

            return widthPerSecond > 0 ? widthPerSecond : 0;
        });
    };

    const resetTimer = () => {
        if (timeInterval.current) {
            clearInterval(timeInterval.current);
        }

        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        setProgressWidth(FULL_PROGRESS_WIDTH);
    };

    const runTimer = () => {
        timeInterval.current = setInterval(() => updateProgressWidth(), 1_000);

        timeout.current = setTimeout(() => {
            resetTimer();
            timeoutCallback();
        }, (seconds + 1) * 1_000);
    };

    const updateProgressColor = () => {
        let color;

        switch (true) {
            case (progressWidth > 60):
                color = PROGRESS_BAR_COLORS.green;
                break;
            case (progressWidth > 30):
                color = PROGRESS_BAR_COLORS.orange;
                break;
            default:
                color = PROGRESS_BAR_COLORS.red;
                break;
        }

        setProgressColor(classes[color]);
    };

    useEffect(() => {
        resetTimer();
        runTimer();
    }, [shouldRerender]);

    useEffect(() => {
        return () => resetTimer();
    }, []);

    useEffect(() => updateProgressColor(), [progressWidth]);

    return (
        <div style={ {width: `${ progressWidth }%`} } className={ `${ classes.progressBar } ${ progressColor }` }></div>
    );
};

export default Timer;
