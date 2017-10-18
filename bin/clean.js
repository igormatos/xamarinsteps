#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("find . -iname \"bin\" -o -iname \"obj\" | xargs rm -rf");
shell.exec("echo Bin and obj folders removed");