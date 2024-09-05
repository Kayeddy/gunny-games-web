import Image from "next/image";
import FaqsInformationModal from "../modals/landing/FaqsInformationModal";
import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-8 pb-8 mt-32 lg:flex-row lg:px-32 h-max">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/assets/icons/logo1024_100.webp"
          alt="Gunny Games logo"
          width={300}
          height={200}
          className="object-cover"
        />
        <p className="hidden text-white lg:block">© 2024 Gunny Games.</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[30px] text-center">FAQS</h1>
        <ul className="flex flex-col items-start justify-center w-full gap-2">
          <FaqsInformationModal
            modalTrigger={<li>Who or What is Gunny?</li>}
            title="Gunny: Pioneering the future of fun on the blockchain"
            content={
              <div className="flex flex-col items-start justify-start gap-4">
                Gunny Studios is a pioneering video game development company
                that integrates blockchain technology to deliver an enhanced and
                unique user experience. Our mission is to elevate gameplay to a
                new level, where blockchain technology serves not just as a tool
                for financial speculation but as an essential component that
                allows players to enjoy a more secure item collection and
                transparent exchanges between users.
              </div>
            }
          />
          <FaqsInformationModal
            modalTrigger={<li>What's the Buzz About Gunny Rush?</li>}
            title="Experience the Thrill with Gunny Rush"
            customSize="2xl"
            content={
              <div className="flex flex-row items-start justify-start gap-4">
                <Image
                  src="/assets/icons/GUNNYRUSH2_100.webp"
                  alt="Gunny Rush logo"
                  width={300}
                  height={100}
                  className="hidden object-cover mx-auto lg:block"
                />
                <p>
                  Get ready for an endless adventure in Gunny Rush, the
                  arcade-style endless runner game that will revolutionize your
                  gaming experience! Using the powerful technology of the
                  Algorand network, Gunny Rush offers you a completely new way
                  to have fun and earn rewards at the same time.
                  <br />
                  <br />
                  In Gunny Rush, you'll have the opportunity to play with
                  different Inugis, each with a unique appearance and special
                  abilities based on different elements. These adorable and
                  powerful companions can be obtained through exciting airdrops
                  or the Gacha system on our website.
                </p>
              </div>
            }
          />
          <FaqsInformationModal
            modalTrigger={<li>How Do I Jump In?</li>}
            title="Get Started: Your Adventure Begins Here"
            content={
              <div className="flex flex-col items-start justify-start gap-4">
                <p>
                  Access Gunny Rush from your mobile device and connect to your
                  Pera Wallet to get started. As you play, you’ll dive into a
                  vibrant and exciting world where fun knows no limits. Run,
                  jump, and dodge obstacles while mining valuable tokens. The
                  more you play, the more rewards you’ll earn! The tokens you
                  earn will be split between your personal wallet and the weekly
                  prize pool, where the top players will compete for
                  extraordinary rewards.
                </p>
              </div>
            }
          />
          <FaqsInformationModal
            modalTrigger={<li>Spotted a Bug? Let's Squash It Together!</li>}
            title="Bug Squashed: We're Here to Help!"
            content={
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <p>
                  Oops! Found something that's not working quite right? We're
                  here to help!
                </p>
                <p>
                  Reach out to us on our Discord channel or tweet us on Twitter.
                  Our team is always ready to assist and ensure you have the
                  best experience possible.
                </p>
                <Divider className="my-4 text-white bg-slate-500" />
                <span className="flex flex-row items-center self-center justify-around gap-8 mx-auto">
                  <Link
                    href="https://discord.com/invite/SX6bkkHcAD"
                    rel="noreferrer"
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-white"
                  >
                    <FaDiscord />
                    <p>Reach out via Discord</p>
                  </Link>
                  <Link
                    href="https://x.com/Gunny_es"
                    rel="noreferrer"
                    target="_blank"
                    className="flex flex-row items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:text-white"
                  >
                    <FaTwitter />
                    <p>Leave us a message on Twitter</p>
                  </Link>
                </span>
              </div>
            }
          />
        </ul>
      </div>

      <p className="mt-10 text-white lg:hidden">© 2024 Gunny Games.</p>
    </div>
  );
}
