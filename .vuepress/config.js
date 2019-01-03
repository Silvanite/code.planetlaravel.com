module.exports = {
    title: 'Planet Laravel Code Hub',
    description: 'Useful, interesting and fun code snippets for the Laravel PHP Framework',
    ga: 'UA-21597279-18',
    themeConfig: {
        nav: [
            { text: 'Planet Laravel', link: 'https://www.planetlaravel.com' },
        ],
        sidebar: [
            '/random/',
            '/generic/',
            '/authentication/',
            '/database/',
            '/interfaces/',
            '/models/',
            '/tinker/',
            '/testing/',
        ],
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        repo: 'Silvanite/code.planetlaravel.com',
        repoLabel: 'Contribute!',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    }
}