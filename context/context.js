import { createContext, useContext, useReducer } from 'react'
import { bat, reducer as enemyReducer } from '../enemies'

const initial = {
  enemy: bat()
}

const Context = createContext()

const reducer = (state, action) => {
  const enemy = enemyReducer(state.enemy, action)
  return { enemy }
}

export function ContextProvider(props) {
  const [items, dispatch] = useReducer(reducer, initial);

  const value = { items, dispatch };

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  );
}

export function useGameContext() {
  return useContext(Context);
}
