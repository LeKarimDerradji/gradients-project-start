import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientPill from "./GradientPill"
import GradientTag from "./GradientTag"
import {useState} from 'react'

const Gradient = ({ name, colorStart, colorEnd, tags, setFilterName}) => {
  let [value, setValue] = useState(false)

  const classNameValue='btn btn-sm me-2 mb-2 text-light bg-dark'
  const classNameDisabled='btn btn-sm me-2 mb-2 bg-light'

  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <div className="mt-3">
          {tags.map((tag) => {
            return (
              <GradientTag key={tag} tagName={tag} setFilterName={setFilterName} value={value} setValue={setValue} classNameValue={classNameValue} classNameDisabled={classNameDisabled}/>
            )
          })}
        </div>
      </div>
    </li>
  )
}

export default Gradient