import * as tuitsDao from './tuits-dao.js'

const createTuit = async(req, res) => {
    const newTuit = req.body;
    //newTuit.idd = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    //tuits.push(newTuit);
    newTuit.disliked = false;
    newTuit.dislikes = 0
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    /*const tuitIndex = tuits.findIndex(
        (t) => t.idd === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};*/
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    //res.json(status);
    res.sendStatus(200);
}

const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    //tuits = tuits.filter((t) => t.idd !== tuitdIdToDelete);
    res.json(status);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

