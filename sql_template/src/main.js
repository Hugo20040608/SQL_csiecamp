const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

// let sql = `
//     SELECT name,type FROM pragma_table_info("Users");
// `

let sql2 = `
    //////////////
` 

//how can we execute the sql query?
db.all(sql2, (error, row12) => {
    if(error) return console.error(error);
    row12.forEach(row => {
        console.log(row);
    })});
    
    // db.all(sql2, (error, row) => {
        //         console.log(row);
        //     });
        
        // SELECT name FROM pragma_table_info("Users");
        
        // ALTER TABLE Users
        // RENAME COLUMN Emali TO Email
        
        // INSERT INTO Users(id, Username, Email, DOB)
        // VALUES("9368","Rice","gehhhhh@gxxxx.cxm","2093-06-30");
        
        // SELECT id,username,email,DOB FROM Users
        // WHERE (id == "9368");
        
        // UPDATE Users
        // SET id = 930608
        // WHERE id = "9368"
        
        // DELETE FROM Users
        // WHERE id = "930608"
        





