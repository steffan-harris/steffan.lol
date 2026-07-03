import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./index.module.css";
import Heading from "../components/Heading";
import Summary from "../components/Summary";
import Logo from "../components/Logo";
import SummaryItem from "../components/SummaryItem";
import Avatar from "../components/Avatar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className={styles.homepage}>
      <Logo className={styles.logo} />
      <Heading className={styles.heading}>
        Frontend engineer specialising in React &amp; TypeScript
      </Heading>
      <div className={styles.contact}>
        <a href="mailto:hi@steffan.lol" title="Email me" aria-label="Email me">
          <Avatar className={styles.avatar} />
        </a>
        <a
          href="mailto:hi@steffan.lol"
          className={styles.link}
          title="Email me"
        >
          hi@steffan.lol
        </a>
      </div>
      <div className={styles.summaries}>
        <Summary heading="Skills" className={styles.summary}>
          <SummaryItem>React</SummaryItem>
          <SummaryItem>TypeScript</SummaryItem>
          <SummaryItem>HTML5</SummaryItem>
          <SummaryItem>CSS3</SummaryItem>
          <SummaryItem>Accessibility</SummaryItem>
          <SummaryItem>Testing</SummaryItem>
        </Summary>
        <Summary heading="Experience" className={styles.summary}>
          <SummaryItem>Sainsbury's</SummaryItem>
          <SummaryItem>Vodafone</SummaryItem>
          <SummaryItem>Bee Design Ltd</SummaryItem>
          <SummaryItem>Red Technology</SummaryItem>
        </Summary>
        <Summary heading="Links" className={styles.summary}>
          <SummaryItem>
            <Link
              to="/work-experience"
              className={styles.link}
              title="View my work experience"
            >
              Work Experience
            </Link>
          </SummaryItem>
          <SummaryItem>
            <a
              href="https://www.github.com/steffan-harris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              title="View my GitHub profile"
            >
              GitHub
            </a>
          </SummaryItem>
          <SummaryItem>
            <a
              href="https://www.linkedin.com/in/steffanharris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              title="View my LinkedIn profile"
            >
              LinkedIn
            </a>
          </SummaryItem>
        </Summary>
        <Summary heading="Playground" className={styles.summary}>
          <SummaryItem>
            <Link
              to="/playground"
              className={styles.link}
              title="View my particles playground"
            >
              Particles
            </Link>
          </SummaryItem>
          <SummaryItem>
            <a
              href="https://pet-dashboard.steffan.lol/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              title="View my Pet Dashboard project"
            >
              Pet Dashboard
            </a>
          </SummaryItem>
        </Summary>
      </div>
    </main>
  );
}
