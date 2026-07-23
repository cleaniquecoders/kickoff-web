import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Eyebrow } from '@/components/elements/eyebrow'
import { InstallCommand } from '@/components/elements/install-command'
import { Link } from '@/components/elements/link'
import { TerminalWindow } from '@/components/elements/terminal-window'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { Faq, FAQsAccordion } from '@/components/sections/faqs-accordion'
import { Feature as FeatureCard, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import {
  Feature as FeatureDemo,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroTerminal } from '@/components/sections/hero-terminal'

const faqs = [
  {
    id: 'faq-1',
    question: 'What does Kickoff do?',
    answer:
      'Kickoff bootstraps a new Laravel project with production-ready tooling — Livewire, Pest, PHPStan, Rector, GitHub Actions, an admin dashboard, roles & permissions, and deployment scripts. It saves you hours of setup on every new project.',
  },
  {
    id: 'faq-2',
    question: 'Can I use Kickoff with an existing project?',
    answer:
      "Kickoff is designed for new projects, but you can pass '.' as the project path to apply its configuration to an existing Laravel application.",
  },
  {
    id: 'faq-3',
    question: 'What packages are included?',
    answer:
      'Kickoff includes Spatie Permission, Spatie Media Library, Spatie Activity Log, Laravel Debugbar, Larastan (PHPStan), Rector, Pest, and more. All configured and ready to use.',
  },
  {
    id: 'faq-4',
    question: 'Does it work with the latest Laravel?',
    answer:
      'Yes. Kickoff targets Laravel 13 with Livewire 4, Pest, and the latest versions of all included packages.',
  },
  {
    id: 'faq-5',
    question: 'Is it free?',
    answer:
      'Yes! Kickoff is open-source software released under the MIT license. Free to use, modify, and distribute.',
  },
]

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroTerminal
        id="hero"
        eyebrow="# open-source laravel starter"
        headline={
          <>
            Zero to production-ready Laravel in{' '}
            <span className="text-flame-600 dark:text-flame-400">one command.</span>
          </>
        }
        subheadline={
          <p>
            Kickoff sets up Livewire, Pest, PHPStan, Rector, GitHub Actions, an admin dashboard, roles &amp;
            permissions, and deployment scripts — so you can focus on building your app.
          </p>
        }
        cta={
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <ButtonLink href="https://github.com/cleaniquecoders/kickoff" size="lg">
                View on GitHub
              </ButtonLink>

              <PlainButtonLink href="#features" size="lg" className="text-flame-600! hover:text-flame-500! dark:text-flame-400!">
                See what&apos;s inside <ArrowNarrowRightIcon />
              </PlainButtonLink>
            </div>
            <InstallCommand
              className="w-fit max-w-full"
              snippet="composer global require cleaniquecoders/kickoff"
            />
          </div>
        }
      />

      {/* Features */}
      <FeaturesThreeColumn
        id="features"
        eyebrow="# what you get"
        headline="Everything you need for a production-ready Laravel app."
        subheadline={
          <p>Kickoff bundles the best Laravel packages and tooling so you can skip the boilerplate and start building.</p>
        }
        features={
          <>
            <FeatureCard
              headline="Authentication ready"
              subheadline={
                <p>Complete auth with login, registration, password reset, and email verification out of the box.</p>
              }
            />
            <FeatureCard
              headline="Roles & permissions"
              subheadline={<p>Flexible role-based access control powered by Spatie Laravel Permission.</p>}
            />
            <FeatureCard
              headline="Activity logging"
              subheadline={<p>Full audit trail for your application using Spatie Activity Log.</p>}
            />
            <FeatureCard
              headline="Livewire powered"
              subheadline={<p>Interactive UI components with Livewire 4 and Flux — no JavaScript framework needed.</p>}
            />
            <FeatureCard
              headline="Media management"
              subheadline={<p>File uploads with Spatie Media Library, ready for S3 and cloud storage.</p>}
            />
            <FeatureCard
              headline="Dark mode"
              subheadline={<p>Light and dark themes with system preference detection built in.</p>}
            />
          </>
        }
      />

      {/* Screenshots */}
      <FeaturesStackedAlternatingWithDemos
        id="screenshots"
        eyebrow="# see it in action"
        headline="A fully-featured admin panel, ready to go."
        subheadline={
          <p>Kickoff generates a complete admin dashboard with user management, role configuration, and system settings.</p>
        }
        features={
          <>
            <FeatureDemo
              headline="Admin dashboard"
              subheadline={
                <p>
                  A fully-featured admin dashboard with user statistics, quick actions, and system information at a
                  glance.
                </p>
              }
              cta={
                <Link href="https://github.com/cleaniquecoders/kickoff">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
              demo={
                <TerminalWindow title="my-app › dashboard">
                  <Image
                    src="/img/kickoff/dashboard.png"
                    alt="Kickoff admin dashboard"
                    width={1920}
                    height={1080}
                    className="w-full"
                  />
                </TerminalWindow>
              }
            />
            <FeatureDemo
              headline="Role & permission management"
              subheadline={
                <p>
                  Manage roles with granular permissions using Spatie Laravel Permission. Assign and revoke access with
                  an intuitive interface.
                </p>
              }
              cta={
                <Link href="https://github.com/cleaniquecoders/kickoff">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
              demo={
                <TerminalWindow title="my-app › roles & permissions">
                  <Image
                    src="/img/kickoff/role-permissions.png"
                    alt="Role and permission management"
                    width={1920}
                    height={1080}
                    className="w-full"
                  />
                </TerminalWindow>
              }
            />
            <FeatureDemo
              headline="Settings management"
              subheadline={
                <p>
                  Configure application settings through an intuitive admin interface — email, notifications, and more.
                </p>
              }
              cta={
                <Link href="https://github.com/cleaniquecoders/kickoff">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
              demo={
                <TerminalWindow title="my-app › settings">
                  <Image
                    src="/img/kickoff/settings-email.png"
                    alt="Settings management"
                    width={1920}
                    height={1080}
                    className="w-full"
                  />
                </TerminalWindow>
              }
            />
          </>
        }
      />

      {/* Developer Tools */}
      <FeaturesThreeColumn
        id="dev-tools"
        eyebrow="# built for developers"
        headline="Code quality and CI/CD from day one."
        subheadline={
          <p>
            Kickoff pre-configures the tools professional Laravel developers rely on — so your project starts with best
            practices baked in.
          </p>
        }
        features={
          <>
            <FeatureCard
              headline="phpstan"
              subheadline={<p>Static analysis with Larastan pre-configured for maximum code quality and type safety.</p>}
            />
            <FeatureCard
              headline="rector"
              subheadline={<p>Automated refactoring with Laravel rules for code improvements and clean architecture.</p>}
            />
            <FeatureCard
              headline="pest"
              subheadline={<p>Testing with architecture rules configured out of the box. Write tests from day one.</p>}
            />
            <FeatureCard
              headline="github-actions"
              subheadline={<p>CI workflows for Pint, PHPStan, Rector, and Pest — automated on every push.</p>}
            />
            <FeatureCard
              headline="bin/"
              subheadline={<p>Deploy, backup, and dependency update scripts, ready to use.</p>}
            />
            <FeatureCard
              headline="project structure"
              subheadline={<p>Organized routes, helpers, documentation templates, and infrastructure config from the start.</p>}
            />
          </>
        }
      />

      {/* Quick Start */}
      <CallToActionSimpleCentered
        id="install"
        eyebrow="# quick start"
        headline="Get started in three commands"
        cta={
          <TerminalWindow title="quick-start.sh" className="w-full max-w-2xl" bodyClassName="flex flex-col gap-4 p-4 sm:p-6">
            <div className="flex flex-col gap-1">
              <div className="pl-3 font-mono text-xs/6 text-bone-500 select-none"># 1 · install the laravel installer</div>
              <InstallCommand variant="terminal" snippet="composer global require laravel/installer" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="pl-3 font-mono text-xs/6 text-bone-500 select-none"># 2 · install the kickoff CLI</div>
              <InstallCommand variant="terminal" snippet="composer global require cleaniquecoders/kickoff" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="pl-3 font-mono text-xs/6 text-bone-500 select-none"># 3 · scaffold your app</div>
              <InstallCommand variant="terminal" snippet="kickoff start <owner> <project-name>" />
            </div>
          </TerminalWindow>
        }
      />

      {/* FAQs */}
      <FAQsAccordion id="faq" eyebrow={<Eyebrow># faq</Eyebrow>} headline="Frequently asked questions">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        {faqs.map((faq) => (
          <Faq key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </FAQsAccordion>

      {/* CTA */}
      <CallToActionSimpleCentered
        id="cta"
        headline="Ready to kickoff your next Laravel project?"
        subheadline={
          <p>Start building with production-ready tooling in seconds. Kickoff is free and open source.</p>
        }
        cta={
          <div className="flex w-full flex-col items-center gap-6">
            <ButtonLink href="https://github.com/cleaniquecoders/kickoff" size="lg">
              Get started on GitHub
            </ButtonLink>
            <InstallCommand className="w-fit max-w-full" snippet="composer global require cleaniquecoders/kickoff" />
          </div>
        }
      />
    </>
  )
}
