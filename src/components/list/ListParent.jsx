import { ListChild } from "./ListChild"

export const ListParent = ()=>{
    const numberList=[5,6,7,8]
    return (
        <>
            <ListChild
                numberList={numberList} // if i this props is not available then it return fruits array list.
            />
        </>
    )
}
