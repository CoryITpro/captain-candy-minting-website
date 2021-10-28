require("dotenv").config()
const CaptainCandy = artifacts.require("CaptainCandy")
const baseURI = process.env.BASE_URI

module.exports = function (deployer) {
  deployer.deploy(CaptainCandy, baseURI)
}
