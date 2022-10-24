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
  const enemy = enemyReducer(state.enemy, action)
  const player = playerReducer(state.player, action)
  const misc = miscReducer(state.misc, action)

  return { enemy, player, misc }
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
