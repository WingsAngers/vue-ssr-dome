import { createApp } from './create-app'
import { resolve } from 'dns';

const { app, router } = createApp()

export default context => {
  return new Promise((resolve, reject) => {

    router.push(context.url)

    router.onRendy(() => {
      const matchedComponents = router.getMatchedComponents()
      if (matchedComponents.length) {
        return reject( new Error('no component matched') )
      }
      resolve(app)
    })
  })
}