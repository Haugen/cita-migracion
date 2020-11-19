import { h } from 'preact';

const ResultsList = ({ results }) => {
  const buildList = () => {
    const list = [];
    for (let result of results) {
      list.push(<li>{result}</li>);
    }
    if (list.length > 0)
      return (
        <>
          <p>Yay, the following days have available appointments</p>
          <ul>{list}</ul>
          <p>
            Go to{' '}
            <a href="https://www.migracioncolombia.gov.co/tramites-y-servicios/58-servicios/agendar-su-cita">
              https://www.migracioncolombia.gov.co/tramites-y-servicios/58-servicios/agendar-su-cita
            </a>{' '}
            to book.
          </p>
        </>
      );
    return <p>No available appointments found :(</p>;
  };

  if (results) return buildList();
};

export default ResultsList;
