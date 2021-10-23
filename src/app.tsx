import { FunctionComponent, MouseEvent } from 'react'

import { useSpring, animated, to } from 'react-spring'
import 'app.scss'

const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x: number, y: number) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x: number, y: number) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x: number, y: number) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x: number, y: number) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const App: FunctionComponent = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <div
      className="container"
      onMouseMove={({ clientX: x, clientY: y }: MouseEvent) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: to(props.xy, trans1) }} />
      <animated.div className="card2" style={{ transform: to(props.xy, trans2) }} />
      <animated.div className="card3" style={{ transform: to(props.xy, trans3) }} />
      <animated.div className="card4" style={{ transform: to(props.xy, trans4) }} />
    </div>
  )
}

export default App
