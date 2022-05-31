"use strict";

const output = {
  home: (req, res) => {
    res.render("./home/index");
  },
  login: (req, res) => {
    res.render("./home/login");
  },
};

const users = {
  id: ["Nemoo", "yeeSiSi", "Bettoo"],
  psWord: ["1234", "12345", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psWord = req.body.psWord;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psWord[idx] === psWord) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = { output, process };
