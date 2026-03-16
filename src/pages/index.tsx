import { type ReactNode, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      className={clsx(styles.copyBtn, copied && styles.copyBtnDone)}
      onClick={handleCopy}
      title={copied ? 'Copied!' : 'Copy'}
      aria-label="Copy install command"
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

interface Feature {
  title: string;
  icon: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Unit Conversion',
    icon: '⇄',
    description: 'Convert between any file size units: Bytes, KB, MB, GB, TB, PB, EB — with full IEC binary prefix support (KiB, MiB, GiB, TiB, PiB, EiB).',
  },
  {
    title: 'Smart Formatting',
    icon: '✦',
    description: 'Format file sizes as human-readable strings with customizable decimal precision and cultural number formatting.',
  },
  {
    title: 'Auto Unit Detection',
    icon: '◎',
    description: 'GetBestUnit automatically selects the most appropriate unit for any byte value, traditional or IEC.',
  },
  {
    title: 'Extension Methods',
    icon: '⚡',
    description: 'Ergonomic double and long extension methods — ToFormattedSize, FormatBestSize, GetBestUnit — for minimal boilerplate.',
  },
  {
    title: 'Dependency Injection',
    icon: '🔗',
    description: 'IValiFileSize interface for clean DI registration. Stateless singleton-safe implementation.',
  },
  {
    title: 'Multi-Framework',
    icon: '◫',
    description: 'Targets netstandard2.0, netstandard2.1, net6.0, net7.0, net8.0, net9.0. Zero external dependencies.',
  },
];

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroBadge}>
          netstandard2.0 · netstandard2.1 · .NET 6 · .NET 7 · .NET 8 · .NET 9
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          {siteConfig.tagline}
        </p>
        <div className={styles.badges}>
          <img src="https://img.shields.io/badge/.NET-6%20|%207%20|%208%20|%209-512BD4?style=flat-square&logo=dotnet" alt=".NET" />
          <img src="https://img.shields.io/badge/license-Apache--2.0-34d399?style=flat-square" alt="License" />
          <img src="https://img.shields.io/badge/NuGet-Vali--FileSize-004880?style=flat-square&logo=nuget" alt="NuGet" />
          <img src="https://img.shields.io/badge/zero-dependencies-059669?style=flat-square" alt="Zero dependencies" />
        </div>
        <div className={styles.buttons}>
          <Link className={styles.buttonPrimary} to="/docs/quick-start">
            Get started →
          </Link>
          <Link className={styles.buttonGhost} to="/docs/introduction">
            Read the docs
          </Link>
        </div>
        <div className={styles.installBlock}>
          <span className={styles.installDollar}>$</span>
          <span>dotnet add package Vali-FileSize</span>
          <CopyButton text="dotnet add package Vali-FileSize" />
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.featuresTitle}>
          Everything you need for file size handling
        </Heading>
        <p className={styles.featuresSubtitle}>
          Built for .NET developers who want clean, reliable and zero-dependency file size utilities.
        </p>
        <div className="row">
          {features.map(({ title, icon, description }) => (
            <div key={title} className={clsx('col col--4', styles.featureCol)}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{icon}</div>
                <p className={styles.featureTitle}>{title}</p>
                <p className={styles.featureDesc}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickExampleSection() {
  const example = `// Auto-detect best unit
var vfs = new ValiFileSize();
string result = vfs.FormatBestSize(1_500_000_000); // "1.40 GB"

// Extension methods
string formatted = 1_500_000_000.0.FormatBestSize(); // "1.40 GB"

// IEC prefixes
string iec = vfs.FormatBestSize(1_500_000_000, useIec: true); // "1.40 GiB"

// Explicit conversion
double kb = vfs.Convert(1, FileSizeUnit.Megabytes, FileSizeUnit.Kilobytes); // 1024`;

  return (
    <section className={styles.example}>
      <div className="container">
        <Heading as="h2" className={styles.exampleTitle}>
          Simple, expressive API
        </Heading>
        <div className={styles.exampleBlock}>
          <pre className={styles.exampleCode}><code>{example}</code></pre>
        </div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className={styles.author}>
      <div className="container">
        <div className={styles.authorCard}>
          <div className={styles.authorAvatar}>FM</div>
          <div className={styles.authorInfo}>
            <p className={styles.authorLabel}>// built by</p>
            <p className={styles.authorName}>Felipe Rafael Montenegro Morriberon</p>
            <p className={styles.authorBio}>
              .NET developer and open-source enthusiast. Creator of Vali-FileSize, Vali-Mediator and Vali-Validation.
            </p>
            <div className={styles.authorLinks}>
              <a
                href="https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.authorLinkLinkedIn}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/UBF21"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.authorLinkGitHub}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Lightweight file size conversion and formatting library for .NET"
    >
      <HeroSection />
      <main>
        <FeaturesSection />
        <QuickExampleSection />
        <AuthorSection />
      </main>
    </Layout>
  );
}
