const Slide = ({ data }) => {
    return (
        <>
            <li>
                <div className="card">
                    <img src={data.image_url} alt="Card Image" />
                    <div className="card-desc-row">
                        <h3>{data.name}</h3>
                        <h5>{data.type}</h5>

                    </div>
                    <p>
                        {data.description}
                    </p>
                </div>
            </li>
        </>
    )
}
export default Slide;