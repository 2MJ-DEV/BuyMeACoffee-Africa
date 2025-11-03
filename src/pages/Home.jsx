import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { FALLBACK_LANGUAGE, useI18n } from '../context/I18nContext'
import { getPageSEO } from '../utils/seo'
import Preview from '/Preview.png'
import { Drama } from 'lucide-react'
import about1 from '/About1.png'
import about2 from '/image.png'
import { FaGithub } from 'react-icons/fa'
import BackToTop from '../components/BackToTop'

const Home = () => {
	const { t, language } = useI18n()
	const activeLanguage = language ?? FALLBACK_LANGUAGE
	const seoData = getPageSEO('home', activeLanguage)


	const withLanguagePrefix = useMemo(
		() => (targetPath) => {
			const sanitizedPath = targetPath.startsWith('/')
				? targetPath.slice(1)
				: targetPath
			if (!sanitizedPath) {
				return `/${activeLanguage}`
			}
			return `/${activeLanguage}/${sanitizedPath}`
		},
		[activeLanguage]
	)

	const steps = [
		{
			id: '01',
			title: t('home.about.steps.one.title'),
			description: t('home.about.steps.one.description'),
			image: about2,
		},
		{
			id: '02',
			title: t('home.about.steps.two.title'),
			description: t('home.about.steps.two.description'),
			image: about1,
		},
		{
			id: '03',
			title: t('home.about.steps.three.title'),
			description: t('home.about.steps.three.description'),
			image: about1,
		},
	]

	return (
		<>
			<SEO {...seoData} />
			<Navbar />

			<main className='page-shell relative flex min-h-screen flex-col pt-36'>
				<section className='relative'>
					<div className='mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center'>
					<div className='chip-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]'>
						<FaGithub className='icon-accent size-4' />
							{t('common.status.underConstruction')}
						</div>

					<h1 className='font-heading max-w-3xl text-balance text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl'>
							{t('home.hero.title')}
						</h1>
					<p className='max-w-2xl text-base text-[var(--text-secondary)] md:text-lg'>
							{t('home.hero.subtitle')}
						</p>

						<div className='flex flex-wrap items-center justify-center gap-4 pt-2'>
							<Link
								to={withLanguagePrefix('/login')}
								className='btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold'>
								{t('common.actions.getStarted')}
							</Link>
							<Link
								to={withLanguagePrefix('/contributors')}
								className='btn-secondary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold'>
								{t('common.navigation.contributors')}
							</Link>
						</div>
					</div>
				</section>

			<section className='mx-auto mt-20 w-full max-w-5xl px-6'>
				<div className='surface-card rounded-[2.5rem] p-8'>
						<div className='mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[var(--color-latte)]'>
							<span className='size-3 rounded-full bg-red-500' />
							<span className='size-3 rounded-full bg-yellow-400' />
							<span className='size-3 rounded-full bg-green-500' />
						</div>
						<div className='overflow-hidden rounded-2xl border border-[rgba(107,62,38,0.12)]'>
							<img
								src={Preview}
								alt='Preview'
								width={1400}
								height={900}
								data-nimg='1'
								className='block w-full object-cover'
							/>
						</div>
					</div>
				</section>

				<section className='mx-auto mt-24 w-full max-w-5xl px-6 pb-20'>
				<div className='flex flex-col items-center gap-6 text-center'>
					<span className='chip-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em]'>
						<Drama className='icon-accent size-4' />
							{t('home.about.badge')}
						</span>

					<h2 className='font-heading max-w-3xl text-balance text-3xl font-semibold text-[var(--text-primary)] md:text-4xl'>
							{t('home.about.title')}
						</h2>
					<p className='max-w-2xl text-base text-[var(--text-secondary)] md:text-lg'>
							{t('home.about.subtitle')}
						</p>

						<Link
							to={withLanguagePrefix('/login')}
							className='btn-outline inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold'>
							{t('common.actions.getStarted')}
						</Link>
					</div>

					<div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{steps.map((step) => (
							<div
								key={step.id}
								className='surface-card group relative flex flex-col gap-4 rounded-3xl p-6 transition hover:-translate-y-1'>
								<div className='inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(200,159,133,0.22)] px-3 py-1 text-xs font-semibold text-[var(--color-coffee)]'>
									<span>{step.id}</span>
								</div>
						<h3 className='font-heading text-left text-lg font-semibold text-[var(--text-primary)]'>
									{step.title}
								</h3>
						<p className='text-left text-sm text-[var(--text-muted)]'>
									{step.description}
								</p>
								<div className='overflow-hidden rounded-xl border border-[rgba(107,62,38,0.08)] bg-[rgba(245,237,230,0.7)] p-4 '>
									<img
										src={step.image}
										alt=''
										width={300}
										height={100}
										className='w-full rounded-lg object-contain'
									/>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<BackToTop />
			<Footer />
		</>
	)
}

export default Home
