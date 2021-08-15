const fs = global.nodemodule['fs-extra'];
module.exports.config = {
  name: "fix-spam",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "fix-spam chửi bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event}) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  //var idgr = `${event.threadID}`;
  var userID = `${event.senderID}`;
  //var nameUser = await nameID[event.senderID].name;

  if ((event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "bot như cc") || (event.body.toLowerCase() == "bot nhu cc") ||  (event.body.toLowerCase() == "bot củ lồn") || (event.body.toLowerCase() == "bot như lon") || (event.body.toLowerCase() == "bot ngu lon") || (event.body.toLowerCase() == "bot này như bìu")) {
    data.banned = 1;
    data.dateAdded = time;
    //global.data.threadBanned.set(idgr, { reason: data.reason, dateAdded: data.dateAdded });
    global.data.userBanned.set(userID, { dateAdded: data.dateAdded });
    //return api.sendMessage(`Nhóm ${idgr} của bạn đã bị ban, không thể sử dụng bot!, lý do: chửi bot `, threadID);
    return api.sendMessage(`Bạn đã bị ban, không thể sử dụng bot!, lý do: chửi bot `, threadID)
  };

  if ((event.body.toLowerCase() == "bot lồn") || (event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("dm con ml rác rưỡi", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó") || (event.body.toLowerCase() == "bot oc")) {
    return api.sendMessage("óc chó mới chửi bot, cmm súc vật học", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") || (event.body.toLowerCase() == "bot oi")) {
    return api.sendMessage("Dạ, có em đây, yêu em không mà gọi <3. hmm...", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ko biết yêu, yêu admin bot kia kìa :))", threadID);
  };

  if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };
}

module.exports.run = function({ api, event }) { }