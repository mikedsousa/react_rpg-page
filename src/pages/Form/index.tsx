import Button from "./Button";
import Fieldset from "./Fieldset";
import styles from "./Form.module.scss";
import Label from "./Label";

const Form = () => {
  return (
    <>
      <form className={styles.form}>
        <Fieldset legend="Requisitos da plataforma">
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
        </Fieldset>
        <Fieldset legend="Sobre você">
          <Label type="text" htmlFor="name">
            Como eu devo te chamar?
            <span>Não que eu vá te chamar assim...</span>
          </Label>
          <Label type="text" htmlFor="contact">
            Como eu entro em contato com você?
            <span>Discord é obrigatório...</span>
          </Label>
          <Label type="text" htmlFor="discord">
            Usuário do discord...
            <span>Caso não tenha passado o discord na questão anterior...</span>
          </Label>
          <Label type="text" htmlFor="xp" input={false}>
            Descreva brevemente sua experiência com RPG...
            <span>
              Para garantir que não vou colocar um HexPaladin com alguém que
              acha Ranger uma classe viável.
            </span>
          </Label>
          <Label type="text" htmlFor="character" input={false}>
            Descreva brevemente o personagem que tem em mente para a campanha...{" "}
            <span>
              Não me venha com humano guerreiro, pelo amor de Moradin!
            </span>
          </Label>
          <Label type="text" htmlFor="robo">
            Confirme que você não é um robô...
            <span>Vai que...</span>
          </Label>
        </Fieldset>
        <Button>Enviar</Button>
      </form>
    </>
  );
};

export default Form;
