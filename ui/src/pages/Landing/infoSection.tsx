import * as React from 'react'
import { Component } from 'react'
import { Row } from 'react-bootstrap'

interface InfoSectionProps {}

interface InfoSectionState {}

class InfoSection extends React.Component<InfoSectionProps, InfoSectionState> {
    render() {
        return (
            <Row className="py-3">
                <h3>Promise</h3>
                <p>
                    The core, categorized index will always be available for
                    free, for any use.
                </p>
                <h3>Operations</h3>
                <p>
                    Podcast Index LLC is a software developer focused
                    partnership that provides tools and data to anyone who
                    aspires to create new and exciting Podcast experiences
                    without the heavy lifting of indexing, aggregation and data
                    management.
                </p>
                <h3>Financing</h3>
                <p>
                    The core Podcast Index is financed by its founders and
                    stakeholders: Podcasters, Developers and Listeners.
                </p>
                <p>
                    Corporate interests and advertising are antithetical to our
                    business.
                </p>
                <p>
                    Podcast Index LLC strives to grow by providing enhanced API
                    services of value to developers and organizations.
                </p>
                <h3>Mission and Goal</h3>
                <p>
                    Preserve, protect and extend the open, independent
                    podcasting ecosystem.
                </p>
                <p>
                    Re-tool podcasting to a platform of value exchange that
                    includes developers with podcasters and listeners.
                </p>
                <h3>Developer? Join the fun!</h3>
                <p>
                    Sign up for an account and get API keys at:{' '}
                    <a href="https://api.podcastindex.org/signup">
                        https://api.podcastindex.org
                    </a>
                </p>
                <p>
                    Download our full podcast database as a sqlite3 file over
                    IPFS{' '}
                    <a
                        href="https://cloudflare-ipfs.com/ipns/k51qzi5uqu5dkde1r01kchnaieukg7xy9i6eu78kk3mm3vaa690oaotk1px6wo/podcastindex_feeds.db.tgz"
                        target="_blank"
                    >
                        here
                    </a>{' '}
                    or using HTTP{' '}
                    <a href="https://public.podcastindex.org/podcastindex_feeds.db.tgz">
                        here
                    </a>
                    .
                </p>
                <p>
                    API Documentation is{' '}
                    <a
                        target="_blank"
                        href="https://podcastindex-org.github.io/docs-api/"
                    >
                        here
                    </a>
                    .
                </p>
                <p>
                    We build in the open. Get active in the{' '}
                    <a href="https://github.com/Podcastindex-org">
                        Github repos
                    </a>
                    .
                </p>
                <p>
                    We have a Mastodon server for collaboration. Join it here:{' '}
                    <a href="https://podcastindex.social/invite/hfcQYbjq">
                        Podcastindex.social
                    </a>
                </p>
                <p>
                    Follow us on {/*the blog:{' '}*/}
                    {/*<a href="https://blog.podcastindex.org/">*/}
                    {/*    blog.podcastindex.org*/}
                    {/*</a>{' '}*/}
                    {/*or on{' '}*/}
                    <a href="https://twitter.com/PodcastindexOrg">
                        Twitter
                    </a> or{' '}
                    <a href="https://noagendasocial.com/@podcastindex">
                        Mastodon
                    </a>
                    .
                </p>
                <p>
                    Shoot us an email at:{' '}
                    <a href="mailto:info@podcastindex.org">
                        info@podcastindex.org
                    </a>
                </p>
            </Row>
        )
    }
}

export default InfoSection
