import imagem from "/grimm.png";

import styles from "./Home.module.scss";
import Span from "../../components/Span";
import Section from "../../components/Section";
import Games from "../../components/Games";

import useFetch from "../../hooks/useFetch.tsx";
import { IGameInfo } from "../../interfaces/ICardInfo.ts";

const Home = () => {
  const URL_API: string = "https://blog-api-kj8x.onrender.com/api";
  // const URL_API: string = "http://localhost:3000/api";

  const { data } = useFetch<IGameInfo[]>(URL_API);

  return (
    <>
      <section className={styles.section}>
        <img src={imagem} alt="grimm nighmare" />
        <div>
          <h1>
            Hello there! <br />
            Eu sou o <Span color="blue">Grimmkin</Span>!
          </h1>
          <p>
            Há três anos me aventuro nas práticas de lidar com a Dama Fortuna,
            mais conhecida como
            <Span color="blue"> RPG</Span>. Ao longo desse tempo, narrei
            sistemas como
            <Span color="red"> Dungeons & Dragons</Span>,
            <Span color="green"> Mutante: Ano Zero</Span> e
            <Span color="purple"> Vaesen RPG</Span>. Meu objetivo? Recrutar
            novos jogadores para a arte de rolar dados!
          </p>
        </div>
      </section>
      <Section title="Campanhas " span="atuais">
        {data ? (
          data
            .filter(
              (info) => info.type === "campanha" && info.status === "Postado"
            )
            .map((info) => (
              <Games
                key={info.id_page}
                image={info.image}
                name={info.title}
                span={info.system}
                sinopse={info.sinopse}
                id={info.id_page}
                tags={info.tags}
              />
            ))
        ) : (
          <>
            <Span color="blue">
              Os goblins estão trazendo os dados. Favor, aguardar alguns
              instantes...
            </Span>
          </>
        )}
      </Section>
    </>
  );
};

export default Home;
