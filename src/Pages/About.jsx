import { useContext } from "react"
import NoteContext from "../Components/Elements/NoteContext"

const About = () => {
    const value=useContext(NoteContext)
  return (
    <div>this is about {value.name } and he read in class {value.class}</div>
  )
}

export default About
