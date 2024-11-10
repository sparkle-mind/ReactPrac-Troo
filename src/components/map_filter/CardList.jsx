import cardStyle from "../map_filter/cardList.module.css"


const CardList = ({data}) => {
  return (
    <>
      <li>
        
          <div className={cardStyle["card"] }>
            <img src={data.image_url} alt="Card Image" />
            <h3>{data.name}</h3>
            <p>
            {data.description}
            </p>
          </div>
      </li>
    </>
  );
};
export default CardList;
