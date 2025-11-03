import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { FALLBACK_LANGUAGE, useI18n } from '../context/I18nContext'
import { getPageSEO } from '../utils/seo'
import BackToTop from '../components/BackToTop'

const Contributors = () => {
	const [contributors, setContributors] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState('all')
	const { t, language } = useI18n()
	const navigate = useNavigate()
	const activeLanguage = language ?? FALLBACK_LANGUAGE
	const seoData = getPageSEO('contributors', activeLanguage)

	useEffect(() => {
		const fetchContributors = async () => {
			try {
				setLoading(true)
				const response = await fetch(
					'https://api.allorigins.win/raw?url=' +
						encodeURIComponent(
							'https://api.github.com/repos/2MJ-DEV/BuyMeACoffee-Africa/contributors'
						)
				)

				if (!response.ok) {
					throw new Error('FETCH_CONTRIBUTORS_FAILED')
				}

				const data = await response.json()
				setContributors(data)
				setError(null)
			} catch (err) {
				console.error(err)
				setError(
					err?.message === 'FETCH_CONTRIBUTORS_FAILED' ? 'fetch' : 'general'
				)
			} finally {
				setLoading(false)
			}
		}

		fetchContributors()
	}, [])

	const filteredContributors = useMemo(() => {
		switch (filter) {
			case 'top':
				return contributors.filter((profile) => profile.contributions >= 10)
			case 'active':
				return contributors.filter(
					(profile) => profile.contributions >= 3 && profile.contributions < 10
				)
			case 'fresh':
				return contributors.filter((profile) => profile.contributions < 3)
			default:
				return contributors
		}
	}, [contributors, filter])

	const contributorBadge = useCallback(
		(count) => {
			if (count >= 10) {
				return t('contributors.badges.top')
			}
			if (count >= 3) {
				return t('contributors.badges.active')
			}
			return t('contributors.badges.fresh')
		},
		[t]
	)

	const filtersConfig = useMemo(
		() => [
			{ id: 'all', label: t('contributors.filters.all') },
			{ id: 'top', label: t('contributors.filters.top') },
			{ id: 'active', label: t('contributors.filters.active') },
			{ id: 'fresh', label: t('contributors.filters.fresh') },
		],
		[t]
	)

	if (loading) {
		return (
			<div className='page-shell flex min-h-screen items-center justify-center bg-gradient-to-b from-[rgba(245,237,230,0.96)] via-[rgba(200,159,133,0.28)] to-[rgba(245,237,230,0.96)]'>
				<div className='surface-card flex flex-col items-center gap-4 rounded-3xl px-10 py-12'>
					<span className='inline-flex size-12 items-center justify-center rounded-full border border-[rgba(200,159,133,0.4)] bg-[rgba(245,237,230,0.8)]'>
						<span className='size-6 animate-spin rounded-full border-2 border-[rgba(107,62,38,0.15)] border-t-[rgba(107,62,38,0.55)]' />
					</span>
					<p className='text-sm font-medium text-[var(--text-secondary)]'>
						{t('common.status.loadingContributors')}
					</p>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='page-shell flex min-h-screen items-center justify-center bg-gradient-to-b from-[rgba(245,237,230,0.96)] via-[rgba(200,159,133,0.28)] to-[rgba(245,237,230,0.96)] px-6'>
				<div className='surface-card w-full max-w-md rounded-3xl p-10 text-center'>
					<div className='mx-auto flex size-12 items-center justify-center rounded-full border border-[rgba(225,169,72,0.4)] bg-[rgba(225,169,72,0.18)] text-lg font-semibold text-[var(--color-coffee)]'>
						!
					</div>
					<h2 className='mt-6 font-heading text-xl font-semibold text-[var(--text-primary)]'>
						{t('contributors.errors.title')}
					</h2>
					<p className='mt-3 text-sm text-[var(--text-secondary)]'>
						{error === 'fetch'
							? t('contributors.errors.fetch')
							: t('contributors.errors.general')}
					</p>
				</div>
			</div>
		)
	}

	return (
		<>
			<SEO {...seoData} />
			<Navbar />
			<main className='page-shell bg-gradient-to-b from-[rgba(245,237,230,0.96)] via-[rgba(200,159,133,0.28)] to-[rgba(245,237,230,0.96)] pt-32 pb-24'>
				<section className='mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center'>
					<span className='chip-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]'>
						{t('common.navigation.contributors')}
					</span>
					<h1 className='font-heading max-w-3xl text-balance text-4xl font-semibold text-[var(--text-primary)] md:text-5xl'>
						{t('contributors.title')}
					</h1>
					<p className='max-w-2xl text-base text-[var(--text-secondary)] md:text-lg'>
						{t('contributors.description')}
					</p>
				</section>

				<section className='mx-auto mt-16 w-full max-w-6xl px-6'>
					<div className='mt-4 mb-6 flex flex-wrap items-center justify-center gap-3'>
						{filtersConfig.map((item) => (
							<button
								key={item.id}
								type='button'
								onClick={() => setFilter(item.id)}
								className={`chip-badge inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${filter === item.id ? 'ring-2 ring-[var(--color-honey)] ring-offset-2 ring-offset-transparent' : ''}`}>
								{item.label}
							</button>
						))}
					</div>

					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{filteredContributors.map((contributor) => (
							<a
								key={contributor.id}
								href={contributor.html_url}
								target='_blank'
								rel='noopener noreferrer'
								className='surface-card group relative overflow-hidden rounded-3xl p-6 pb-8 text-center transition hover:-translate-y-1'>
								<div className=''>
									<span className='chip-badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]'>
										{contributorBadge(contributor.contributions)}
									</span>
								</div>
								<div className='relative mx-auto h-24 w-24 mt-8'>
									<img
										src={contributor.avatar_url}
										alt={`${contributor.login}'s avatar`}
										className='h-full w-full rounded-full border border-[rgba(200,159,133,0.4)] object-cover shadow-inner transition group-hover:border-[rgba(200,159,133,0.7)]'
									/>
									<div className='absolute -bottom-1 -right-1 inline-flex min-w-8 items-center justify-center rounded-full bg-[var(--color-coffee)] px-2 py-1 text-xs font-semibold text-[var(--color-cream)] shadow-lg shadow-[rgba(43,27,18,0.3)]'>
										{contributor.contributions}
									</div>
								</div>
								<h3 className='mt-5 text-base font-semibold text-[var(--color-espresso)] transition group-hover:text-[var(--color-coffee)]'>
									{contributor.login}
								</h3>
								<p className='mt-2 text-sm text-[var(--text-muted)]'>
									{contributor.contributions === 1
										? t('contributors.list.contributionSingular', {
												count: contributor.contributions,
											})
										: t('contributors.list.contributionPlural', {
												count: contributor.contributions,
											})}
								</p>
							</a>
						))}
					</div>
				</section>

				<section className='mx-auto mt-24 w-full max-w-5xl px-0'>
					<div className='surface-card rounded-[3rem] px-10 py-16 text-center'>
						<h3 className='font-heading text-3xl font-semibold text-[var(--color-espresso)]'>
							{t('contributors.footerTitle')}
						</h3>
						<p className='mt-4 text-base text-[var(--text-secondary)] md:text-lg'>
							{t('contributors.footerSubtitle')}
						</p>
						<div className='mt-8 flex flex-wrap justify-center gap-4'>
							<a
								href='https://github.com/2MJ-DEV/BuyMeACoffee-Africa'
								target='_blank'
								rel='noopener noreferrer'
								className='btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold'>
								{t('contributors.button.view')}
							</a>
							<button
								onClick={() => navigate(`/${activeLanguage}`)}
								className='btn-outline inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold'>
								{t('common.actions.backToHome')}
							</button>
						</div>
					</div>
					<BackToTop />
				</section>
			</main>

			<Footer />
		</>
	)
}

export default Contributors