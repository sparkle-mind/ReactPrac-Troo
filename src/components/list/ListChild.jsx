export const ListChild = ({ numberList }) => {
  const fruits = ["apple", "mango", "banana", "grapes"];  // Define fruits here

  // Use the default value if numberList is not provided
  const listToRender = numberList || fruits;

  return (
    <>
      <ul>
        {listToRender.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
