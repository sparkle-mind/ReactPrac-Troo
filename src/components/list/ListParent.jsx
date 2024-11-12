import { ListChild } from "./ListChild"
import RestProps from "./RestProps";

export const ListParent = () => {
    const numberList = [5, 6, 7, 8]
    const extraProps = {
        className: 'custom-class',
        style: {
            backgroundColor: 'lightgray',
            margin: "15px",
            padding: "15px"
        }
    };

    return (
        <>
            <ListChild
                ListElementTag="ul" // you can set any tag here as a value like ul,div,h5 etc and variable or component as well,
                numberList={numberList} // if i this props is not available then it return fruits array list.
            />

            <RestProps title="Spreading Props to a Component ..." description="This is a description" {...extraProps} />


        </>
    )
}
