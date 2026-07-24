import React from 'react'
import { Link, useNavigate } from 'react-router'
import '../style/landing.scss'

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <div className='landing-page'>

            {/* ── Sticky Navigation ── */}
            <nav className='landing-nav'>
                <div className='landing-nav__inner'>
                    <div className='landing-nav__logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                        <span>InterviewAI</span>
                    </div>
                    <div className='landing-nav__links'>
                        <a href='#features'>Features</a>
                        <a href='#how-it-works'>How It Works</a>
                        <a href='#stats'>Results</a>
                    </div>
                    <div className='landing-nav__actions'>
                        <Link to='/login' className='button ghost-button'>Log In</Link>
                        <Link to='/register' className='button primary-button'>Get Started</Link>
                    </div>
                </div>
            </nav>

            {/* ── Hero Section ── */}
            <section className='hero-section'>
                <div className='hero-section__inner'>
                    <div className='hero-section__content'>
                        <div className='hero-badge'>
                            <span className='hero-badge__dot' />
                            AI-Powered Interview Prep
                        </div>
                        <h1>
                            Ace Every Interview<br />
                            with <span className='hero-keyword'>Personalized</span><br />
                            Strategies
                        </h1>
                        <p className='hero-section__subtitle'>
                            Paste a job description, upload your resume, and get a complete interview 
                            strategy — tailored technical questions, behavioral prep, skill gap analysis, 
                            and a day-by-day roadmap.
                        </p>
                        <div className='hero-section__cta'>
                            <button className='button primary-button hero-btn' onClick={() => navigate('/register')}>
                                Start Preparing Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>
                            <a href='#how-it-works' className='button neutral-button'>See How It Works</a>
                        </div>
                    </div>
                    <div className='hero-section__visual'>
                        <div className='hero-card'>
                            <div className='hero-card__header'>
                                <span className='hero-card__tag hero-card__tag--green'>92% Match</span>
                                <span className='hero-card__tag'>Senior Frontend</span>
                            </div>
                            <div className='hero-card__body'>
                                <div className='hero-card__line hero-card__line--w80' />
                                <div className='hero-card__line hero-card__line--w60' />
                                <div className='hero-card__line hero-card__line--w90' />
                                <div className='hero-card__line hero-card__line--w40' />
                            </div>
                            <div className='hero-card__metrics'>
                                <div className='hero-card__metric'>
                                    <span className='hero-card__metric-value'>12</span>
                                    <span className='hero-card__metric-label'>Questions</span>
                                </div>
                                <div className='hero-card__metric'>
                                    <span className='hero-card__metric-value'>7</span>
                                    <span className='hero-card__metric-label'>Day Plan</span>
                                </div>
                                <div className='hero-card__metric'>
                                    <span className='hero-card__metric-value'>3</span>
                                    <span className='hero-card__metric-label'>Skill Gaps</span>
                                </div>
                            </div>
                        </div>
                        <div className='hero-floating hero-floating--1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            Technical Prep
                        </div>
                        <div className='hero-floating hero-floating--2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            Behavioral Q&A
                        </div>
                        <div className='hero-floating hero-floating--3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                            Roadmap
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Section ── */}
            <section className='stats-section' id='stats'>
                <div className='stats-section__inner'>
                    <div className='stat-block'>
                        <span className='stat-block__number'>10,000+</span>
                        <span className='stat-block__label'>Reports Generated</span>
                    </div>
                    <div className='stat-divider' />
                    <div className='stat-block'>
                        <span className='stat-block__number'>95%</span>
                        <span className='stat-block__label'>User Satisfaction</span>
                    </div>
                    <div className='stat-divider' />
                    <div className='stat-block'>
                        <span className='stat-block__number'>500+</span>
                        <span className='stat-block__label'>Companies Targeted</span>
                    </div>
                </div>
            </section>

            {/* ── Features / Pain Points (Dark Section) ── */}
            <section className='features-section' id='features'>
                <div className='features-section__inner'>
                    <div className='features-section__header'>
                        <h2>Stop Going In <span className='highlight'>Unprepared</span></h2>
                        <p>Most candidates fail because they don't have a structured preparation plan. We fix that.</p>
                    </div>
                    <div className='features-grid'>
                        <div className='feature-card'>
                            <div className='feature-card__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                            </div>
                            <h3>→ Generic Preparation</h3>
                            <p>Stop studying random LeetCode. Get questions specifically tailored to the job you're applying for.</p>
                        </div>
                        <div className='feature-card'>
                            <div className='feature-card__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            </div>
                            <h3>→ No Skill Gap Analysis</h3>
                            <p>Discover exactly which skills you're missing for the role, so you know where to focus your limited time.</p>
                        </div>
                        <div className='feature-card'>
                            <div className='feature-card__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                            </div>
                            <h3>→ No Study Roadmap</h3>
                            <p>Get a day-by-day preparation plan that covers everything from technical deep-dives to behavioral rehearsal.</p>
                        </div>
                        <div className='feature-card'>
                            <div className='feature-card__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </div>
                            <h3>→ Missing Personalization</h3>
                            <p>Your resume + the job description = a strategy that's uniquely yours. Not a one-size-fits-all template.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className='hiw-section' id='how-it-works'>
                <div className='hiw-section__inner'>
                    <div className='hiw-section__header'>
                        <h2>Three Steps to <span className='highlight'>Interview Ready</span></h2>
                        <p>From job posting to complete prep strategy in under 30 seconds.</p>
                    </div>
                    <div className='hiw-grid'>
                        <div className='hiw-card'>
                            <span className='hiw-card__step'>01</span>
                            <div className='hiw-card__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                            </div>
                            <h3>Paste Job Description</h3>
                            <p>Copy the complete job posting — our AI parses every requirement, responsibility, and qualifier.</p>
                        </div>
                        <div className='hiw-card'>
                            <span className='hiw-card__step'>02</span>
                            <div className='hiw-card__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></svg>
                            </div>
                            <h3>Upload Your Resume</h3>
                            <p>Upload your PDF resume or describe your experience — we match your profile against the role.</p>
                        </div>
                        <div className='hiw-card'>
                            <span className='hiw-card__step'>03</span>
                            <div className='hiw-card__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                            </div>
                            <h3>Get Your Strategy</h3>
                            <p>Receive personalized technical questions, behavioral prep, skill gaps, and a complete study roadmap.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className='cta-section'>
                <div className='cta-section__inner'>
                    <h2>Ready to Nail Your Next Interview?</h2>
                    <p>Join thousands of candidates who've transformed their interview preparation with AI-powered strategies.</p>
                    <button className='button primary-button hero-btn' onClick={() => navigate('/register')}>
                        Create Free Account
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className='landing-footer'>
                <div className='landing-footer__inner'>
                    <div className='landing-footer__brand'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                        <span>InterviewAI</span>
                    </div>
                    <div className='landing-footer__links'>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms of Service</a>
                        <a href='#'>Help Center</a>
                    </div>
                    <p className='landing-footer__copy'>© 2026 InterviewAI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
