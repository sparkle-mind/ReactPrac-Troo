import { ListChild } from "./ListChild"

export const ListParent = ()=>{
    const numberList=[5,6,7,8]
    return (
        <>
            <ListChild
                ListElementTag="ul" // you can set any tag here as a value like ul,div,h5 etc and variable or component as well,
                numberList={numberList} // if i this props is not available then it return fruits array list.
            />
        </>
    )
}
