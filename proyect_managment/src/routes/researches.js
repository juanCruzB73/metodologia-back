const { Router } = require("express");
const { getResearchers, getResearcherById, addResearcher, updateResearcher, removeResearcher } = require("../controllers/researcherControlelr");

const router=Router();

router.get('/',getResearchers);
router.get('/:researchesId',getResearcherById);
router.post('/',addResearcher);
router.put('/:researcherId',updateResearcher);
router.delete('/:researcherId',removeResearcher);

module.exports=router;