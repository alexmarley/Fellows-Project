import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const carouselIntervalRef = useRef(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const benefits = [
    {
      title: "Capital",
      description: "Each Fellow receives a $75,000 dollar investment from Upfront to support early exploration and company building."
    },
    {
      title: "Upfront Summit",
      description: (
        <>
          We are flying Fellows to LA to attend one day of the Upfront Summit, which is LA's top tech event for founders, investors, and operators.
          <p style={{marginTop: '1rem'}}>Learn more about last year's summit <a href="https://upfront.com/summit" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>!</p>
        </>
      )
    },
    {
      title: "Mentorship",
      description: "Each fellow will be paired with an investor at Upfront which specializes in your area of interest who you'll get to meet with 1:1."
    },
    {
      title: "Fireside Chats",
      description: "Fellows get a chance to learn directly from Upfront partners and founders across the portfolio, while getting to directly ask questions to some our fastest growing portfolio companies."
    },
    {
      title: "Community",
      description: "Fellows join a tight-knit community of ambitious technical founders, building lasting relationships with peers who are also on the path to launching their first venture."
    },
    {
      title: "Year-Round Events",
      description: "Fellows are invited to mixers, dinners, and local Upfront gatherings in Los Angeles, New York, San Francisco, Boston, Philadelphia, and other cities where our team is active."
    }
  ]

  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % (benefits.length - 2))
    }, 5000)

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current)
      }
    }
  }, [])

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
            <div className={styles.heroBadgeTop}>
              <span className={styles.badgeDot}></span>
              Now accepting applications
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleHighlight}>8 weeks</span> to build<br />
              <span className={styles.titleAccent}>something</span> <span className={styles.titleAccent}>real</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              The Founder Fellows program is for ambitious technical builders ready to go from zero to one—with the backing of LA's most active early-stage VC.
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

        {/* What Fellows Receive Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle} >What Fellows Receive</h2>
            <div className={styles.carouselWrapper}>
              <div 
                className={styles.benefitsCarousel}
                style={{ transform: `translateX(-${carouselIndex * 33.333}%)` }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
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
