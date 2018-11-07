import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutation/mutation'
import getters from './getter/getter'
import actions from './actions/action'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutation/mutation',
      './actions/action',
      './getter/getter'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutation/mutation').default
      const newActions = require('./actions/action').default
      const newGetters = require('./getter/getter').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
