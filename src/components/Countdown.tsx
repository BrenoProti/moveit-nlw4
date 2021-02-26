import { useState, useEffect } from 'react';
import styles from '../styles/components/Contdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(60*25);
    }

    useEffect(()=> {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])


    return(
        <div>
            <div className={styles.contdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                disabled 
                className={styles.coutdownButton}>
                    Ciclo encerrado...
                </button>
            ) : (
                <>
                    { isActive ? (
                    <button onClick={resetCountDown} type="button" className={`${styles.coutdownButton} ${styles.coutdownButtonActive}`}>
                        Abandonar ciclo
                    </button>
                    ) : (
                    <button onClick={startCountDown} type="button" className={styles.coutdownButton}>
                        Iniciar um ciclo
                    </button>
                        )}
                </>
            )}

            
            
        </div>
    )
}