import { createContext, useContext, useReducer } from 'react'
import { create as serverCreate, reducer as serverReducer } from '../server'
import { create as accountCreate, reducer as accountReducer } from '../account'

const initial = {
  server: serverCreate(),
  account: accountCreate(),
}

const Context = createContext()

const reducer = (state, action) => {
  // apply each update
  const server = serverReducer(state.enemy, action)
  const account = accountReducer(state.player, action)

  return {server, account}
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

export function useNetworkContext() {
  return useContext(Context);
}
