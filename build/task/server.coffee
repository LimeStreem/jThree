connect = require 'gulp-connect'
proxy = require 'proxy-middleware'
url = require 'url'
class Server

  getTaskNames:(config)=>
    'server'

  task:(name,config)=>
    connect.server
      root: './src',
      port: 8081,
      livereload: false
    connect.server
      root: config.serverRoot
      livereload: true,
      middleware: (connect,o)->
        [
          (->
            options = url.parse 'http://localhost:8081/'
            options.route = '/source'
            proxy(options)
          )()
        ]

module.exports = Server
