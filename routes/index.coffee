
#
# * GET home page.
# 
"use strict"
exports.index = (req, res) ->
  res.render "index",
    title: "Express"

