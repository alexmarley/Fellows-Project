import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Who can apply?",
      answer: (
        <p>Current students in US and Canada studying Engineering, CS, Mathor alternative technical tracks.</p>
      )
    },
    {
      question: "How many Fellows will be selected?",
      answer: (
        <p>We will select 8 to 10 Fellows for each cohort.</p>
      )
    },
    {
      question: "When is the Upfront Summit?",
      answer: (
        <p>The Upfront Summit is held on the last week of February 2026 in Los Angeles.</p>
      )
    },
    {
      question: "What is the duration of the program?",
      answer: (
        <p>The fellowship runs for 8 weeks, from end of February to end of April 2026.</p>
      )
    },
    {
      question: "Do you need a registered company to apply?",
      answer: (
        <p>No! You can apply as an inidivdual pursueing a deeply sophisticated idea and already have a company in mind.</p>
      )
    },
    {
      question: "What are the terms of the capital?",
      answer: (
        <p>$75,000 investment for 1% equity MFN SAFE. We are also a full-stack venture fund, so if you've already raised capital, we are able to work with you on a case-by-case basis. </p>
      )
    },
    {
      question: "What is the application process?",
      answer: (
        <p>Applications will be reviewed on a rolling basis. We will notify all accepted Fellows by February 10th, 2026.</p>
      )
    }
  ]

  return (
    <>
      <Head>
        <title>Founder Fellows</title>
        <meta name="description" content="A fellowship for the next generation of researchers and builders." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>
              Founder Fellows<br />
              <span style={{ fontWeight: 400, fontSize: '0.8em' }}>by <em>Upfront Ventures</em></span>
            </h1>
            <p className={styles.heroSubtitle}>
              A fellowship for the next generation of technical builders and researchers.
            </p>
            <p className={styles.heroDescription}>
              Upfront Ventures is launching its first-ever Founder Fellows program, built for ambitious technical students who aspire to build generational companies. If you're hacking on projects, leading technical teams, or preparing to launch your first venture, this program is designed to give you everyone one could need to get off the ground!
            </p>
            <p className={styles.heroDescription}>
              Over 8 weeks, Fellows receive direct exposure to Upfront's partners, attend the <strong>Upfront Summit</strong>, join intimate fireside chats with category-defining founders, and plug into our network of builders and operators.
            </p>
            <p className={styles.heroDescription}>
              AND, we back founders with <strong>$75,000</strong> when they incorporate a venture-backable startup!
            </p>
            <a href="#" className={styles.heroBadge}>
              APPLY TODAY
            </a>
          </div>
        </section>

        {/* Why We Built This Fellowship Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Why We Built This Fellowship
            </h2>
            <div className={styles.whySectionContent}>
              <div className={styles.whyText}>
                <p>
                  We're creating a small, tight-knit cohort that gets ongoing mentorship, hands-on insight into venture and company-building, and year-round access to Upfront events.
                </p>
                <p>
                  It is easier than ever to build a company, and AI is accelerating the access to technology. We're excited to empower the next generation of builders from day -1.
                </p>
              </div>
              <div className={styles.whyImage}>
                <img src="/images/Summit Photo.jpeg" alt="Founder Fellows" />
              </div>
            </div>
          </div>
        </section>

        {/* What Fellows Receive Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} >What Fellows Receive</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <h3> Capital</h3>
                <p>Each Fellow receives a $75,000 dollar investment from Upfront to support early exploration and company building. </p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Upfront Summit</h3>
                <p>We are flying Fellows to LA to attend one day of the Upfront Summit, which is LA's top tech event for founders, investors, and operators.</p>
                <p style={{marginTop: '1rem'}}>Learn more about last year's summit <a href="https://upfront.com/summit" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>!</p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Mentorship</h3>
                <p>Each fellow will be paired with an investor at Upfront which specializes in your area of interest who you'll get to meet with 1:1. </p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Fireside Chats</h3>
                <p>Fellows get a chance to learn directly from Upfront partners and founders across the portfolio, while getting to directly ask questions to some our fastest growing portfolio companies. </p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Community</h3>
                <p>Fellows join a tight-knit community of ambitious technical founders, building lasting relationships with peers who are also on the path to launching their first venture. </p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Year-Round Events</h3>
                <p>Fellows are invited to mixers, dinners, and local Upfront gatherings in Los Angeles, New York, San Francisco, Boston, Philadelphia, and other cities where our team is active. </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>FAQs</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon}>
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <a href="#" className={styles.heroBadge}>
              APPLY TODAY
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
