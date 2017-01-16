/**
 * @flow
 */

import React, {Component} from 'react'

import {Store} from 'iflux2'

import log from 'log'
import {AppsActor} from './actor/AppsActor'
import {fetchApps} from './Webapi'

import type {StoreOptions} from 'iflux2'

export class HomeStore extends Store {

  constructor(props: StoreOptions = {debug: false}) {
    super(props)
    log(() => {
      window._sotre = this
    })
  }

  bindActor() {
    return [
      new AppsActor
    ]
  }

  init = async () => {
    const {err, res} = await fetchApps()
    if (err) {
      console.log('Error-->', err)
      return
    }
    this.dispatch("fetchApps", res)
  };
}
