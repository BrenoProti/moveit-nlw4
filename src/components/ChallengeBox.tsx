import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
            <header>
                Ganhe 400 xp
            </header>

            <main>
                <img src="icons/body.svg" alt="Icone Exercicio Fisico"/>
                <strong>Novo desafio</strong>
                <p>Levante e faça uma caminhada de 3 minutos.</p>
            </main>

            <footer>
                <button 
                type="button"
                className={styles.challengeFailedButton}>
                    Falhei
                </button>
                <button 
                type="button"
                className={styles.challengeSucceededButton}>
                    Completei
                </button>
            </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up Icon" />
            Avance level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
