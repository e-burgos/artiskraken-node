'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        "Shops",
        [
            {
                id: 1,
                name: "Artis Kraken",
                phone: "+541126790610",
                email: "info@artiskraken.com.ar",
                avatar: "default-shop.jpg",
                ranking: 10,
                status: "active",
                sales: 0,
                bio: "Tienda administradora de sitio",
                facebook: "https://www.facebook.com/",
                instagram: "https://www.instagram.com/",
                tokenKey:
                    "TEST-3427457278487920-040812-e748dbb3b0df38859deb13d94806b239-738956078",
                publicKey: "TEST-44ec7572-89fa-4a49-8bca-322540114415",
                marketplaceLink: null,
                marketplaceApp: null,
                twitter: "https://www.twitter.com/",
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 2,
                name: "BLDRS Europe 100 ADR Index Fund",
                phone: "830-609-1096",
                email: "ihourahan1@hp.com",
                avatar: "default-shop.jpg",
                ranking: 2,
                status: "active",
                sales: 0,
                bio:
                    "Dilation of Left Colic Artery with Three Intraluminal Devices, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2021-01-09 07:52:14",
                updatedAt: "2020-12-16 16:41:14",
            },
            {
                id: 3,
                name: "Rosehill Resources Inc.",
                phone: "651-209-5141",
                email: "knajara2@narod.ru",
                avatar: "default-shop.jpg",
                ranking: 2,
                status: "active",
                sales: 0,
                bio:
                    "Replacement of Pulmonary Valve with Zooplastic Tissue, Transapical, Percutaneous Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-04-20 13:32:18",
                updatedAt: "2020-09-27 00:17:55",
            },
            {
                id: 4,
                name: "Waterstone Financial, Inc.",
                phone: "479-678-4607",
                email: "mtitman3@gnu.org",
                avatar: "default-shop.jpg",
                ranking: 2,
                status: "active",
                sales: 0,
                bio:
                    "Reattachment of Left Inferior Parathyroid Gland, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-08-29 01:03:15",
                updatedAt: "2020-04-15 03:09:28",
            },
            {
                id: 5,
                name: "Rexnord Corporation",
                phone: "387-716-4948",
                email: "areeder4@cpanel.net",
                avatar: "default-shop.jpg",
                ranking: 4,
                status: "active",
                sales: 0,
                bio:
                    "Occlusion of Celiac Artery, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-08-02 20:53:10",
                updatedAt: "2020-05-19 10:10:21",
            },
            {
                id: 6,
                name: "Public Storage",
                phone: "215-450-3512",
                email: "orosenzwig5@accuweather.com",
                avatar: "default-shop.jpg",
                ranking: 2,
                status: "active",
                sales: 0,
                bio:
                    "Dilation of Left Axillary Artery with Three Intraluminal Devices, Open Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2021-03-16 05:13:45",
                updatedAt: "2021-01-10 14:45:28",
            },
            {
                id: 7,
                name: "Eco-Stim Energy Solutions, Inc.",
                phone: "273-749-8933",
                email: "sibotson6@edublogs.org",
                avatar: "default-shop.jpg",
                ranking: 2,
                status: "active",
                sales: 0,
                bio:
                    "Insertion of Infusion Device into Right External Jugular Vein, Open Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-11-08 09:19:45",
                updatedAt: "2020-04-14 23:27:15",
            },
            {
                id: 8,
                name: "Cabot Oil & Gas Corporation",
                phone: "694-428-4386",
                email: "hrickersy7@de.vu",
                avatar: "default-shop.jpg",
                ranking: 3,
                status: "active",
                sales: 0,
                bio:
                    "Reposition Bilateral Kidneys, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-12-30 13:40:46",
                updatedAt: "2020-08-07 13:24:46",
            },
            {
                id: 9,
                name: "U.S. Bancorp",
                phone: "978-649-6649",
                email: "nclawson8@goodreads.com",
                avatar: "default-shop.jpg",
                ranking: 2,
                status: "active",
                sales: 0,
                bio:
                    "Tomographic (Tomo) Nuclear Medicine Imaging of Head and Neck using Iodine 131 (I-131)",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-09-05 19:14:56",
                updatedAt: "2021-03-19 05:13:42",
            },
            {
                id: 10,
                name: "Eltek Ltd.",
                phone: "323-906-2230",
                email: "fgoodyear9@google.com.hk",
                avatar: "default-shop.jpg",
                ranking: 4,
                status: "active",
                sales: 0,
                bio:
                    "Supplement Left 2nd Toe with Nonautologous Tissue Substitute, Open Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-09-09 18:32:07",
                updatedAt: "2020-04-21 23:44:11",
            },
            {
                id: 11,
                name: "Equinix, Inc.",
                phone: "358-544-5141",
                email: "arosia@businessinsider.com",
                avatar: "default-shop.jpg",
                ranking: 5,
                status: "active",
                sales: 0,
                bio:
                    "Removal of Drainage Device from Upper Back, Open Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2020-06-12 15:31:44",
                updatedAt: "2021-02-25 18:55:21",
            },
            {
                id: 12,
                name: "First Trust RiverFront Dynamic Asia Pacific ETF",
                phone: "452-239-7990",
                email: "felsterb@prweb.com",
                avatar: "default-shop.jpg",
                ranking: 5,
                status: "active",
                sales: 0,
                bio:
                    "Dilation of Left Posterior Tibial Artery with Three Drug-eluting Intraluminal Devices, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com/",
                twitter: "https://www.twitter.com/",
                instagram: "https://www.instagram.com/",
                tokenKey: null,
                publicKey: null,
                marketplaceLink: null,
                marketplaceApp: null,
                createdAt: "2021-03-15 11:37:07",
                updatedAt: "2020-06-20 19:50:49",
            },
        ],
        {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shops', null, {});
  }
};