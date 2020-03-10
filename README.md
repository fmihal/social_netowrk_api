# social_network_api
Full social network API built with Node.js


## Installation instruictions:

```
git clone <repo url>
yarn install
mkdir config && cd config
touch default.json
```

 Inside your default.json file you should have following fields 
 
 ```json 
 {
  "mongoURI": "<your mongo uri>",
  "jwtSecret": "<secret token>",
  "githubClientID": "gihub clienmt ID",
  "githubClientSecret": "github secret"
}
 ```

run ```yarn server ```
