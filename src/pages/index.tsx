import { type ReactNode, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* ─── Feature data ──────────────────────────────────────────────────────────── */

interface Feature {
  title: string;
  icon: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Unit Conversion',
    icon: '⇄',
    description:
      'Convert between any file size units: Bytes, KB, MB, GB, TB, PB, EB — with full IEC binary prefix support (KiB, MiB, GiB, TiB, PiB, EiB).',
  },
  {
    title: 'Smart Formatting',
    icon: '✦',
    description:
      'Format file sizes as human-readable strings with customizable decimal precision and cultural number formatting.',
  },
  {
    title: 'Auto Unit Detection',
    icon: '◎',
    description:
      'GetBestUnit automatically selects the most appropriate unit for any byte value, traditional or IEC.',
  },
  {
    title: 'Extension Methods',
    icon: '⚡',
    description:
      'Ergonomic double and long extension methods — ToFormattedSize, FormatBestSize, GetBestUnit — for minimal boilerplate.',
  },
  {
    title: 'Dependency Injection',
    icon: '🔗',
    description:
      'IValiFileSize interface for clean DI registration. Stateless singleton-safe implementation.',
  },
  {
    title: 'Multi-Framework',
    icon: '◫',
    description:
      'Targets netstandard2.0, netstandard2.1, net6.0, net7.0, net8.0, net9.0. Zero external dependencies.',
  },
];

/* ─── Code token types ──────────────────────────────────────────────────────── */

type Token = { text: string; cls: string };

const CODE_TOKENS: Token[][] = [
  // Line 1: // Auto-detect best unit
  [{ text: '// Auto-detect best unit', cls: 'cComment' }],
  // Line 2: var vfs = new ValiFileSize();
  [
    { text: 'var', cls: 'cKw' },
    { text: ' vfs ', cls: 'cVar' },
    { text: '=', cls: 'cPunc' },
    { text: ' new ', cls: 'cKw' },
    { text: 'ValiFileSize', cls: 'cType' },
    { text: '();', cls: 'cPunc' },
  ],
  // Line 3: string result = vfs.FormatBestSize(1_500_000_000); // "1.40 GB"
  [
    { text: 'string', cls: 'cKw' },
    { text: ' result ', cls: 'cVar' },
    { text: '=', cls: 'cPunc' },
    { text: ' vfs', cls: 'cVar' },
    { text: '.', cls: 'cPunc' },
    { text: 'FormatBestSize', cls: 'cMethod' },
    { text: '(', cls: 'cPunc' },
    { text: '1_500_000_000', cls: 'cNum' },
    { text: ');', cls: 'cPunc' },
    { text: ' // "1.40 GB"', cls: 'cComment' },
  ],
  // Line 4: (blank)
  [{ text: '', cls: 'cPunc' }],
  // Line 5: // Extension methods
  [{ text: '// Extension methods', cls: 'cComment' }],
  // Line 6: string formatted = 1_500_000_000.0.FormatBestSize(); // "1.40 GB"
  [
    { text: 'string', cls: 'cKw' },
    { text: ' formatted ', cls: 'cVar' },
    { text: '=', cls: 'cPunc' },
    { text: ' 1_500_000_000.0', cls: 'cNum' },
    { text: '.', cls: 'cPunc' },
    { text: 'FormatBestSize', cls: 'cMethod' },
    { text: '();', cls: 'cPunc' },
    { text: ' // "1.40 GB"', cls: 'cComment' },
  ],
  // Line 7: (blank)
  [{ text: '', cls: 'cPunc' }],
  // Line 8: // IEC prefixes
  [{ text: '// IEC prefixes', cls: 'cComment' }],
  // Line 9: string iec = vfs.FormatBestSize(1_500_000_000, useIec: true); // "1.40 GiB"
  [
    { text: 'string', cls: 'cKw' },
    { text: ' iec ', cls: 'cVar' },
    { text: '=', cls: 'cPunc' },
    { text: ' vfs', cls: 'cVar' },
    { text: '.', cls: 'cPunc' },
    { text: 'FormatBestSize', cls: 'cMethod' },
    { text: '(', cls: 'cPunc' },
    { text: '1_500_000_000', cls: 'cNum' },
    { text: ', useIec', cls: 'cProp' },
    { text: ': ', cls: 'cPunc' },
    { text: 'true', cls: 'cKw' },
    { text: ');', cls: 'cPunc' },
    { text: ' // "1.40 GiB"', cls: 'cComment' },
  ],
  // Line 10: (blank)
  [{ text: '', cls: 'cPunc' }],
  // Line 11: // Explicit conversion
  [{ text: '// Explicit conversion', cls: 'cComment' }],
  // Line 12: double kb = vfs.Convert(1, FileSizeUnit.Megabytes, FileSizeUnit.Kilobytes); // 1024
  [
    { text: 'double', cls: 'cKw' },
    { text: ' kb ', cls: 'cVar' },
    { text: '=', cls: 'cPunc' },
    { text: ' vfs', cls: 'cVar' },
    { text: '.', cls: 'cPunc' },
    { text: 'Convert', cls: 'cMethod' },
    { text: '(', cls: 'cPunc' },
    { text: '1', cls: 'cNum' },
    { text: ', ', cls: 'cPunc' },
    { text: 'FileSizeUnit', cls: 'cType' },
    { text: '.', cls: 'cPunc' },
    { text: 'Megabytes', cls: 'cProp' },
    { text: ', ', cls: 'cPunc' },
    { text: 'FileSizeUnit', cls: 'cType' },
    { text: '.', cls: 'cPunc' },
    { text: 'Kilobytes', cls: 'cProp' },
    { text: ');', cls: 'cPunc' },
    { text: ' // 1024', cls: 'cComment' },
  ],
];

