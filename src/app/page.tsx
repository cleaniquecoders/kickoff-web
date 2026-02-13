import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Eyebrow } from '@/components/elements/eyebrow'
import { InstallCommand } from '@/components/elements/install-command'
import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { Faq, FAQsAccordion } from '@/components/sections/faqs-accordion'
import { Feature as FeatureCard, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import {
  Feature as FeatureDemo,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroSimpleCentered
        id="hero"
        eyebrow={<Eyebrow>Open Source Laravel Starter</Eyebrow>}
        headline="Bootstrap your next Laravel project in seconds"
        subheadline={
          <p>
            Kickoff sets up Livewire, Pest, PHPStan, Rector, GitHub Actions, an admin dashboard, roles &amp;
            permissions, and deployment scripts — so you can focus on building your app.
          </p>
        }
        cta={
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <ButtonLink href="https://github.com/cleaniquecoders/kickoff" size="lg">
                View on GitHub
              </ButtonLink>

              <PlainButtonLink href="#features" size="lg">
                See features <ArrowNarrowRightIcon />
              </PlainButtonLink>
            </div>
            <InstallCommand snippet="composer global require cleaniquecoders/kickoff" />
          </div>
        }
      />

      {/* Features */}
      <FeaturesThreeColumn
        id="features"
        eyebrow="What you get"
        headline="Everything you need for a production-ready Laravel app."
        subheadline={
          <p>Kickoff bundles the best Laravel packages and tooling so you can skip the boilerplate and start building.</p>
        }
        features={
          <>
            <FeatureCard
              headline="Authentication Ready"
              subheadline={
                <p>Complete auth with login, registration, password reset, and email verification out of the box.</p>
              }
            />
            <FeatureCard
              headline="Roles & Permissions"
              subheadline={
                <p>Flexible role-based access control powered by Spatie Laravel Permission.</p>
              }
            />
            <FeatureCard
              headline="Activity Logging"
              subheadline={
                <p>Full audit trail for your application using Spatie Activity Log.</p>
              }
            />
            <FeatureCard
              headline="Livewire Powered"
              subheadline={
                <p>Interactive UI components with Livewire 4 and Flux — no JavaScript framework needed.</p>
              }
            />
            <FeatureCard
              headline="Media Management"
              subheadline={
                <p>File uploads with Spatie Media Library, ready for S3 and cloud storage.</p>
              }
            />
            <FeatureCard
              headline="Dark Mode"
              subheadline={
                <p>Light and dark themes with system preference detection built in.</p>
              }
            />
          </>
        }
      />

      {/* Screenshots */}
      <FeaturesStackedAlternatingWithDemos
        id="screenshots"
        eyebrow="See it in action"
        headline="A fully-featured admin panel, ready to go."
        subheadline={
          <p>Kickoff generates a complete admin dashboard with user management, role configuration, and system settings.</p>
        }
        features={
          <>
            <FeatureDemo
              headline="Admin Dashboard"
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
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image
                    src="/img/kickoff/dashboard.png"
                    alt="Kickoff admin dashboard"
                    width={1920}
                    height={1080}
                    className="bg-white/75"
                  />
                </Screenshot>
              }
            />
            <FeatureDemo
              headline="Role & Permission Management"
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
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <Image
                    src="/img/kickoff/role-permissions.png"
                    alt="Role and permission management"
                    width={1920}
                    height={1080}
                    className="bg-white/75"
                  />
                </Screenshot>
              }
            />
            <FeatureDemo
              headline="Settings Management"
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
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image
                    src="/img/kickoff/settings-email.png"
                    alt="Settings management"
                    width={1920}
                    height={1080}
                    className="bg-white/75"
                  />
                </Screenshot>
              }
            />
          </>
        }
      />

      {/* Developer Tools */}
      <FeaturesThreeColumn
        id="dev-tools"
        eyebrow="Built for developers"
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
              headline="Static Analysis"
              subheadline={
                <p>PHPStan with Larastan pre-configured for maximum code quality and type safety.</p>
              }
            />
            <FeatureCard
              headline="Automated Refactoring"
              subheadline={
                <p>Rector with Laravel rules for automated code improvements and clean architecture.</p>
              }
            />
            <FeatureCard
              headline="Testing"
              subheadline={
                <p>Pest with architecture testing configured out of the box. Write tests from day one.</p>
              }
            />
            <FeatureCard
              headline="CI/CD Workflows"
              subheadline={
                <p>GitHub Actions for Pint, PHPStan, Rector, and Pest — automated on every push.</p>
              }
            />
            <FeatureCard
              headline="Automation Scripts"
              subheadline={
                <p>Deploy, backup, and dependency update scripts in the bin/ directory, ready to use.</p>
              }
            />
            <FeatureCard
              headline="Project Structure"
              subheadline={
                <p>Organized routes, helpers, documentation templates, and infrastructure config from the start.</p>
              }
            />
          </>
        }
      />

      {/* Quick Start */}
      <CallToActionSimpleCentered
        id="install"
        headline="Get started in three commands"
        cta={
          <div className="flex w-full max-w-lg flex-col gap-3">
            <InstallCommand snippet="composer global require cleaniquecoders/kickoff" />
            <InstallCommand snippet="composer global require laravel/installer" />
            <InstallCommand snippet="kickoff start <owner> <project-name>" />
          </div>
        }
      />

      {/* FAQs */}
      <FAQsAccordion id="faq" headline="Frequently Asked Questions">
        <Faq
          id="faq-1"
          question="What does Kickoff do?"
          answer="Kickoff bootstraps a new Laravel project with production-ready tooling — Livewire, Pest, PHPStan, Rector, GitHub Actions, an admin dashboard, roles & permissions, and deployment scripts. It saves you hours of setup on every new project."
        />
        <Faq
          id="faq-2"
          question="Can I use Kickoff with an existing project?"
          answer="Kickoff is designed for new projects, but you can pass '.' as the project path to apply its configuration to an existing Laravel application."
        />
        <Faq
          id="faq-3"
          question="What packages are included?"
          answer="Kickoff includes Spatie Permission, Spatie Media Library, Spatie Activity Log, Laravel Debugbar, Larastan (PHPStan), Rector, Pest, and more. All configured and ready to use."
        />
        <Faq
          id="faq-4"
          question="Does it work with the latest Laravel?"
          answer="Yes. Kickoff targets Laravel 12 with Livewire 4, Pest, and the latest versions of all included packages."
        />
        <Faq
          id="faq-5"
          question="Is it free?"
          answer="Yes! Kickoff is open-source software released under the MIT license. Free to use, modify, and distribute."
        />
      </FAQsAccordion>

      {/* CTA */}
      <CallToActionSimpleCentered
        id="cta"
        headline="Ready to kickoff your next Laravel project?"
        subheadline={
          <p>
            Start building with production-ready tooling in seconds. Kickoff is free and open source.
          </p>
        }
        cta={
          <div className="flex flex-col items-center gap-6">
            <ButtonLink href="https://github.com/cleaniquecoders/kickoff" size="lg">
              Get started on GitHub
            </ButtonLink>
            <InstallCommand snippet="composer global require cleaniquecoders/kickoff" />
          </div>
        }
      />
    </>
  )
}
