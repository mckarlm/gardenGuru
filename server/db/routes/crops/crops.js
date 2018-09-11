const router = require('express').Router();
const Crop = require('../../models/Crop');

router.get('/', (req, res) => {
  console.log('request for crops');
  res.json('crops');
});

router.post('/', (req, res) => {
  console.log('posting to crops');
  res.json('add a new crop')
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  return Crop
  .query({where: {id}})
  .fetch()
  .then(crop=>{
    return res.json(crop)
  })
  .catch(err=>{
    console.log('err.message', err.message);
  })
});

router.put('/:id', (req, res) => {
  console.log('editing crop');
  res.json('edit specific crop');
});

module.exports = router;