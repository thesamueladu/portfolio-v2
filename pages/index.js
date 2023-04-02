import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Adu | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <div className="sm:grid grid-cols-2">
        <div>
          <h1 className="text-5xl mb-1">Samuel Adu</h1>
          <span className="font-thin">frontend developer</span>

          <div className="relative w-full h-72">
            <Image
              src="/images/illustration-mobile.avif"
              alt="developer sitting at a desk"
              fill
            />
          </div>

          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="#portfolio"
              className={`${utilStyles.btn} ${utilStyles.btnSecondary} w-36`}
            >
              Go To Portfolio
            </a>
            <a
              href="#contact"
              className={`${utilStyles.btn} ${utilStyles.btnPrimary} w-36`}
            >
              Contact me
            </a>
          </div>
        </div>

        <hr className={`${utilStyles.hr} sm:hidden`} />

        <div>
          <h2 className="text-4xl text-center sm:text-left">About Me</h2>

          <p className="text-base">
            I’m a front-end developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required.
          </p>

          <p>
            I’m based in Lagos, Nigeria, I’m happy working remotely and have
            experience in remote teams. When I’m not coding, you’ll find me
            outdoors. I never miss playing football on saturday morning because
            I can not afford gym membership and I need to stay fit.
          </p>

          <p>I’d love you to check out my work.</p>
        </div>
      </div>

      <hr className={`${utilStyles.hr} sm:hidden`} />

      <Portfolio />

      <Contact />
    </>
  );
}
