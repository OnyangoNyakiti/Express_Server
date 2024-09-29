import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type ="a weekday";
    let adv = "Its time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "Its time to have some fun";
    };
    res.render("index.ejs", {dataType: type, advice: adv});
})

app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});