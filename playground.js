/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _description, _creator, _owner, _edition) {
    const NFT = {
        name : _name,
        description : _description,
        creator : _creator,
        owner : _owner,
        edition : _edition
    }
    nftCollection.push(NFT);
    console.log("Minted : " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\n");

    nftCollection.forEach((element) => {
        console.log("Name : " , element["name"]);
        console.log("Description : ", element["description"]);
        console.log("Creator : ", element["creator"]);
        console.log("Owner : ", element["owner"]);
        console.log("Edition : ", element["edition"]);
        console.log("\n")
    })
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFT : ${nftCollection.length}`);
}


// call your functions below this line
mintNFT("CryptoKitties", "Collectible digital cats on the blockchain.","Dapper Labs", "Bob","Special Edition #42");
mintNFT("Space Exploration","NFT collection featuring space-themed artwork.", "Jane Smith", "Eve", "Artist Proof");
mintNFT("Virtual Real Estate", "Own and trade virtual land in a metaverse.", "Virtual Ventures","Mallory","Alpha Release");
mintNFT("CryptoPunks","Unique 8-bit punk characters as NFTs.", "Larva Labs", "Charlie", "Original Series");
mintNFT( "Sports Legends","Collectible NFTs featuring iconic sports moments.", "SportsCollectibles", "David","Championship Edition");
listNFTs();
getTotalSupply();
