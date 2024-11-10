export const ListChild = ({ numberList , ListElementTag }) => {
  const fruits = ["apple", "mango", "banana", "grapes"];  // Define fruits here
console.log(ListElementTag);

  // Use the default value if numberList is not provided
  const listToRender = numberList || fruits;

  return (
    <>
      <ListElementTag>
        {listToRender.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListElementTag>
    </>
  );
};
