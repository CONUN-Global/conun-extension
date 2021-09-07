import Web3 from "web3";

const web3 = new Web3(process.env.WEB3_URL || "");

export default web3;
