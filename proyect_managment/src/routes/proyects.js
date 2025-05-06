const { Router } = require("express");
const { getProyects, getProyectById, addProyect, editProyect, removeProyect, addResearcherToProyect } = require("../controllers/projectController");

const router=Router();

router.get('/',getProyects);
router.get('/:proyectId',getProyectById);
router.post('/',addProyect);
router.put('/:proyectId',editProyect);
router.delete('/proyectId',removeProyect);
router.put('/:id/add-researcher/:researcherId',addResearcherToProyect);

module.exports=router;