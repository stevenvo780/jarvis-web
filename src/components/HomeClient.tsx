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
          The next-generation open-source AI assistant that rivals proprietary solutions.
          Built by the community, for the community, empowering Linux users with cutting-edge AI capabilities.
        </p>

        <section className={styles.features}>
          <h2>Core Capabilities</h2>
          <ul>
            <li>🧠 Advanced AI Architecture
              <p>Orchestrates LLaMA, Google Gemini 2.0, GPT4, and Whisper for optimal performance in each task</p>
            </li>
            <li>🤖 Multi-Agent System
              <p>Agents collaborate to solve complex tasks using chain-of-thought and advanced reasoning</p>
            </li>
            <li>🎯 System Integration
              <p>Deep Linux integration with voice commands, system control, and process management</p>
            </li>
            <li>🗣️ Natural Interaction
              <p>Human-like conversations with context awareness and memory retention</p>
            </li>
            <li>🔄 Smart Automation
              <p>Calendar management, email handling, and workflow automation</p>
            </li>
          </ul>
        </section>

        <section className={styles.vision}>
          <h2>Our Vision</h2>
          <p>We&apos;re building more than just another AI assistant &ndash; we&apos;re creating a community-driven alternative to proprietary AI assistants. Jarvis represents freedom, privacy, and innovation in AI.</p>
        </section>

        <section className={styles.architecture}>
          <h2>Why Contribute?</h2>
          <ul>
            <li>🌟 Shape the Future of AI
              <p>Work with cutting-edge AI models and architectures</p>
            </li>
            <li>💡 Innovation Freedom
              <p>Experiment with new ideas without corporate constraints</p>
            </li>
            <li>🤝 Active Community
              <p>Join a growing community of AI enthusiasts and developers</p>
            </li>
            <li>📚 Learning Opportunity
              <p>Gain hands-on experience with modern AI technologies</p>
            </li>
            <li>🛡️ Privacy-First
              <p>Help build AI that respects user privacy and freedom</p>
            </li>
          </ul>
        </section>

        <section className={styles.getInvolved}>
          <h2>Get Involved</h2>
          <div className={styles.contributionGuide}>
            <div>
              <h3>🔧 Development</h3>
              <p>Contribute to core functionality, new features, or improvements</p>
            </div>
            <div>
              <h3>📝 Documentation</h3>
              <p>Help make Jarvis more accessible to others</p>
            </div>
            <div>
              <h3>🎨 UI/UX</h3>
              <p>Improve user interaction and interface design</p>
            </div>
            <div>
              <h3>🧪 Testing</h3>
              <p>Help ensure reliability and find issues</p>
            </div>
          </div>
        </section>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://github.com/stevenvo780/jarvisIAV2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Project
          </a>
          <a
            href="https://github.com/stevenvo780/jarvisIAV2#readme"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read the Docs
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
          Together we can build the future of open-source AI assistants
        </p>
      </footer>
    </div>
  );
}