/* ─── HeroSection ───────────────────────────────────────────────────────────── */

function HeroSection() {
  const [copied, setCopied] = useState(false);
  const cmd = 'dotnet add package Vali-FileSize';
  function handleCopy() {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className={styles.heroOrb1} />
      <div className={styles.heroOrb2} />
      <div className={styles.heroOrb3} />
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgePulse} />
          netstandard · .NET 6 · 7 · 8 · 9
        </div>
        <h1 className={styles.heroTitle}>Vali-FileSize</h1>
        <p className={styles.heroTagline}>
          <span className={styles.heroTaglineComment}>//</span>{' '}file size utilities for .NET
        </p>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>6+</span>
            <span className={styles.heroStatLabel}>size units</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>IEC</span>
            <span className={styles.heroStatLabel}>binary prefix</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>zero</span>
            <span className={styles.heroStatLabel}>dependencies</span>
          </div>
        </div>
        <div className={styles.heroCta}>
          <Link className={styles.btnPrimary} to="/docs/quick-start">
            Get started →
          </Link>
          <Link className={styles.btnSecondary} to="/docs/introduction">
            Read the docs
          </Link>
        </div>
        <div className={styles.heroInstallWrap}>
          <div className={styles.heroInstall}>
            <span className={styles.heroInstallPrompt}>$</span>
            <code className={styles.heroInstallCode}>{cmd}</code>
            <button className={styles.heroInstallCopy} onClick={handleCopy} title={copied ? 'Copied!' : 'Copy'}>
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
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─── CodeBlock ─────────────────────────────────────────────────────────────── */

function CodeBlock() {
  const [copied, setCopied] = useState(false);
  const raw = CODE_TOKENS.map(line => line.map(t => t.text).join('')).join('\n');

  function handleCopy() {
    navigator.clipboard.writeText(raw).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={styles.codeCard}>
      {/* Chrome header */}
      <div className={styles.codeChrome}>
        <span className={clsx(styles.chromeDot, styles.chromeDotRed)} />
        <span className={clsx(styles.chromeDot, styles.chromeDotYellow)} />
        <span className={clsx(styles.chromeDot, styles.chromeDotGreen)} />
        <span className={styles.codeFile}>Program.cs</span>
        <button
          className={styles.codeCopyBtn}
          onClick={handleCopy}
          title={copied ? 'Copied!' : 'Copy'}
          aria-label="Copy code"
        >
          {copied ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
      {/* Body */}
      <div className={styles.codeBody}>
        {/* Line numbers */}
        <div className={styles.codeLineNumbers}>
          {CODE_TOKENS.map((_, i) => (
            <span key={i} className={styles.codeLineNum}>{i + 1}</span>
          ))}
        </div>
        {/* Code */}
        <pre className={styles.codePre}>
          <code>
            {CODE_TOKENS.map((line, li) => (
              <div key={li} className={styles.codeLine}>
                {line.map((token, ti) => (
                  <span key={ti} className={styles[token.cls as keyof typeof styles]}>
                    {token.text}
                  </span>
                ))}
              </div>
            ))}
          </code>
        </pre>
      </div>
      <div className={styles.codeGlowBar} />
    </div>
  );
}

/* ─── FeatureCard ───────────────────────────────────────────────────────────── */

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <div className={styles.featureCard} style={{ animationDelay: `${index * 80}ms` }}>
      <span className={styles.featureNumber}>{num}</span>
      <div className={styles.featureIconWrap}>
        <span className={styles.featureIconGlyph}>{icon}</span>
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

/* ─── FeaturesSection ───────────────────────────────────────────────────────── */

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Everything you need for file size handling</h2>
          <p className={styles.sectionSubtitle}>
            Built for .NET developers who want clean, reliable and zero-dependency file size utilities.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map(({ title, icon, description }, index) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── QuickExampleSection ───────────────────────────────────────────────────── */

function QuickExampleSection() {
  return (
    <section className={styles.exampleSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Simple, expressive API</h2>
          <p className={styles.sectionSubtitle}>
            Auto-detect units, format sizes, convert between units — all with a clean, chainable API.
          </p>
        </div>
        <div className={styles.exampleCodeWrap}>
          <CodeBlock />
        </div>
      </div>
    </section>
  );
}

/* ─── AuthorSection ─────────────────────────────────────────────────────────── */

function AuthorSection() {
  return (
    <section className={styles.authorSection}>
      <div className={styles.authorDivider} aria-hidden="true" />
      <div className="container">
        <div className={styles.authorCard}>
          {/* Avatar with spinning ring */}
          <div className={styles.avatarRingWrap}>
            <div className={styles.avatarRing} aria-hidden="true" />
            <div className={styles.authorAvatar}>
              <span className={styles.authorAvatarInitials}>FM</span>
            </div>
          </div>
          {/* Info */}
          <div className={styles.authorInfo}>
            <span className={styles.authorBuiltBy}>Built by</span>
            <a
              href="https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.authorName}
            >
              Felipe Rafael Montenegro Morriberon
            </a>
            <p className={styles.authorBio}>
              .NET developer and open-source enthusiast. Creator of{' '}
              <a href="https://github.com/UBF21" target="_blank" rel="noopener noreferrer" className={styles.authorLink}>
                Vali-FileSize
              </a>
              , Vali-Mediator and Vali-Validation.
            </p>
          </div>
          {/* Social links */}
          <div className={styles.authorLinks}>
            <a
              href="https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.authorSocialLink, styles.authorSocialLinkLinkedIn)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/UBF21"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.authorSocialLink, styles.authorSocialLinkGithub)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Home (default export) ─────────────────────────────────────────────────── */

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
