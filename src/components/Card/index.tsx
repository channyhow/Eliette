import { CardProps } from '../../types';

function Card({ data }: CardProps) {
  return (
    <div className="card">
      {data.map((entry) => (
        <div key={entry.id}>
          <img src={entry.image} alt="JL logo" style={{width:'200px'}}/>
          <a href={entry.url}><h1>{entry.primaryText}</h1></a>
          <h2>{entry.secondaryText}</h2>

        </div>
      ))}
    </div>

  );
}

export default Card;
