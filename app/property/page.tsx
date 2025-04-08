import B from "../components/B"
import FooNumber from "../components/FooNumber"


export default function Property() {
    const person = {
        name: "John",
        age: 30,
    }

    return (
        <div>
            <div> This is: <A name={person.name} age={person.age} /></div> <br />

            <div>This is: <B /></div> <br />

            <div>This is: <FooNumber /> </div>
        </div>
        
    )
    function A(person: { name: string; age: number }) {
        return (
            <>
                <div>SPARTA</div>
                <div>{person.name}</div>
                <div>{person.age}</div>
            </>
        )
    }
}