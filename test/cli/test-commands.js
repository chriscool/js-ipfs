/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const repoPath = require('./index').repoPath
const ipfs = require('../utils/ipfs')(repoPath)
const describeOnlineAndOffline = require('../utils/on-and-off')

describe('commands', () => {
  describeOnlineAndOffline(repoPath, () => {
    it('list the commands', () => {
      return ipfs('commands').then((out) => {
        expect(out.split('\n')).to.have.length(56)
      })
    })
  })
})
