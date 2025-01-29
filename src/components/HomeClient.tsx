'use client';
import styles from '../app/page.module.css';
import Banner from './Banner';

export default function HomeClient() {
  return (
    <div className={styles.page}>
      <Banner />
      <main className={styles.main}>
        <h1 className={styles.title}>Jarvis AI Assistant</h1>
        <p className={styles.description}>
          An advanced open-source AI assistant that harnesses the power of multiple LLMs
          to create a truly intelligent and capable virtual assistant for Linux.
        </p>

        <section className={styles.features}>
          <h2>Core Capabilities</h2>
          <ul>
            <li>🧠 Multi-Model AI Architecture
              <p>Leverages LLaMA, Google Gemini 2.0, GPT4, and Whisper in a coordinated system</p>
            </li>
            <li>🤖 Advanced Reasoning
              <p>Uses chain-of-thought and multi-agent reasoning for complex tasks</p>
            </li>
            <li>🎯 Task Automation
              <p>Seamlessly executes system commands and automates workflows</p>
            </li>
            <li>🗣️ Natural Interaction
              <p>Advanced voice recognition and natural language processing</p>
            </li>
            <li>🔄 Integration Hub
              <p>Connects with Calendar, Email, and various Linux services</p>
            </li>
          </ul>
        </section>

        <section className={styles.architecture}>
          <h2>Why Open Source?</h2>
          <ul>
            <li>✨ Community-Driven Innovation</li>
            <li>🛡️ Privacy-Focused Design</li>
            <li>🔒 Security Through Transparency</li>
            <li>🌍 Accessible AI For Everyone</li>
            <li>🔧 Customizable & Extensible</li>
          </ul>
        </section>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://github.com/stevenvo780/jarvisIAV2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <a
            href="https://github.com/stevenvo780/jarvisIAV2#readme"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Documentation
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.stevenvallejo.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Steven Vallejo
        </a>
        <p className={styles.collaborate}>
          Join us in building the future of AI assistants
        </p>
      </footer>
    </div>
  );
}
