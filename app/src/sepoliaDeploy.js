// If you want to deploy in a Testnet like Sepolia && Goerli, need to pass this params to the contract constructor:
// The command to deploy is: npx hardhat run app\src\sepoliaDeploy.js --network sepolia
const contractName = "Escrow";
const arbiter = "";
const beneficiary = "";

async function main() {
  const Scrow = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const scrow = await Scrow.deploy();
  console.log(`${contractName} deployed to address: ${scrow.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });