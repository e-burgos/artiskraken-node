'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        "Users",
        [
            {
                id: 1,
                name: "Artis Kraken",
                userName: "artis.kraken",
                phone: "+541126790610",
                email: "admin@artiskraken.com.ar",
                dni: 32323232,
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                avatar: "default-avatar.png",
                admin: true,
                status: "active",
                role: "seller",
                bio: "Usuario administrador de sitio",
                facebook: "https://www.facebook.com/",
                instagram: "https://www.instagram.com/",
                twitter: "https://www.twitter.com/",
                shopId: 1,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 2,
                name: "Monroe Weare",
                userName: "Wendie Perrigo",
                phone: "744-186-5436",
                email: "wperrigo1@spiegel.de",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 5387299,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 2,
                role: "seller",
                bio:
                    "Drainage of Left Sternoclavicular Joint, Open Approach, Diagnostic",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-07-04 22:48:49",
                updatedAt: "2020-12-27 23:20:27",
            },
            {
                id: 3,
                name: "Talbert Celler",
                userName: "Eliot Medwell",
                phone: "105-651-0073",
                email: "emedwell2@flavors.me",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 2428164,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 3,
                role: "seller",
                bio:
                    "Supplement Tricuspid Valve created from Right Atrioventricular Valve with Synthetic Substitute, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-07-31 02:38:19",
                updatedAt: "2020-06-23 23:52:02",
            },
            {
                id: 4,
                name: "Lothario Kindon",
                userName: "Esmeralda Murrock",
                phone: "815-206-5500",
                email: "emurrock3@dailymail.co.uk",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 2631417,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 4,
                role: "seller",
                bio: "Repair Left Trunk Muscle, Open Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-05-11 18:05:15",
                updatedAt: "2020-05-30 23:44:52",
            },
            {
                id: 5,
                name: "Katine Ugolini",
                userName: "Demetra Mangeon",
                phone: "519-534-9321",
                email: "dmangeon4@behance.net",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 5071673,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 5,
                role: "seller",
                bio:
                    "Bypass Left Atrium to Pulmonary Vein Confluence with Autologous Arterial Tissue, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-02-05 23:00:34",
                updatedAt: "2020-11-18 02:51:09",
            },
            {
                id: 6,
                name: "Gaby Doxey",
                userName: "Tamera Cratere",
                phone: "722-474-4318",
                email: "tcratere5@ow.ly",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 9764738,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 6,
                role: "seller",
                bio:
                    "Drainage of Celiac Artery, Percutaneous Approach, Diagnostic",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-09-26 20:50:28",
                updatedAt: "2020-10-02 05:08:58",
            },
            {
                id: 7,
                name: "Vania Comfort",
                userName: "Evelin Savill",
                phone: "816-298-8686",
                email: "esavill6@google.es",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 8874571,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 7,
                role: "seller",
                bio: "Alteration of Left Lower Eyelid, Percutaneous Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-10-19 15:42:23",
                updatedAt: "2020-08-10 02:43:50",
            },
            {
                id: 8,
                name: "Thorin Ifill",
                userName: "Mahmoud Kynsey",
                phone: "696-766-3784",
                email: "mkynsey7@webeden.co.uk",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 1044672,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 8,
                role: "seller",
                bio:
                    "Drainage of Left Shoulder Region, Percutaneous Endoscopic Approach, Diagnostic",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-07-27 19:23:20",
                updatedAt: "2020-02-10 13:45:29",
            },
            {
                id: 9,
                name: "Kris Shirtcliffe",
                userName: "Eleni Skingley",
                phone: "646-667-6928",
                email: "eskingley8@nba.com",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 357026,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 9,
                role: "seller",
                bio:
                    "Repair Left Palatine Bone, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-11-11 03:06:03",
                updatedAt: "2020-03-14 05:36:32",
            },
            {
                id: 10,
                name: "Barbe Stocker",
                userName: "Etty Claisse",
                phone: "947-222-4886",
                email: "eclaisse9@nyu.edu",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 3135545,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 10,
                role: "seller",
                bio:
                    "Replacement of Pharynx with Synthetic Substitute, Open Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-03-04 11:56:24",
                updatedAt: "2020-12-13 08:02:53",
            },
            {
                id: 11,
                name: "Zachariah Asquith",
                userName: "Orrin Benit",
                phone: "364-632-8900",
                email: "obenita@harvard.edu",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 9699483,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 11,
                role: "seller",
                bio: "Beam Radiation of Neck Lymphatics using Photons <1 MeV",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-08-29 00:22:00",
                updatedAt: "2020-07-14 17:27:43",
            },
            {
                id: 12,
                name: "Marrilee Reason",
                userName: "Blancha Treadway",
                phone: "422-431-8551",
                email: "btreadwayb@mtv.com",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 6155909,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: 12,
                role: "seller",
                bio:
                    "Supplement of Right Upper Arm Subcutaneous Tissue and Fascia with Synthetic Substitute, Open Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-09-19 21:09:05",
                updatedAt: "2020-06-14 11:41:32",
            },
            {
                id: 13,
                name: "Mada Ruberti",
                userName: "Ebba Lait",
                phone: "740-782-4809",
                email: "elaitc@jigsy.com",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 1830071,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Bypass Cerebral Ventricle to Bone Marrow with Nonautologous Tissue Substitute, Percutaneous Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-09-15 03:59:40",
                updatedAt: "2020-11-02 08:53:06",
            },
            {
                id: 14,
                name: "Isak Crabb",
                userName: "Robinet MacAlroy",
                phone: "508-943-2086",
                email: "rmacalroyd@businessinsider.com",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 337584,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Supplement Left Knee Joint with Nonautologous Tissue Substitute, Open Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-09-14 16:05:42",
                updatedAt: "2020-12-11 23:33:17",
            },
            {
                id: 15,
                name: "Franciska Renney",
                userName: "Hildagarde Biesterfeld",
                phone: "474-451-5597",
                email: "hbiesterfelde@xrea.com",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 810569,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Destruction of Right Occipital Bone, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-01-30 18:58:01",
                updatedAt: "2020-08-05 01:55:44",
            },
            {
                id: 16,
                name: "Tandie Hagyard",
                userName: "Nona Soppitt",
                phone: "510-297-8619",
                email: "nsoppittf@yahoo.co.jp",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 5137800,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Bypass Descending Colon to Cutaneous with Nonautologous Tissue Substitute, Open Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-11-19 16:33:03",
                updatedAt: "2020-12-04 19:26:41",
            },
            {
                id: 17,
                name: "Genovera Lount",
                userName: "Daryn McIlwrath",
                phone: "691-275-1710",
                email: "dmcilwrathg@blogger.com",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 2499208,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Removal of Artificial Sphincter from Urethra, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-08-08 01:19:38",
                updatedAt: "2020-02-14 04:32:42",
            },
            {
                id: 18,
                name: "Ruth Burriss",
                userName: "Nicholle Cokly",
                phone: "396-840-2385",
                email: "ncoklyh@epa.gov",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 7368194,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Supplement Right Middle Finger with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-09-15 02:16:51",
                updatedAt: "2020-08-16 20:25:33",
            },
            {
                id: 19,
                name: "Misty Kellough",
                userName: "Damaris Heakins",
                phone: "715-641-5524",
                email: "dheakinsi@unblog.fr",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 2005548,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Planar Nuclear Medicine Imaging of Upper Gastrointestinal Tract using Indium 111 (In-111)",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-12-25 14:42:25",
                updatedAt: "2020-09-30 14:29:33",
            },
            {
                id: 20,
                name: "Suzanne Majury",
                userName: "Annetta Potteridge",
                phone: "539-750-6301",
                email: "apotteridgej@goodreads.com",
                password:
                    "$2b$10$iVndD6XNtV89tpz.nRx6SuZna8My/PZMPbiXEO9mQ.HZoCmN92BSK",
                dni: 2066627,
                avatar: "default-avatar.png",
                admin: 0,
                status: "active",
                shopId: null,
                role: "buyer",
                bio:
                    "Occlusion of Left Hepatic Duct, Percutaneous Endoscopic Approach",
                facebook: "https://www.facebook.com",
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                createdAt: "2020-11-16 17:27:05",
                updatedAt: "2020-04-16 09:27:27",
            },
        ],
        {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
