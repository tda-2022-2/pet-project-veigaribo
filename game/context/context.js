import { createContext, useContext, useReducer } from 'react'
import { create as enemyCreate, reducer as enemyReducer } from '../enemies'
import { create as playerCreate, reducer as playerReducer } from '../player'
import { create as miscCreate, reducer as miscReducer } from '../misc'

const initial = {
  enemy: enemyCreate(),
  player: playerCreate(),
  misc: miscCreate()
}

const Context = createContext()

const reducer = (state, action) => {
  const scheduled = []
  const schedule = (action) => scheduled.push(action)

  // apply each update
  const enemy = enemyReducer(schedule, state.enemy, action)
  const player = playerReducer(schedule, state.player, action)
  const misc = miscReducer(schedule, state.misc, action)

  const newState = { enemy, player, misc }
  return scheduled.reduce((acc, action) => reducer(acc, action), newState)
}

export function ContextProvider(props) {
  const [items, dispatch] = useReducer(reducer, initial);
  const value = { data: items, dispatch };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
}

export function useGameContext() {
  return useContext(Context);
}
