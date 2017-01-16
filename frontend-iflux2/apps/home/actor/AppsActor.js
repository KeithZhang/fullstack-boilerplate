/**
 * @flow
 */

import {Actor, Action} from 'iflux2'

import type {ActorState} from 'iflux2'

export class AppsActor extends Actor {

  defaultStatus() {
    return {
      apps: []
    }
  }

  @Action("fetchApps")
  fetchApps(state: ActorState, apps: any) {
    return state.set('apps', apps)
  }
}