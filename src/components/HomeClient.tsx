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
            <li>🧠 Multi-Model Intelligence
              <p>Integrates OpenAI GPT, Google Gemini 2.0, Local LLama, and DeepSeek-R1 models for comprehensive AI capabilities</p>
            </li>
            <li>🗣️ Advanced Voice Interaction
              <p>Natural voice commands, TTS responses, and wake word activation with &quot;Jarvis&quot;</p>
            </li>
            <li>📅 Smart Calendar Integration
              <p>Seamless Google Calendar sync with natural language event creation and intelligent scheduling</p>
            </li>
            <li>🔧 System Control
              <p>Manages applications, resources, and system functions through voice or text commands</p>
            </li>
            <li>🧮 Advanced Mathematics
              <p>Complex calculations, WolframAlpha integration, and support for advanced mathematical operations</p>
            </li>
            <li>💡 Intelligent Features
              <p>Context awareness, conversation history, user adaptation, and multi-cultural understanding</p>
            </li>
          </ul>
        </section>

        <section className={styles.vision}>
          <h2>Our Vision</h2>
          <p>We&apos;re building more than just another AI assistant &ndash; we&apos;re creating a community-driven alternative to proprietary AI assistants. Jarvis represents freedom, privacy, and innovation in AI.</p>
        </section>

        <section className={styles.architecture}>
          <h2>Technical Excellence</h2>
          <ul>
            <li>⚡ Terminal Interface
              <p>Color-coded outputs, real-time feedback, and intuitive command system</p>
            </li>
            <li>🔄 Resource Management
              <p>Efficient memory handling and automatic model selection based on task complexity</p>
            </li>
            <li>🌐 API Integration
              <p>Seamless connection with multiple AI services and external tools</p>
            </li>
            <li>🔊 Audio Processing
              <p>Advanced sound effects and voice processing capabilities</p>
            </li>
            <li>📊 Data Management
              <p>Robust conversation history tracking and user profile adaptation</p>
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
