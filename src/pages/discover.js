import BaseLayout from "@/components/BaseLayout";
import Layout from "@/components/Layout";
import Link from "next/link";
import TextAnimation from "@/components/TextAnimation";

import Head from "next/head";

const Fact = ({ title, type, img, link,summary }) => {
  return (
    <article className="article">
     
     
      <div className="spanType">
        <span className="type">
          {type}

        </span>
          <h2 className="title">
            {title}
          </h2>

          <p className="summary">
          {summary}
        </p>
      
        <div className="link">
        <Link
            href={link}
            target="_blank"
            className="targetLink"     
          >
           Visit
          </Link>

        </div>
      </div>
    </article>
  );
};


const Discover = () => {
  return (
  <>
     <Head>
        <title>Rahul | Projects </title>
      </Head>
        
    <BaseLayout>
    <main className="main">
    <Layout className="lay">
    <TextAnimation
            text="Have Fun While Developing!"
            className="TextMarg"
          />
    <div className="grid">
     <div className="collum"  >
     <Fact
        type="HTML, JavaScript and CSS Project"
        title="Bouncing Images"
        summary="A combination of HTML, JS and CSS to create bouncing images with one image that will take you to a different page.
        Project was done as an assignment for College."
        img={""}
        link=""
      />
      </div>
    </div>
    </Layout>
    </main>
    </BaseLayout>;
    

  </>
  )
};

export default Discover;
