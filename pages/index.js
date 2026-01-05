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
        <p>Current university students, recent grads, and dropouts in US and Canada focused on Engineering, CS, Math or alternative technical tracks.</p>
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
        <p>The fellowship runs for 8 weeks, from end of February to end of April 2026. There will also be a weekly 1hr fireside chats we expect all fellows to attend.</p>
      )
    },
    {
      question: "Do you need a registered company to apply?",
      answer: (
        <p>No! You can apply as an individual pursuing a deeply sophisticated idea and already have a company in mind.</p>
      )
    },
    // {
    //   question: "What are the terms of the capital?",
    //   answer: (
    //     <p>$75,000 investment for 1% equity MFN SAFE. We are also a full-stack venture fund, so if you've already raised capital, we are able to work with you on a case-by-case basis. </p>
    //   )
    // },
    {
      question: "What is the application process?",
      answer: (
        <p>Applications will be reviewed on a rolling basis and close on January 24th. We will notify all accepted Fellows by February 10th, 2026.</p>
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
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  Founder Fellows<br />
                  <span style={{ fontWeight: 400, fontSize: '0.8em' }}>by <em>Upfront Ventures</em></span>
                </h1>
                <p className={styles.heroSubtitle}>
                  A fellowship for the next generation of technical builders and researchers.
                </p>
                <p className={styles.heroDescription}>
                  Upfront Ventures is launching its first-ever Founder Fellows program. If you're hacking on projects, leading technical teams, or preparing to launch your first venture, this program is designed to provide everything one could need to get off the ground!
                </p>
                <p className={styles.heroDescription}>
                  Over 8 weeks, Fellows receive direct exposure to Upfront's partners, attend the <a href="https://youtu.be/VBBqxPVEWeU?si=SXKFeIFqZFPugwgl" target="_blank" rel="noopener noreferrer"><strong>Upfront Summit</strong></a>, join intimate fireside chats with category-defining founders, and plug into our network of builders and operators.
                </p>
                <p className={styles.heroDescription}>
                  AND, we'll back you with <strong>$75,000+</strong> when you incorporate a{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>venture-backable startup</span>!
                </p>
                <a href="https://upfrontfounderfellows.typeform.com/upfrontventures" target="_blank" rel="noopener noreferrer" className={styles.heroBadge}>
                  APPLY TODAY
                </a>
              </div>
              <div className={styles.heroImages}>
                <div className={styles.imageCollage}>
                  <img 
                    src="/images/Summit Photo.jpeg" 
                    alt="Upfront Summit" 
                    className={styles.collageImage1}
                  />
                  <img 
                    src="/images/Upfront_Team_Picture.png" 
                    alt="Upfront Team" 
                    className={styles.collageImage2}
                  />
                </div>
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
                <p>Recieve a $75,000+ investment on incorporation of a venture-backable startup.</p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Upfront Summit</h3>
                <p>Join us in LA for the <a href="https://youtu.be/VBBqxPVEWeU?si=SXKFeIFqZFPugwgl" target="_blank" rel="noopener noreferrer"><strong>Upfront Summit</strong></a>, where you'll connect with leading founders, investors, and operators at one of the world's premier tech events.</p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Mentorship</h3>
                <p>Paired 1:1 with an investor at Upfront who specializes in your area of interest.</p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Fireside Chats</h3>
                <p>Private sessions with Upfront Partners and founders from our fastest-growing portfolio companies.</p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Community</h3>
                <p>Join a tight-knit community of ambitious founders and builders from across the country.</p>
              </div>
              <div className={styles.benefitItem}>
                <h3> Year-Round Events</h3>
                <p>Invited to mixers, dinners, and Upfront gatherings in LA, NYC, SF, Boston, Philly, and more!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Who We're Looking For
            </h2>
            <div className={styles.whoList}>
              <div className={styles.whoItem}>
                <div className={styles.whoContent}>
                  <h3 className={styles.whoItemTitle}>The Founder </h3>
                  <p>You're graduating this spring with multiple internships at hyper-growth startups. You're ready to start a company ASAP.</p>
                </div>
              </div>
              <div className={styles.whoItem}>
                <div className={styles.whoContent}>
                  <h3 className={styles.whoItemTitle}>The Dropout </h3>
                  <p>You left school to join a leading AI lab full-time. You're one of the best builders in the world, and others know it.</p>
                </div>
              </div>
              <div className={styles.whoItem}>
                <div className={styles.whoContent}>
                  <h3 className={styles.whoItemTitle}>The Engineer</h3>
                  <p>Recently graduated and working at a hyper-growth startup. You want to start a company but aren't quite ready to pull the trigger.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
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
            <a href="https://upfrontfounderfellows.typeform.com/upfrontventures" target="_blank" rel="noopener noreferrer" className={styles.heroBadge}>
              APPLY TODAY
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
