module.exports.config = {
  name: "🙃", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran Ahmed_X_Mahabub Rahman",
  description: "example",
  prefix: false,
  category: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🐨🥀"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=19d49_0kVksANWK_dWhijJYciyTL28NSy","https://drive.google.com/uc?id=19xCcjqVnxiNLlEzpQndWgZsyHaFAqEni","https://drive.google.com/uc?id=1A36v6oQ-uROruOQQuOAfo1CKRg_MLSVx","https://drive.google.com/uc?id=1A4IncrmSG5U7EOEjo4uziqRDQbGs4gHN","https://drive.google.com/uc?id=1A0PPm5-Nr_K819dURVugnHHXGfAPt2HN","https://drive.google.com/uc?id=1A8vd4U0cB0nvjBp0aWtVpu_Mqm14AVvN","https://drive.google.com/uc?id=19hYub5lP9tesXzDwOA9Rp7xPHnyr4pdy","https://drive.google.com/uc?id=18J-oIUff8gT7yf-HhRh_IWhdlF6GZtBP","https://drive.google.com/uc?id=17obwe8njLbpUlrib-wWUH7jkF138FYvx","https://drive.google.com/uc?id=186rJxO247aM-u87sJH59iLU1QDDhbe3B","https://drive.google.com/uc?id=189r_fv3rB2eJ2b49QyEaB1sgLYtyeyd-","https://drive.google.com/uc?id=14rPSaCJzfNa8cc2pM-YJvE16bZVlH7pV","https://drive.google.com/uc?id=17585edZNLDIYMbxZzYy3Xtqny1xWL9Ud","https://drive.google.com/uc?id=178dOeRg7vxjkX3EKBgg9z-c82Vj24_fn"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
