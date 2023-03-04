
module.exports = (express,app)=>{

    const {
        getAllPeople,
        addNewPerson,
        updatePerson,
    } = require("../controller/people.controller");
    const router = express.Router();
    // get all people
    router.get("/",getAllPeople );

    // API for adding new person

    router.post("/",addNewPerson);

    // API to update person

    router.put("/:id",updatePerson);

    app.use("/api/people",router);
}