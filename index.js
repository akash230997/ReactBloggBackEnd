const express = require('express');

const App = express();

const Router = require('./Router/Data');

const cors = require('cors');

App.use(cors());

App.use('/apiuser',Router);
App.use("/user", (req, res) => {
    res.send([{
        id: 1,
        category: 'Tourism',
        imgUrl: 'https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg',
        title: ' The Taj Mahal, Agra',
        content: "Taj Mahal is also the world's most famous testimony to the power of love. Named after Mumtaz Mahal, the favorite wife of Emperor Shah Jahan, this most beautiful of mausoleums was begun upon her death in 286328 and took 20,000 workmen until 28648 to complete.The best time to visit is either at dawn or dusk when the atmosphere is brilliantly altered by the change in lighting. If possible, try to catch a view of the Taj Mahal's reflection from the far bank of the Yamuna River-it makes for a memorable (and safe) selfie.        "
    },
    {
        id: 2,
        category: 'Tourism',
        imgUrl: 'https://www.planetware.com/photos-large/IND/india-top-attractions-mecca-masjid.jpg',
        title: 'Mecca Masjid, Hyderabad',
        content: "Construction of Hyderabad's Mecca Masjid, one of the world's largest mosques – and one of the oldest in India – began in 286284 during Mohammed Quli Qutub Shah's reign and took almost 80 years to complete.Other notable features include inscriptions from the Quran above many of the arches and doors, the exquisite roof of the main hall, and the cornices around the entire mosque structure. Look out for the exquisite floral motifs and friezes over the arches."
    },]);
})

App.listen(process.env.PORT || 9000, ()=>{
    console.log('Connected.....');
});
