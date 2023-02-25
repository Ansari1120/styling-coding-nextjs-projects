import Quarterlayout from "@/components/quarterlayout";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function q4() {
  const common = {
    duration: "Duration : 13 Weeks",
    outline: "Couse Outline:",
    label: "Course Description:",
  };
  return (
    <>
      <Quarterlayout
        centerHeading="Quarter IV"
        courseTitle="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
        Duration={common.duration}
        descriptionlabel={common.label}
        quarterDescription="In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in
production, write smart contracts, unit test them, and create user interfaces for them. We will also
learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop
Web 3 applications you also need to build on top of Web 2.0 technologies which we have already
covered in the previous quarters"
      />
      <Box
        fontWeight={"semibold"}
        color={"blue"}
        marginLeft={"15px"}
        marginTop={"-75px"}
        marginBottom={"-230px"}
      >
        <Link
          href={
            "https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db"
          }
        >
          Link
        </Link>
      </Box>

      <Quarterlayout
        outline={common.outline}
        quarterContents="1. Blockchain and Metaverse Theory
       "
        quarterContentText="The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
        "
        links={
          <Link
            href={
              "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
            }
          >
            Link
          </Link>
        }
      />
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Mastering Blockchain - Fourth Edition by Imran Bashir
          "
          links={
            <Link
              href={
                "https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="2. Smart Contract Development in Solidity
          "
          quarterContentText="Solidity Programming Essentials - Second Edition By Ritesh Modi
          "
          links={
            <Link
              href={
                "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
              }
            >
              Get Book
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Solidity Learning Repo
          "
          links={
            <Link
              href={
                "https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
              }
            >
              See Repo
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="3. Dapp Development using Ethers.js and Next.js 13
          "
          quarterContentText="Dapp Learning Repo
          "
          links={
            <Link href={"https://github.com/panaverse/dapps-nextjs"}>
              See Repo
            </Link>
          }
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="4. Tokennomics
          "
        />
      </Box>
      <Box mt="-210px">
        <Quarterlayout
          quarterContents="5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO
          "
          quarterContentText="As you probably know, the ICO ('Initial Coin Offering') industry has been
          booming, and it's completely reinventing the way new startups kickstart
          themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects and you'll notice that blockchain projects absolutely dominate the list.
          "
          links={
            <Link
              href={
                "https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
              }
            >
              See Details
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Understand the difference between IDO vs. IEO vs. ICO
          "
          links={
            <Link href={"https://phemex.com/blogs/what-is-a-dex-ido"}>
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Also check these links for latest listings:
          ICO list at ICO Drops          "
          links={<Link href={"https://icodrops.com/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="ICO List of Best New Initial Coin Offerings    "
          links={<Link href={"https://topicolist.com/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated
          Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs
           "
          links={<Link href={"https://cryptototem.com/ico-list/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="ICO List Online"
          links={<Link href={"https://www.icolistingonline.com/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Binance IEO List"
          links={
            <Link href={"https://coincodex.com/ieo-list/binance/"}>Link</Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Binance Launchpad
          "
          links={
            <Link
              href={
                "https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="IEO List"
          links={<Link href={"https://icomarks.com/ieo"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Polkastarter"
          links={<Link href={"https://polkastarter.com/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Project Part 1: How to Launch a IEO on Binance Launchpad
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Read How to Launch an IEO
          "
          links={
            <Link href={"https://appinventiv.com/blog/how-to-launch-an-ieo/"}>
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Your first task of the project is to make a google slides presentation on how to start a
          IEO on the Binance Launch Pad"
          links={
            <Link
              href={
                "https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Note: Also document the alternatives to Binance Launchpad.
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Project Part 2: How to Launch a IDO on Polkastarter
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Review the [list of top fundraising platforms
            "
          links={
            <Link href={"https://cryptorank.io/fundraising-platforms"}>
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Your second task of the project is to make a google slides presentation on how to
          start a IDO on the Polkastarter"
          links={<Link href={"https://polkastarter.com/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout quarterContentText="Project Part 3: Create a Pako Token" />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="By creating a token and related contracts, you'll also learn how to handle money
          sent to your contracts, which should come in handy if you want to create some kind
          of paid decentralized service in the future"
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Therefore, for the sake of this chapter, let's imagine that our Pako DApp uses its
          own coin – the Pako Token. We will create two contracts – one for the token itself
          and one for the token crowd sale (the ICO)"
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token
          should be to use OpenZeppelin contracts. You will use the Hardhat development
          environment. Also, write at least twenty automated tests. We will be using Solidity
          and Typescript for development"
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Project Part 4: Develop Crowd Sale Contract
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="This contract will be responsible for allowing users to exchange ETH for our Pako
          Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako
          Token)"
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Implement a payable buyToken() function.
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and
          the amount of Token bought"
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right
          after the contract is deployed, we want the token contract to send 75% of our token
          supply to it. While 25% remain in our personal 'owner' account."
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend
          address so that we are able to withdraw the ETH."
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="You can use the openzeppelin crowd sale contracts
          however you will have to update the code to the latest solidity version.
          "
          links={
            <Link
              href={"https://docs.openzeppelin.com/contracts/4.x/crowdsales"}
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Also write extensive tests, for example we will simply send a transaction of 1 ETH
          from a random account to the contract. After the transaction, we should expect the
          account to have received Pako, while the contract's balance should have been
          reduced.
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Note: Before you get started writing the token contract we suggest you review the
          access control"
          links={
            <Link
              href={
                "https://docs.openzeppelin.com/contracts/4.x/access-control"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Project Part 5: Trying it with MetaMask
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="While it's always good to test your code, it's often more satisfying to see the results
          of your work wrapped in a nice UI. Let's see how we can deploy our contracts and
          get some Pako tokens into our MetaMask wallet!
          We start by running our deployment scripts for the test network so that the new
          token contracts are uploaded and deployed.
          When it's done, take note of what addresses the contracts were uploaded to and
          copy it!
          Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract
          address. If your MetaMask wallet doesn't have any ethers, remember that you can
          use any faucet.
          After the transaction has been confirmed, you might be confused about why you
          can't see any tokens in your wallet. It turns out that you need to manually add the
          token address in MetaMask in order to 'register' it – after all, there are so many
          tokens out there, there's no way MetaMask could list them all by default!
          To do this, open the side menu and click on the 'Add token' button to get started:
          Once you're on the token page, click on 'Add custom token' and paste in the token
          contract's address in the address field.
          After confirming that you want to add the token, you should be able to see your
          Pako balance right next to your ETH balance in the wallet. How cool!
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Project Part 6: Trying it with Multisignature Wallets
          "
          links={
            <Link
              href={
                "https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
              }
            >
              Link
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Now use Gnosis Safe]{https://gnosis-safe.io/ with multi-sigs to do what you did in
          the last part."
          links={<Link href={"https://gnosis-safe.io/"}>Link</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Project Part 7: Sending Tokens using Ethers.js
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Write a Typescript program to send Pako Token to some friend's address using
          Ethers.js."
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="You may follow this tutorial
          "
          links={
            <Link
              href={
                "https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
              }
            >
              See Tutorial
            </Link>
          }
        />
      </Box>

      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
          "
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Read this NFT tutorial series
          "
          links={
            <Link
              href={
                "https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
              }
            >
              Visit
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Create a NFT contract using the [OpenZepplen ERC721 NFT Standard
            "
          links={
            <Link href={"https://docs.openzeppelin.com/contracts/4.x/erc721"}>
              Visit
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="You may use the Preset ERC721 contract
            "
          links={
            <Link
              href={
                "https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
              }
            >
              Visit
            </Link>
          }
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet
          and list it on OpenSea Marketplace for sale"
          links={<Link href={"https://opensea.io/"}>Visit</Link>}
        />
      </Box>
      <Box mt={{ lg: "-260px", base: "-300" }}>
        <Quarterlayout
          quarterContentText="Implement a ERC721 Market
          "
          links={
            <Link
              href={
                "https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
              }
            >
              Visit
            </Link>
          }
        />
      </Box>
    </>
  );
}
