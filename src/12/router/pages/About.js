import {useChangeInput} from "../useChangeInput";


const About = ()=>{
    const [name, setName] = useChangeInput('');
    console.log(name);

    return (
        <>
        <h1>About</h1>
            <input type={'text'} value={name}
                   // onChange={(e)=>{setName(e.target.value)}}
            onChange={setName}
            />
        </>
    )
}

export default About;