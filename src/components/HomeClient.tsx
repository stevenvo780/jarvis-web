'use client';
import { useState } from 'react';
import styles from '../app/page.module.css';
import Banner from './Banner';
import VideoDemo from './VideoDemo';

export default function HomeClient() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  const translations = {
    en: {
      title: 'Jarvis AI Assistant',
      description: `The next-generation open-source AI assistant that rivals proprietary solutions.
          Built by the community, for the community, empowering Linux users with cutting-edge AI capabilities.`,
      featuresTitle: 'Core Capabilities',
      features: [
        { icon: '🧠', title: 'Multi-Model Intelligence', desc: 'Integrates OpenAI GPT, Google Gemini 2.0, Local LLama, and DeepSeek-R1 models for comprehensive AI capabilities' },
        { icon: '🗣️', title: 'Advanced Voice Interaction', desc: 'Natural voice commands, TTS responses, and wake word activation with "Jarvis"' },
        { icon: '📅', title: 'Smart Calendar Integration', desc: 'Seamless Google Calendar sync with natural language event creation and intelligent scheduling' },
        { icon: '🔧', title: 'System Control', desc: 'Manages applications, resources, and system functions through voice or text commands' },
        { icon: '🧮', title: 'Advanced Mathematics', desc: 'Complex calculations, WolframAlpha integration, and support for advanced mathematical operations' },
        { icon: '💡', title: 'Intelligent Features', desc: 'Context awareness, conversation history, user adaptation, and multi-cultural understanding' },
      ],
      visionTitle: 'Our Vision',
      vision: `We're building more than just another AI assistant – we're creating a community-driven alternative to proprietary AI assistants. Jarvis represents freedom, privacy, and innovation in AI.`,
      architectureTitle: 'Technical Excellence',
      architecture: [
        { icon: '⚡', title: 'Terminal Interface', desc: 'Color-coded outputs, real-time feedback, and intuitive command system' },
        { icon: '🔄', title: 'Resource Management', desc: 'Efficient memory handling and automatic model selection based on task complexity' },
        { icon: '🌐', title: 'API Integration', desc: 'Seamless connection with multiple AI services and external tools' },
        { icon: '🔊', title: 'Audio Processing', desc: 'Advanced sound effects and voice processing capabilities' },
        { icon: '📊', title: 'Data Management', desc: 'Robust conversation history tracking and user profile adaptation' },
      ],
      getInvolvedTitle: 'Get Involved',
      ctaPrimary: 'Join the Project',
      ctaSecondary: 'Read the Docs',
      footerCreator: 'Created by Steven Vallejo',
      footerCollaboration: 'Together we can build the future of open-source AI assistants',
      toggleLang: 'ES'
    },
    es: {
      title: 'Asistente AI Jarvis',
      description: `El asistente de IA de código abierto de próxima generación que rivaliza con soluciones propietarias.
          Diseñado por la comunidad, para la comunidad, dando a los usuarios de Linux capacidades de IA de vanguardia.`,
      featuresTitle: 'Capacidades Principales',
      features: [
        { icon: '🧠', title: 'Inteligencia Multi-Modelo', desc: 'Integra OpenAI GPT, Google Gemini 2.0, Local LLama y DeepSeek-R1 para capacidades completas de IA' },
        { icon: '🗣️', title: 'Interacción de Voz Avanzada', desc: 'Comandos de voz naturales, respuestas TTS y activación mediante palabra clave "Jarvis"' },
        { icon: '📅', title: 'Integración de Calendario Inteligente', desc: 'Sincronización con Google Calendar, creación de eventos con lenguaje natural y programación inteligente' },
        { icon: '🔧', title: 'Control del Sistema', desc: 'Gestiona aplicaciones, recursos y funciones del sistema mediante comandos de voz o texto' },
        { icon: '🧮', title: 'Matemáticas Avanzadas', desc: 'Cálculos complejos, integración con WolframAlpha y soporte para operaciones matemáticas avanzadas' },
        { icon: '💡', title: 'Funciones Inteligentes', desc: 'Conciencia contextual, historial de conversaciones, adaptación al usuario y comprensión multicultural' },
      ],
      visionTitle: 'Nuestra Visión',
      vision: `No estamos construyendo solo otro asistente de IA – estamos creando una alternativa impulsada por la comunidad a los asistentes de IA propietarios. Jarvis representa libertad, privacidad e innovación en IA.`,
      architectureTitle: 'Excelencia Técnica',
      architecture: [
        { icon: '⚡', title: 'Interfaz de Terminal', desc: 'Salidas con colores, retroalimentación en tiempo real y un sistema de comandos intuitivo' },
        { icon: '🔄', title: 'Gestión de Recursos', desc: 'Manejo eficiente de la memoria y selección automática de modelos en función de la complejidad de la tarea' },
        { icon: '🌐', title: 'Integración de API', desc: 'Conexión sin fisuras con múltiples servicios de IA y herramientas externas' },
        { icon: '🔊', title: 'Procesamiento de Audio', desc: 'Efectos de sonido avanzados y capacidades de procesamiento de voz' },
        { icon: '📊', title: 'Gestión de Datos', desc: 'Seguimiento robusto del historial de conversaciones y adaptación del perfil del usuario' },
      ],
      getInvolvedTitle: 'Involúcrate',
      ctaPrimary: 'Únete al Proyecto',
      ctaSecondary: 'Ver Documentación',
      footerCreator: 'Creado por Steven Vallejo',
      footerCollaboration: 'Juntos podemos construir el futuro de los asistentes de IA de código abierto',
      toggleLang: 'EN'
    }
  };

  const t = translations[language];

  return (
    <div className={styles.page}>
      {/* Botón de cambio de idioma en esquina superior derecha */}
      <button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1000,
          padding: '0.5rem 1rem'
        }}
      >
        {t.toggleLang}
      </button>

      <Banner />
      <main className={styles.main}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.description}>
          {t.description}
        </p>

        <VideoDemo />

        <section className={styles.features}>
          <h2>{t.featuresTitle}</h2>
          <ul>
            {t.features.map((feat, idx) => (
              <li key={idx}>
                {feat.icon} {feat.title}
                <p>{feat.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.vision}>
          <h2>{t.visionTitle}</h2>
          <p>{t.vision}</p>
        </section>

        <section className={styles.architecture}>
          <h2>{t.architectureTitle}</h2>
          <ul>
            {t.architecture.map((tech, idx) => (
              <li key={idx}>
                {tech.icon} {tech.title}
                <p>{tech.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.getInvolved}>
          <h2>{t.getInvolvedTitle}</h2>
          <div className={styles.contributionGuide}>
            <div>
              <h3>🔧 Development</h3>
              <p>{language === 'en' ? 'Contribute to core functionality, new features, or improvements' : 'Contribuye a la funcionalidad central, nuevas características o mejoras'}</p>
            </div>
            <div>
              <h3>📝 Documentation</h3>
              <p>{language === 'en' ? 'Help make Jarvis more accessible to others' : 'Ayuda a hacer Jarvis más accesible para todos'}</p>
            </div>
            <div>
              <h3>🎨 UI/UX</h3>
              <p>{language === 'en' ? 'Improve user interaction and interface design' : 'Mejora la interacción y el diseño de la interfaz'}</p>
            </div>
            <div>
              <h3>🧪 Testing</h3>
              <p>{language === 'en' ? 'Help ensure reliability and find issues' : 'Ayuda a garantizar la fiabilidad y detectar problemas'}</p>
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
            {t.ctaPrimary}
          </a>
          <a
            href="https://github.com/stevenvo780/jarvisIAV2#readme"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            {t.ctaSecondary}
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.stevenvallejo.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.footerCreator}
        </a>
        <p className={styles.collaborate}>
          {t.footerCollaboration}
        </p>
      </footer>
    </div>
  );
}
