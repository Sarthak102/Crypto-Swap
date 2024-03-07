import { ethers } from "ethers";
import CustomDexABI from "../deploy/artifacts/contracts/CustomEx.sol/CustomDex.json";
import CustomTokenABI from "../deploy/artifacts/contracts/CustomEx.sol/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  
  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      address,
      CustomTokenABI.abi,
      signer
    );

    return contractReader;

  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      "0xE5301293FfA5bCFA67DAEb8Df1Fa9558D6F87f84",
      CustomDexABI.abi,
      signer
    );
    return contractReader;
  }
};
 