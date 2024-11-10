const RestProps =({ title, description, ...otherProps }) => {
return (
    <>
    <div {...otherProps}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    </>
)
}

export default RestProps;