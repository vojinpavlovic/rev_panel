/*
export default {
    findById: `
        SELECT
            accounts, 
            \`group\`, 
            inventory, 
            job, 
            job_grade, 
            firstname, 
            lastname, 
            sex, 
            height, 
            phone_number, 
            status, 
            vreme,
            health, 
            pancir, 
            credits 
        FROM users WHERE identifier = ?
    `
}
*/
export default {
    findById: `
        SELECT
            users.accounts, 
            users.group, 
            users.inventory, 
            users.job, 
            users.job_grade, 
            users.firstname, 
            users.lastname, 
            users.sex, 
            users.height, 
            users.phone_number, 
            users.status, 
            users.vreme,
            users.health, 
            users.pancir, 
            users.credits 
        FROM users 
        JOIN 
            owned_vehicles t2 ON users.identifier = owned_vehicles.owner
        WHERE users.identifier = "1100001375eb794" IS NULL 
    `
}