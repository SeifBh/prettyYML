var YAML = require("json2yaml");

 


  function main (){
    const yaml = `#Generated at : Tue Dec 15 2020 12:26:37 GMT+0100 (GMT+01:00)
    ---
      endpoints.prometheus.sensitive: false
      eureka.client.enabled: true
      eureka.client.fetchRegistry: true
      eureka.client.registerWithEureka: true
      eureka.client.serviceUrl.defaultZone: "http://tatati:8080/eureka,http://eureka-server-bat-g:8080/eureka"
      eureka.instance.preferIpAddress: true
      gateway.callers.api-gateway.callerKeys: "api-gateway"
      gateway.callers.api-gateway.name: "api-gateway"
      gateway.callers.api-gateway.tokenFiltering: false
      gateway.callers.extranet.auth: "ROLE_USER"
      gateway.callers.extranet.callerKeys: "Rz2pbK3c7aY5siWb8Mt244kyDR6T4BF3"
      gateway.callers.extranet.codes.canal: "03"
      gateway.callers.extranet.codes.guichet: "03"
      gateway.callers.extranet.name: "extranet"
      gateway.callers.extranet.secret: "my-secret-token-to-change-in-production"
      gateway.callers.internet.auth: "ROLE_USER"
      gateway.callers.internet.callerKeys: "hye6XuPX62mXaC7jFkA66E4a8aHE62u8"
      gateway.callers.internet.codes.canal: "01"
      gateway.callers.internet.codes.guichet: "02"
      gateway.callers.internet.name: "internet"
      gateway.callers.internet.secret: "my-secret-token-to-change-in-production"
      gateway.callers.intranet.auth: "ROLE_ADMIN"
      gateway.callers.intranet.callerKeys: "a3QnemV79r6y8Ug3BdA3D73P54sQpNjD"
      gateway.callers.intranet.codes.canal: "02"
      gateway.callers.intranet.codes.guichet: "01"
      gateway.callers.intranet.name: "intranet"
      gateway.callers.intranet.secret: "9SyECk96oDsTmXfogIieDI0cD/8FpnojlYSUJT5U9I/FGVmBz5oskmjOR8cbXTvoPjX+Pq/T/b1PqpHX0lYm0oCBjXWICA=="
      gateway.defaultCallerName: "extranet"
      gateway.token-intra-apis-timetolive: 180
      hystrix.command.default.execution.timeout.enabled: false
      logging.config: "http://atititata:8080/"
      ribbon.ConnectTimeout: 30000
      ribbon.ReadTimeout: 30000
      server.port: 8080
      spring.http.multipart.max-file-size: "20MB"
      spring.http.multipart.max-request-size: "30MB"
      spring.metrics.prometheus.enabled: true
      ssl.keystore.passwordFile: "/selfcerts/passphrase"
      ssl.keystore.path: "/selfcerts/keystore.jks"
      token.secret: "my-secret-token-to-change-in-production"
      token.timetolive: 600000
      zuul.host.maxPerRouteConnections: 100
      zuul.host.maxTotalConnections: 1000
    `
    const obj = yaml.split('\n').map(line => line.trim()).filter(Boolean).reduce((a, k) => {
      const [key, value] = k.split(': ')
    
      key.split('.').reduce((r, e, i, arr) => {
        return r[e] || (r[e] = (arr[i + 1] ? {} : value))
      }, a)
    
      return a;
    }, {})
  
    var result =  YAML.stringify(obj)
    console.log(result)
    

  }

  main();