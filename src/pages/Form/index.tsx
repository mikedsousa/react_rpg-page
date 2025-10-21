import styles from "./Form.module.scss";

const Form = () => {
  return (
    <>
      <form className={styles.form}>
        <fieldset className={styles.form_control}>
          <legend className={styles.form_control__title}>
            Requisitos da plataforma
          </legend>
          <p className={styles.form_control__text}>
            Antes de tudo, minhas mesas acontecem na plataforma FoundryVTT, que
            infelizmente não possui suporte para dispositivos móveis, sendo
            assim necessário ter um computador para poder participar das
            sessões.
          </p>
          <p className={styles.form_control__text}>
            Ao enviar esse formulário, você confirma que possui um computador
            com os requisitos mínimos para a plataforma!
          </p>
        </fieldset>
        <fieldset className={styles.form_control}>
          <div>
            <legend className={styles.form_control__title}>Dados</legend>
            <span>Não o de rolar...</span>
          </div>
          
        </fieldset>
      </form>
    </>
  );
};

export default Form;
