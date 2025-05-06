const { Router } = require("express");
const { getPublications, getPublicationById, addPublication, updatePublication, removePublication } = require("../controllers/publicationController");

const router=Router();

router.get('/',getPublications);
router.get('/:publicationId',getPublicationById);
router.post('/',addPublication);
router.put('/:publicationId',updatePublication);
router.delete('/:publicationId',removePublication);

module.exports=router;